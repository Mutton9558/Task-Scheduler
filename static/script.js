const MENU = document.querySelectorAll(".sidebar-icon"); // Use querySelectorAll to get all elements with class "sidebar-icon"
const CONTENT = document.querySelector(".content");
const MENUBTN1 = document.querySelector("#menu-btn-1")
const MENUBTN2 = document.querySelector("#menu-btn-2")
const USERBTN = document.querySelector("#profile-img");
const DROPDOWN = document.querySelectorAll("#user-profile")
MENU.forEach((menu) => {
    menu.addEventListener("click", () => {
        menu.classList.toggle("active"); // Toggle the 'active' class on click
        CONTENT.classList.toggle("active");
    });
});

let isDarkMode = false;
function toggleMode(){
    const MODEBTN = document.querySelector('#toggle-mode');
    if (!isDarkMode){
        document.querySelector('#override').innerHTML = `
        body {
            font-family: 'Roboto Mono';
            font-weight: 400;
            color: #e8e6fb;
            background-color: #23242a;

            margin:0;
            padding:0;
        }

        button {
            color: #e8e6fb;
        }

        #profile {
            border: #e8e6fb 2px solid;
            box-shadow: 0 0 2px white;
        }

        .sidebar-menu {
            position: fixed;
            height: 100vh;
            width: 20vw;
            background-color:#636476; 
            top: 0;
            left: 0;
            z-index: 1000;
            overflow: hidden;
            border: #444451 2px solid; 
            box-shadow: 0 0 10px #444451;
            transition: transform 0.3s ease;
            transform: translateX(-100vh);
        }
        #toggle-mode {
            font-family: 'Roboto Mono';
            font-weight: 400;
            display: flex; /* Enables flexbox */
            align-items: center; /* Vertically centers the items */
            justify-content: center; /* Horizontally centers the items */   
            padding: 10px;
            background-color: #636476;
            border: none;
            cursor: pointer;
            width: 16vw;
            height: 8vh;
            padding-right: 10ch;
        }

        #toggle-mode:hover{
            background-color: #828298;
            border: 1px solid #9091a9;
            border-radius: 20px;
        }`;
        MODEBTN.innerHTML = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAA6RJREFUSEuVlt+LTVEUxz+LoSmFF5KneeLRFPk1zA/UiBD5UaLkQZHy7gFT/gJFeZAnUZTkV/KrGeNXSCkPnqZRUl4kYhDbWeesc+/e5+w999o1987dZ5/93Wut7/p+t5AYArjUw3zeX9F6dWMrW6pfNtp7OV+VWvof89IaThBcNfouYJ8Ffh7HeOvMhUhtAIdJNbABHA8MrB9kOC9M6ygaa9oAju42ABHgSNh+aaqsiFZZoM/BTOB6ZL9+4KHN9wKPImu2AJ8FRmKcSJBL1oC7AXSAbAB3r5LG2UC3gb0GvlSABxGu4/gNbACGqwdLpXotcBuYBnwHdKPRBsNqnRSUQ8twC+iEHHi9V5YguylSbAKuAj/s5cfeqQVkoRHqnZLeg+4B7iB04mQzOD1EbXip9p81ttkBvAee21Pd9ChCH44ZNvfNIjoJvDBp6XEw1w4ecqh9AWkc4iBw2iSrolz53n8R9uC46ItSRAOsI1OcDvtyOfDE0P7YAUom9wGHgCkIEzjpFty7Um6bJagISAO+rFK88RR0BaCgeoiXYdGkB9yozSkvtiWlPEh18UNlUP/KYW0i88B9tMlTAkfq0eRPz2V82J9x4BcwC5gA/LbTNWMI42UyS1YPCRzz6Kkiof2nhBq1CJRsVxLR7Ea4YJsucsIbnAyAK6VVgU9k5RoyAjZ4ohPHvIhL4KVNVstOcJeDNDdLtwu4ZM+WAK+yg/vSGgJ7Je8S6Coizj9KRdJ0fS5Tnf1/pASuqPgZQJn/11L8Vb8Fuj1fHwN1MnU8b8TNJZ+9D6wxci1DeFUxo5UCj5wyG1RqVXwmHXXJjKALLHHwDJgq8DsTB41uRGCaE1biOGzt9BPHYuBtrBxtuVNEBA4AZ1PiIPDHCXtVQFK3lCRwJDfbgQ8CT61Oq7O8H89sUE3EL9K1jBhKTuWFjlWZyMwJJTMpIDVYMwn5AW7QlKtctABkvpnEWHj1kV4zBnUn3UNdrjYSJsE64CYwXYUgi3jQwUglyuIeWueEXgzuFLYoE3boyrvFa/ZycKnT/lPgjsxxNmYicrdy5NpFoIKvHqzsVvVaH3i5bZSKuKzTbJAbtRu20I9refXZmpnHJ4HH9fu5ELST7yST2ZkT8lumrS8VzoulWYIaw0uTaAcswowmcBF9caeKK1BUSIIa+ymt9lzgmoWLFRd6OA8y3sxQXIHC+1ol1dGjTTJZg0hNRObrWp0KNdqJTWfOI66922iYWuf9A089RzLRWc3lAAAAAElFTkSuQmCC"/> Toggle Light Mode';
        MENUBTN1.src= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAdZJREFUSEudV1l2wzAIFD1Zj+aj5WSh0c4ySKT+8JPRwjYDMpX6UCmFqVDhwk2wRKUKxnRb0wTykaJorHes85cYHAu2TKuAhW41cEZsAx4ME0Ak9uKcmXuVN2LEEsTPKZabpXE4MDBlyGPnw+Vs7HM+EjD1EmixP7cZYLkQaQgPzG3F8WaX7yOq9Tn1S8KzjZn5qaQRk7FriYVE9NgDvGIqhd/vzt7joZXzFWz28Zvoo/mgeE8xD8XHFGoF8muP+8grRga7wEeCG7CCeQ8uUEcAtQf2TCmF+NxrIG+gYXku9soNCktkNCogcy0z/4qMZ/Edxp6IXjaeDW7T6jniD586r6zOIcBIAooBuFSODX6q4gQ9hSJgkJjtqNbp6/wyFYffINTAEhwQHw76oZdu9LM4Xfr7P4lz3KYqyhHLUesKqGJx48C1BT4H6pIDGgAC5jrv2DBUHxhcbLU6QvUXQRepnuCydzptpFQc6ZEgbuMMqn1lXKie0cm1xQvhtMePrm4o1IbTiH9n4IBaGbAmxuUFIE5FAlDr3t7W7he4cV6qfYZOZ49zHcnRbxj97eUQXn1OfynXcmT+cFxJnhjCfsbFxKVRdBv1a3VJn/c4QkwGaJdsSVv+AKnt8SIllMRwAAAAAElFTkSuQmCC"
        MENUBTN2.src= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAdZJREFUSEudV1l2wzAIFD1Zj+aj5WSh0c4ySKT+8JPRwjYDMpX6UCmFqVDhwk2wRKUKxnRb0wTykaJorHes85cYHAu2TKuAhW41cEZsAx4ME0Ak9uKcmXuVN2LEEsTPKZabpXE4MDBlyGPnw+Vs7HM+EjD1EmixP7cZYLkQaQgPzG3F8WaX7yOq9Tn1S8KzjZn5qaQRk7FriYVE9NgDvGIqhd/vzt7joZXzFWz28Zvoo/mgeE8xD8XHFGoF8muP+8grRga7wEeCG7CCeQ8uUEcAtQf2TCmF+NxrIG+gYXku9soNCktkNCogcy0z/4qMZ/Edxp6IXjaeDW7T6jniD586r6zOIcBIAooBuFSODX6q4gQ9hSJgkJjtqNbp6/wyFYffINTAEhwQHw76oZdu9LM4Xfr7P4lz3KYqyhHLUesKqGJx48C1BT4H6pIDGgAC5jrv2DBUHxhcbLU6QvUXQRepnuCydzptpFQc6ZEgbuMMqn1lXKie0cm1xQvhtMePrm4o1IbTiH9n4IBaGbAmxuUFIE5FAlDr3t7W7he4cV6qfYZOZ49zHcnRbxj97eUQXn1OfynXcmT+cFxJnhjCfsbFxKVRdBv1a3VJn/c4QkwGaJdsSVv+AKnt8SIllMRwAAAAAElFTkSuQmCC"
        USERBTN.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAA/FJREFUSEull1uoVlUUhb+xMykkOFhSCpHYTehJxDAKhOjRAumhnqKCIAmkDhYZSNBFjAiLQigoiB6C7K16qociuhAmWdHBSuihRLGoBzXC4x79a9/WWnvv//dEPxw4e7HXvIw55pxji/P+BPg/vZXeqP5vDuK5CP83v/Dg7qXqML2Vul5aLNHESNgatzEIsbpqlwXoRmAdsKaxdwx8FPSVpAjNSJYVcsl59tDCkiJhl1cBTwB3Gi5NYEpzOQm8C+yR9GvEcbxQWcb9epT2cvBuo8cEyzsvIa8quRhC8vQP8GwdQHFuituRGjfWba8G3pv8bUzTGvFZlyELozr6JCAk6Y/6fl7UOuReoW2vBb4ArsizHHUwcJwEcRTYLOn3Pr8yVgezLj2HOAhcPSTjSF4DOFrIOggOAbdI+rvfZlnb2H4DfN+U+rVuFoEjzcN68AXx/dHgnpP0eErYjFy2rwcWhuVqrxijA4Ltbe1sXzZprdeAbfVbo47PgNcWKk6mwySW0Q4GHuhDHE35UOhjSedSarhiP4eB9cPydCdPTfr8ybTNKpRcBrj4E7hkxuWHJO3PyNgUrrTnBS/kd7Psj0jqAuvIZZdbQB9nF4eobZX0wVh7lPZW1e2Xgd1rv+sk/RQy7Wpsl/eA3pzt2I9IxYspXO2MtD0/QStmPGj46uAOSVVwScbeaXi+HUhTGud7YIMKLXYLqypTuQz0A3DtKNQxiIclvdR3nEecYNYL/h3gQUmBD9heBX7VaFudxcgojUfzkvZFxzW57gbenkGsaNQsIhYMF6rOMhAzdkc3yge43SUpBJ5BvbkZk7N99x2MvD1jvm2SFKZi5rgwHBesmuI52AuDP7B6AXy6ub4CuAG4PYzGGVH/BlzZ7uxsVtvlfsz2dGc1hr7B3KuiODxLBtneNJnxb01KFiZgD3v2SZpvVU22021f04zMZQlcJ0JGcb3FZqqkUi9F20GZfAesrJZO6FlzFrEuCoRMc9XAlfbrwP0JQf8CbpP09azit5vHLjeCPgLmEo6/LGlHen+gYmyvBL5Me9JwSvAM+BWpOF0byJe47TBqd4B3Ga1IWutb4GapOBURSiZXF03dWkHMfQ5cnvcIZyZGPgQ+A35s2ijs7S3ArZiLe/z4pRIChU6kA6fVfI3tQQZrMO8jNiy5v/IXPw2rcsiNBq+BvE0OXPqiidgOq+zRdkgkK7ImTuOsJ/aexuxVUa/PoT5fkqCvxmKYTruaZT83vusJ7D8ABLWRy9sR8T4q9gbqr4m62dk3AUFnr3b9dXIM+Bk4mAn6AQFzxTVFm/eJf/5vp3hjKGOzj4TsSyKNLlX1/8f/NEY2jv8FAc+MN0BM1EsAAAAASUVORK5CYII=";
        isDarkMode = true;
    } else if (isDarkMode){
        document.querySelector('#override').innerHTML = ``;
        MODEBTN.innerHTML = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAA61JREFUSEuNl1uITlEUx3+LB0KujQxyqSkPQomIJry45IFJ4WWSiBeUS414d82tXBIJySXUkOaBF7cidykPIoopRmqQkIfl2+es78w+397n++bUzHxzvn32Wuv//6//XkcE0K5fVL+ShTXWQNEq/777HLkijwbJVW6jxRGTCIKgWdpp4KI9gvgyE7QR4SLKBz/jeJV210/aPnuBC6P3BF0JrAcmWrDLwNKuwGE1ZUJ8KsOKA7CzJOqAVmBGuiS7fwpkVW2+iyhLd4pyLOhUFa6jDLOY31EG2OIWYI9fcZKEj2yEh1Bc4QNjgGfAIKtzn8JR4J0lsRjlWjFQQUpdeIUcZwn3AnkMOsEqaAbOAYNLPH+zHZpQWms3V3FjxaDeCOy3AC0oe+xxB3On3d+Gys6A49qZ5OjwEesNfAKGAE+AqXk4pQPUCe4uMKs7UBe1XGXFDtazltYc4Ham5bSa4wJrUqdjfKmlXselWUvvrv28LhG4osISlK/A0FClMhn0qQU7bL1dxYGi3pSFzJIW6FChDuU04EwjJs8bwELgLzAH4UHUvkPXS32+rGrPzRy/vy3SVmB3eZEPnMBYFZ6hDDSVTwfexv3A7haYYvmZkcBH+2cVcCpWse2xAGizz50gTaCJHiqvrph5CHyO+wE/0wdlM2jaUjEG0z02lAzmkK1QQY8qbAf57ntyERLiHxzAr5IV9gE5ALoprDhvcQLzFS5AArvj7y/KvRL3dxDeo3QKTFSY4mgR2KLwIz0i8/q5rzATeAOMi53oEY+oN8NZHuITQLYOOFJG0f+2BWGXiW+awqPucZak40TmfGCZGVAM5Yay31dWPFqFd6i4M/gmMC97uoKTqioG527DgXqBSwr9gVvAXF83+b3hZEndTtWOimY0OSDyV9UkfB1IK+gio6xJoDUdECo4tt1Hgbwqqdpl6fraDQEvalQYm55Wg5wwD3DVOvSySdGD2h9fZB5oG0IPVP4Iuk3hYPGImVN7XxPbGhPRFyXx9fRI9RQVKSbZaC1wDFzHJYneB2kGzYa8AHGhEZXzoM6M3PXDKn0YY6sairOBqwKDDSP3p90s8j3wGXDTivtpIPH5rOFeAk2AWxeIJDYIGP0ZIXUCu1RYiRbNaLl9nQntQNiL8i9umZLgWPxukDeqSaXsV9hYO8L48wrkOcIVVM6AthcOfjGOi5LoTvfE+YrsmDsWs94qv2LkS61UY/j2lB/o89qNv9r4p1O6Ptf/3XpHqyLOYiL/AxrCTThv8OMTAAAAAElFTkSuQmCC"/> Toggle Dark Mode';
        MENUBTN1.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAZpJREFUSEutVlmWhDAIJDebo/XR5mbOy2KAUCzpN/602shSC9poH42IHqLx06jR06/GsW7xfRnKCdIznScNX4Vl3Cpsmk5yycf6OTzOoHd6hkDCAZozWXW3hcKagkFH5Qjp6FRuEjWWmONKRR1jWFkFxcRLUKwAvwrOprHP+DZcysJfiijHxYWaPok2sMZ8JEa+cyZESlFB+Wyb0sMWimNWbHuMuLAKQWUtZ3GlYpWdfAXyFpP1Qx2GApywbzXKKYsg+t7xVu9bzdtQ4ea6Hdssk1fVend0qn8498UbAcC7bv0KYPe76LzXr4UGE7Js08o2Yqt44lIFHr7yd3VOh3zL6gGUqkVLE+rQQjUKSlBjXm2nAg6gau8jwobCJTCsBbAMXQD2vOd1u7kutAR0Fdr/bBoFux8cZQsDZE9A0PaZhb3pI/ywAIyIrapnMfta/GqH7oc+5xQtpzSP6El5z2tVezqYE4e5K4Xv4VBQV0pgOyVeX5rQqFw1W2nNN5m1039BHbrgMM/tDBggkCUZxtrJZE5aW39XQJMxf/eUxifu/TXQAAAAAElFTkSuQmCC"
        MENUBTN2.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAZpJREFUSEutVlmWhDAIJDebo/XR5mbOy2KAUCzpN/602shSC9poH42IHqLx06jR06/GsW7xfRnKCdIznScNX4Vl3Cpsmk5yycf6OTzOoHd6hkDCAZozWXW3hcKagkFH5Qjp6FRuEjWWmONKRR1jWFkFxcRLUKwAvwrOprHP+DZcysJfiijHxYWaPok2sMZ8JEa+cyZESlFB+Wyb0sMWimNWbHuMuLAKQWUtZ3GlYpWdfAXyFpP1Qx2GApywbzXKKYsg+t7xVu9bzdtQ4ea6Hdssk1fVend0qn8498UbAcC7bv0KYPe76LzXr4UGE7Js08o2Yqt44lIFHr7yd3VOh3zL6gGUqkVLE+rQQjUKSlBjXm2nAg6gau8jwobCJTCsBbAMXQD2vOd1u7kutAR0Fdr/bBoFux8cZQsDZE9A0PaZhb3pI/ywAIyIrapnMfta/GqH7oc+5xQtpzSP6El5z2tVezqYE4e5K4Xv4VBQV0pgOyVeX5rQqFw1W2nNN5m1039BHbrgMM/tDBggkCUZxtrJZE5aW39XQJMxf/eUxifu/TXQAAAAAElFTkSuQmCC"
        USERBTN.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAA6BJREFUSEullkuoTlEUx3/LRSQlj3BL5F1G0tUVdUuGKBkwEkqREkIoKa9IQqQoSgYKM4wYkDwS8oq8ygARYuCR0HL2Ofucs1/no+zB952zz15rr8d//dcS/ncJoK6SaCNxg2BO2WVe1OpwhX1F+Vv9Q64huLjW49/pynoXBxpSsegGTAZGAu32wBuQF6A3HcsTBrlbnsdNMc/tHA5sBOYCAwovrav133uFM8AO4JWnLRFAx+Mq4q7jPYFNwLpMoXluvQqDfoButwb8zgV8G/MN7+LAsKEKZ4FJrnD03Byoy6jMBf2YOlJc7Iau2BgBeh0YkkxWy9s9914IdCp8CGEWhxr6AbeAUXGemkul/hLF9Q7CNFS+uzmUhMAxVBZ5h6qKqU7/Ap5Yw8aDtOXno8hVpu8C1nupDHwYBzwGY09dnEHuTyssA8rcDcxK6wgwp7gmUffwzabvfc0afvCNgiWxeHXojq3jAq31QYP4e4Dx3mEU73kL6OZKzPnUBnwC+oZAcLxfDhxKeQaszmT3pLGa22JSM76UdVBNl8ClIsARQEpbZgqcb6DMmQhnffp0Xch1jkV4VsKh/LoAON4CIMagVaD7/IhUb5XH9ffIgdkZLxhusARSoHEN6G4/dVFQHwITAYNqZ0l30EfAmNCoALwrEfaHHicsTvp2Clhq8WAODAIO16j2QBc2L3PH3poyC7PmAycbwhhuG48fAz2slwaYyRV4PA8whnv9uNPSZKQgZtSiYpr5IspyudGBcMt0Noe5ML32LcKg5ESRd3e5LOh5Lbz9arX1ASYAs4BpRRjLgcLz4TUwrCxyjzIFPaTCskRJ3AUWWpJolcSOjONPZCkzDBiuvbbW833XY/M+2lKmQWkp+M56lGxvEe6LyeQB0N+5+aedWqoBIdUWj4Isri+Wz6AzslDebuDhkJ9N/75I0eVKuw6grHBDELdFoT/KjaAmvwDbgIN1biNyMFRrlG8ATN7LdR+YCnxxO2GqHxsBM8xdQxgcAO0b6AXgKshT0DaEUShdwHSgd5DYl0Anwrt4Ei2LKh7e2hXOWaby9dk6itDrF+0VSyof4xHYr+NwQDaX9co2NwusVchJonkGqWz7AWzNZHeC/G7R1xPAD7qTwBgVNqB5s69B44sa9J8G2SXoqzKARe2khv4w1Ak7gp49BTBz9tBcnfAG5bmd00o+S3nj7Xng+ocwxgpdcLdUEI9Ef7Wu6YBfHoZRUzBJS/8BqcovOZPA8QkAAAAASUVORK5CYII="
        isDarkMode = false;
    } else {
        console.log("Error");
    }
}

function toggleButtonActive(){   
    DROPDOWN.forEach((drop) => {
        drop.classList.toggle("active"); // Toggle the 'active' class on click
    });
}