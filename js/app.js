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

                btn.addEventListener('click', function () {

                    var div2 = document.createElement('div');
                    var tarea2 = document.createElement('div');
                    var text = document.createElement('p');
                    var tareaText = document.createElement('span');

                    div2.classList.add('left');
                    text.textContent = input.value;
                    input.value = '';
                    div2.appendChild(text);
                    tareaText.textContent = 'Añadir tarea';
                    tarea2.appendChild(tareaText);
                    div2.appendChild(tarea2);
                    box.insertBefore(div2, div);

                    tareaText.addEventListener('click', function () {
                    var input2 = document.createElement('input');
                    var span2 = document.createElement('i');
                    var button2 = document.createElement('button');

                    span2.setAttribute('class', 'fa fa-times');
                    button2.textContent = 'Añadir';

                    tarea2.appendChild(input2);
                    tarea2.appendChild(button2);
                    tarea2.appendChild(span2);
                    tarea2.removeChild(tareaText);

                    button2.addEventListener('click', function () {

                        var parr = document.createElement('p');
                        parr.textContent = input2.value;
                        input2.value = ' ';
                        div2.insertBefore(parr, tarea2);
                    })
                })
            })

    })
}

