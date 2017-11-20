var box = document.getElementById('container');
var tarea = document.getElementById('span');

window.onload = function() {
  add();
};

function add() {

  // función que crea un input y le botón
  tarea.addEventListener('click', function() {
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
    div.setAttribute('class', 'style-box');

    box.appendChild(div);
    box.removeChild(tarea);

    // función que crea un div con el contenido del input mas un div con el contenido 'Añadir tarea'
    btn.addEventListener('click', function() {
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

      div2.setAttribute('class', 'style-box');
      tarea2.setAttribute('class', 'shadow');

      // función al hacer clíck en Añadir tarea se crea un input y un botón
      tareaText.addEventListener('click', function() {
        var input2 = document.createElement('input');
        var span2 = document.createElement('i');
        var button2 = document.createElement('button');

        span2.setAttribute('class', 'fa fa-times');
        button2.textContent = 'Añadir';

        button2.classList.add('button');

        tarea2.appendChild(input2);
        tarea2.appendChild(button2);
        tarea2.appendChild(span2);
        tarea2.removeChild(tareaText);

        // función crea un párrafo con el contenido del segundo input
        button2.addEventListener('click', function() {

          var parr = document.createElement('p');
          parr.textContent = input2.value;
          input2.value = ' ';
          div2.insertBefore(parr, tarea2);
        });
      });
    });
  });
}
