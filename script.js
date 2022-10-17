const body = document.body;
        
    var ciclered= document.createElement("div")
    ciclered.className = "circle"
    ciclered.id ="red-circle" 
    document.body.appendChild(ciclered);
        
    var cicleblue= document.createElement("div")
    cicleblue.className = "circle"
    cicleblue.id ="blue-circle" 
    document.body.appendChild(cicleblue);
        
    var cicleyellow= document.createElement("div")
    cicleyellow.className = "circle"
    cicleyellow.id ="yellow-circle" 
    document.body.appendChild(cicleyellow);

    var ciclegreen= document.createElement("div")
    ciclegreen.className = "circle"
    ciclegreen.id ="green-circle" 
    document.body.appendChild(ciclegreen);
        
    var ciclepink= document.createElement("div")
    ciclepink.className = "circle"
    ciclepink.id ="pink-circle" 
    document.body.appendChild(ciclepink);

    document.getElementById("red-circle").onclick = function () {
        document.getElementById("red-circle").style.display = "none";
    };
    document.getElementById("yellow-circle").onclick = function () {
        document.getElementById("yellow-circle").style.display = "none";
    };

    document.getElementById("blue-circle").onclick = function () {
        document.getElementById("blue-circle").style.display = "none";
    };
    document.getElementById("green-circle").onclick = function () {
        document.getElementById("green-circle").style.display = "none";
    };

    document.getElementById("pink-circle").onclick = function () {
        document.getElementById("pink-circle").style.display = "none";
    };

    // make all circles visible again.
    window.onkeydown = function (event) {
        if (event.ctrlKey && event.key === "Escape") {
            document.getElementById("red-circle").style.display =
                "block";
            document.getElementById("yellow-circle").style.display =
                "block";
            document.getElementById("blue-circle").style.display =
                "block";
            document.getElementById("green-circle").style.display =
                "block";
            document.getElementById("pink-circle").style.display =
                "block";
        }
    };