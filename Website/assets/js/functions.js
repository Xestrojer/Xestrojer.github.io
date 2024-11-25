window.onload = function() {setMode()};
   
function setMode() {
  let mode = localStorage.getItem('mode');
  if(!mode) mode = 'light';
  document.body.classList.add(mode);
}

function toggleMode() {
  let element = document.body;
  let btn = document.getElementById("darkmode-button");
  let mode = localStorage.getItem('mode')

  if(!mode) mode = 'dark';

  if(mode == 'dark') {
    localStorage.setItem("mode", "light");
    element.classList.remove("dark");
    element.classList.add("light");
    btn.innerHTML = 'Dark mode';
  }
  else {
    localStorage.setItem("mode", "dark");
    element.classList.remove("light");
    element.classList.add("dark");
    btn.innerHTML = 'Light mode';
  }    
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  let mybutton = document.getElementById("STTBtn");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}