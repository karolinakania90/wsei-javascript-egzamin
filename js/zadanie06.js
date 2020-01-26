document.addEventListener('DOMContentLoaded', (event) => {

    const buttons = document.getElementsByTagName('button');

    buttons[0].onclick = function() {

        var list = document.getElementById("shopping-list");
        var li = document.createElement("li");

        li.appendChild(document.createTextNode("chleb"));
        list.appendChild(li);
    };



    buttons[2].onclick = function() {

        var list = document.getElementById("shopping-list");
        var last = list.children[list.children.length - 1];


        list.removeChild(last);
    };
})