var btn = document.getElementsByClassName('wire')[0];
var elements = document.getElementsByClassName('hov');

btn.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn.value === 'Wireframe') {
    btn.value = 'Normal';
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.zIndex = 0;
    }
  document.body.style.backgroundImage = 'url("img/wireframe_back.png")' ;
  document.body.style.backgroundSize = "cover";
  } else {
    btn.value = 'Wireframe';
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.zIndex = 1;
    }
    document.body.style.backgroundImage = "none" ;
    document.body.style.backgroundColor = "#121212";
  }
}

