from flask import Flask, redirect, url_for, render_template, request, session, flash
from datetime import timedelta
from dotenv import load_dotenv
import os

load_dotenv('.env')
app = Flask(__name__)
app.secret_key = os.getenv('USERNAME')
app.permanent_session_lifetime = timedelta(days=30)

# redirect(url_for("<name of function>")) < --- to redirect users to another page
# {{ this is for string/output from flask comms }}
# {% functions like for/while and much more %}
#  {% block _ %} {% endblock %}

@app.route("/home")
def home():
    if "user" in session and session["user"] != "": # checks if session not null
        usr = session["user"]
        return render_template("index.html", user = usr)
    else:
        return redirect(url_for("login"))
    

@app.route("/", methods=["POST", "GET"])
def login():
    if request.method == "POST": # to post user info to client
        session.permanent = True
        user = request.form["nm"] # request information from form element with nm name
        session["user"] = user # value of session["user"]
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
    app.run(debug = True)