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

document.getElementById('contactForm').addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const surname = document.getElementById('surname').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const q1 = parseInt(document.getElementById('question1').value);
  const q2 = parseInt(document.getElementById('question2').value);
  const q3 = parseInt(document.getElementById('question3').value);
  const q4 = parseInt(document.getElementById('question4').value);
  const q5 = parseInt(document.getElementById('question5').value);

  if (!validateEmail(email)) {
    alert("Klaida: Neteisingas el. pašto formatas!");
    return;
  }

  if (!validatePhone(phone)) {
    alert("Klaida: Telefonas turi būti sudarytas tik iš skaičių!");
    return;
  }

  if (address.trim() === "") {
    alert("Klaida: Adresas negali būti tuščias!");
    return;
  }

  const formData = {
      name,
      surname,
      email,
      phone,
      address,
      q1,
      q2,
      q3,
      q4,
      q5
  };

  console.log('Form data:', formData);

  const avg = ((q1+q2+q3+q4+q5)/5);

  const result = `
      First-name: ${name} <br>
      Last-name: ${surname} <br>
      Email: ${email} <br>
      Phone number: ${phone} <br>
      Address: ${address} <br>
      Question 1: ${q1} <br>
      Question 2: ${q2} <br>
      Question 3: ${q3} <br>
      Question 4: ${q4} <br>
      Question 5: ${q5} <br>
      Result: ${name} ${surname} (${email}): <span id="avg">${avg.toFixed(2)}</span>
  `;

  document.getElementById('output').innerHTML = result;

  const avgSpan = document.getElementById('avg');
  if (avg >= 7) {
      avgSpan.style.color = "green";
  } else if (avg >= 4) {
      avgSpan.style.color = "orange";
  } else {
      avgSpan.style.color = "red";
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Paprastas el. pašto regex
  return re.test(email);
}

function validatePhone(phone) {
  const re = /^[0-9]+$/; // Tik skaičiai
  return re.test(phone);
}