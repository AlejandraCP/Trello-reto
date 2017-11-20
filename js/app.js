var box = document.getElementById('container');
var tarea = document.getElementById('span');

window.onload = function () {
    add();
}

function add() {
    tarea.addEventListener('click', function () {
                var input = document.createElement('input');
                var btn = document.createElement('button');
                var icon = document.createElement('i');
                var div = document.createElement('div');

                btn.textContent = 'Guardar';
                icon.setAttribute('class', 'fa fa-times');
                div.appendChild(input);
                div.appendChild(btn);
                div.appendChild(icon);

                btn.classList.add('button');

                box.appendChild(div);
                box.removeChild(tarea);

}

