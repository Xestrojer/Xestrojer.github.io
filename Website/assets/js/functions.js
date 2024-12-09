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

function updateClock() {
  const clockElement = document.getElementById('clock');
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const currentTime = `${hours}:${minutes}:${seconds}`;

  clockElement.textContent = currentTime;
}

setInterval(updateClock, 1000);

updateClock();

function form() {

  const name = document.getElementById('name').value;
  const surname = document.getElementById('surname').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const question1 = parseInt(document.getElementById('question1').value);
  const question2 = parseInt(document.getElementById('question2').value);
  const question3 = parseInt(document.getElementById('question3').value);
  const question4 = parseInt(document.getElementById('question4').value);
  const question5 = parseInt(document.getElementById('question5').value);

  const formData = {
      name,
      surname,
      email,
      phone,
      address,
      question1,
      question2,
      question3,
      question4,
      question5
  };

  console.log('Formos duomenys:', formData);

  const average = ((question1 + question2 + question3 + question4 + question5) / 5).toFixed(2);

  const outputHTML = `
      <p><strong>Vardas:</strong> ${name}</p>
      <p><strong>Pavardė:</strong> ${surname}</p>
      <p><strong>El. paštas:</strong> ${email}</p>
      <p><strong>Telefono numeris:</strong> ${phone}</p>
      <p><strong>Adresas:</strong> ${address}</p>
      <p><strong>Klausimas 1:</strong> ${question1}</p>
      <p><strong>Klausimas 2:</strong> ${question2}</p>
      <p><strong>Klausimas 3:</strong> ${question3}</p>
      <p><strong>Klausimas 4:</strong> ${question4}</p>
      <p><strong>Klausimas 5:</strong> ${question5}</p>
      <p><strong>Rezultatas:</strong> ${name} ${surname} (${email}): ${average}</p>
  `;

  document.getElementById('output').innerHTML = outputHTML;
};