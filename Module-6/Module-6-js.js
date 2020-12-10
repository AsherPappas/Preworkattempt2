var button = document.getElementById("button1");
var button = document.getElementById("button2");
var button = document.getElementById("button3");
var button = document.getElementById("button4");
document.getElementById("button1").addEventListener(
    "click", 
    function(){
        document.getElementById("box").style.height = "250px";
        }
    );
document.getElementById("button2").addEventListener(
    "click", 
    function(){
        document.getElementById("box").style.backgroundColor = "Blue";
    }
);
document.getElementById("button3").addEventListener(
    "click",
    function(){
        document.getElementById("box").style.opacity = .5;
    }
);
document.getElementById("button4").addEventListener(
    "click", 
    function(){
        document.getElementById("box").style.height = "50px";
        }
    );
document.getElementById("button5").addEventListener(
    "click", 
    function(){
        document.getElementById("box").style.height = "150px"; 
        document.getElementById("box").style.backgroundColor = "Orange";
        document.getElementById("box").style.opacity = 1;
        }
    );
