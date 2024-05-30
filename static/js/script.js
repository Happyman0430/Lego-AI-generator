$('#mailsend').click(function(){
  fetch('/send_file', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "to": "to"
    })
  })
  .then(response => response.text())
  .then(data => {
    console.log(data)
  })
  .catch(error => {
      responseDiv.textContent = 'An error occurred: ' + error;
  });
})
const container = document.getElementById('colorContainer');
let selectedCard = null;
for (let i = 0; i < 50; i++) {
  const colorCard = document.createElement('div');
  colorCard.classList.add('colorCard');

  // Generate a random hex color code
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  colorCard.style.backgroundColor = randomColor;

  // Add an event listener to handle color selection or copying
  colorCard.addEventListener('click', () => {
    // Remove the red border from the previously selected card
    if (selectedCard) {
      selectedCard.style.border = '1px solid #ccc';
    }

    // Set the red border for the currently selected card
    colorCard.style.border = '3px solid red';
    selectedCard = colorCard;

    console.log(`Selected color: ${randomColor}`);
    // Add your desired functionality here
  });

  container.appendChild(colorCard);
}

const lego_container = document.getElementById('legoContainer');
let lego_selectedCard = null;
for (let i = 0; i < 4; i++) {
  const legoCard = document.createElement('div');
  legoCard.classList.add('legoCard');

  // Generate a random hex color code
  // const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  // legoCard.style.backgroundColor = randomColor;
  legoCard.style.backgroundImage = `url('/static/img/pattern/pattern (${i+1}).png')`
  legoCard.style.backgroundSize = '100% 100%';
  // Add an event listener to handle color selection or copying
  
  legoCard.addEventListener('click', () => {
    // Remove the red border from the previously selected card
    if (lego_selectedCard) {
      lego_selectedCard.style.border = '1px solid #ccc';
    }

    // Set the red border for the currently selected card
    legoCard.style.border = '3px solid red';
    lego_selectedCard = legoCard;

    // console.log(`Selected color: ${randomColor}`);
    // Add your desired functionality here
  });

  lego_container.appendChild(legoCard);
}
const lego_container1 = document.getElementById('legoContainer1');
let lego_selectedCard1 = null;
for (let i = 0; i < 4; i++) {
  const legoCard = document.createElement('div');
  legoCard.classList.add('legoCard');

  // Generate a random hex color code
  // const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  // legoCard.style.backgroundColor = randomColor;
  legoCard.style.backgroundImage = `url('/static/img/pattern/pattern (${i+1}).png')`
  legoCard.style.backgroundSize = '100% 100%';
  // Add an event listener to handle color selection or copying
  
  legoCard.addEventListener('click', () => {
    // Remove the red border from the previously selected card
    if (lego_selectedCard) {
      lego_selectedCard.style.border = '1px solid #ccc';
    }

    // Set the red border for the currently selected card
    legoCard.style.border = '3px solid red';
    lego_selectedCard = legoCard;
     

    // console.log(`Selected color: ${randomColor}`);
    // Add your desired functionality here
  });

  lego_container1.appendChild(legoCard);
}