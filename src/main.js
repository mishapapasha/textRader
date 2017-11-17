//var msg = new SpeechSynthesisUtterance('John and elad are very gays');
//window.speechSynthesis.speak(msg);

var myNav = ["settings", "read"];
var myNav_heb = ["הגדרות", "טקסט לקריאה"];
var nav = "nav";

window.onload = function() {
    sideNav = document.getElementById("side-" + nav);
    console.log(sideNav);
    let ulNav = document.createElement("ul");
    ulNav.classList.add("ul-" + nav);
    sideNav.appendChild(ulNav);
    for (let i = 0; i < myNav.length; i++){
        //create and insert the li part of the navigator
        let temp_li = document.createElement("li");
        temp_li.classList.add("li-" + nav);
        ulNav.appendChild(temp_li)
        //create and insert the link part of the navigator
        let temp_a = document.createElement("a");
        temp_a.classList.add("a-" + nav);
        temp_a.href = "#" + myNav[i];
        temp_a.innerHTML = myNav_heb[i];
        temp_a.addEventListener("click", function(){
            redirect(myNav[i]);
        });
        temp_li.appendChild(temp_a);
    }
}



function redirect(option){
    alert(option);
}