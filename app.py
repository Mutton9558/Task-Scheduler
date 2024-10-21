from flask import Flask, redirect, url_for, render_template, request, session, flash
from datetime import timedelta, datetime
from dotenv import load_dotenv
import os
from flask_sqlalchemy import SQLAlchemy

load_dotenv('.env')
app = Flask(__name__)
app.secret_key = os.getenv('USERNAME')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///my_database.db'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.permanent_session_lifetime = timedelta(days=30)


db = SQLAlchemy(app)

class users(db.Model):
    id = db.Column("id", db.Integer, primary_key=True)
    name = db.Column("name", db.String(100))

    tasks = db.relationship('tasks', backref='user', lazy=True)

    def __init__(self, name):
        self.name = name

class tasks(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    taskName = db.Column(db.String(300))
    date = db.Column(db.Date)

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    def __init__(self, taskName, date, user_id):
        self.taskName = taskName
        self.date = date
        self.user_id = user_id  # Link task to user

# redirect(url_for("<name of function>")) < --- to redirect users to another page
# {{ this is for string/output from flask comms }}
# {% functions like for/while and much more %}
#  {% block _ %} {% endblock %}


@app.route("/home", methods=["POST", "GET"])
def home():
    if "user" in session and session["user"] != "":
        usr = session["user"]
        found_user = users.query.filter_by(name=usr).first()

        if found_user:
            user_tasks = tasks.query.filter_by(user_id=found_user.id).order_by(tasks.date.asc()).all()  # Sort by date in ascending order

            if request.method == "POST":
                if request.form["activity"] != "":
                    activity = request.form["activity"] 
                else:
                    flash("Please enter an activity")
                date_str = request.form["date"]

                try:
                    date_obj = datetime.strptime(date_str, '%Y-%m-%d').date()
                    if date_obj < datetime.now().date():
                        flash("Enter a valid date (Date after today)")
                        return redirect(url_for("home"))
                except ValueError:
                    flash("Invalid date format. Please enter a date in the format YYYY-MM-DD.")
                    return redirect(url_for("home"))  # Redirect back to the home page

                new_task = tasks(taskName=activity, date=date_obj, user_id=found_user.id)
                db.session.add(new_task)
                db.session.commit()  # Commit the new task to the database

                return redirect(url_for("home"))

            return render_template("index.html", user=usr, tasks=user_tasks)
        else:
            flash("User not found. Please log in again.")
            session.pop("user", None)
            return redirect(url_for("login"))
    else:
        return redirect(url_for("login"))
    

@app.route("/", methods=["POST", "GET"])
def login():
    if request.method == "POST": # to post user info to client
        session.permanent = True
        user = request.form["nm"] # request information from form element with nm name
        session["user"] = user # value of session["user"]

        found_user = users.query.filter_by(name=user).first()
        if found_user:
            pass
        else:
            usr = users(user)
            db.session.add(usr)
            db.session.commit()

        return redirect(url_for("home"))
    else:
        if "user" in session and session["user"] != "":
            return redirect(url_for("home"))
        return render_template("login.html")

@app.route("/logout")
def logout():
    if "user" in session and session["user"] != "": # checks if session not null
        usr = session["user"]
        flash("User Logged Out Successfully!")
    session.pop("user", None)
    return redirect(url_for("login"))

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)