var buttons = document.getElementsByTagName('button');

for (i = 0; i < buttons.length; i++) {
    let currentButton = buttons[i];
    currentButton.onclick = function() {
        let buttonText = this.getAttribute('data-text');
        let div = document.getElementById('container');
        div.innerHTML = buttonText;
    };
}