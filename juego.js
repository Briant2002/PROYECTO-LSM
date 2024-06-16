// Array de letras y sus imágenes correspondientes en lenguaje de señas
const signLanguageImages = [
    { letter: 'A', imgSrc: 'img/a_sign.jpg' },
    { letter: 'B', imgSrc: 'img/b_sign.jpg' },
    { letter: 'C', imgSrc: 'img/c_sign.jpg' },
    { letter: 'D', imgSrc: 'img/d_sign.jpg' },
    { letter: 'E', imgSrc: 'img/e_sign.jpg' },
    { letter: 'F', imgSrc: 'img/f_sign.jpg' },
    { letter: 'G', imgSrc: 'img/g_sign.jpg' },
    { letter: 'H', imgSrc: 'img/h_sign.jpg' },
    { letter: 'I', imgSrc: 'img/i_sign.jpg' },
    { letter: 'J', imgSrc: 'img/j_sign.jpg' },
    { letter: 'K', imgSrc: 'img/k_sign.jpg' },
    { letter: 'L', imgSrc: 'img/l_sign.jpg' },
  ];
  
  // Elementos del DOM
  const signImage = document.getElementById('signImage');
  const optionsContainer = document.getElementById('optionsContainer');
  const message = document.getElementById('message');
  
  let currentSignIndex = 0;
  let correctAnswerIndex = 0;
  
  // Iniciar el juego
  document.addEventListener('DOMContentLoaded', startGame);
  
  // Función para iniciar el juego
  function startGame() {
    loadSignImage();
    displayOptions();
  }
  
  // Cargar la imagen de lenguaje de señas actual
  function loadSignImage() {
    const sign = signLanguageImages[currentSignIndex];
    signImage.src = sign.imgSrc;
    signImage.alt = `Lenguaje de señas para la letra ${sign.letter}`;
    correctAnswerIndex = getRandomInt(0, 3); // Generar un índice aleatorio para la respuesta correcta
  }
  
  // Mostrar las opciones de letras
  function displayOptions() {
    optionsContainer.innerHTML = ''; // Limpiar las opciones anteriores
  
    // Obtener las letras para las opciones (incluyendo la respuesta correcta)
    const options = [];
    for (let i = 0; i < 4; i++) {
      const option = (i === correctAnswerIndex) ? signLanguageImages[currentSignIndex].letter : getRandomLetter();
      options.push(option);
    }
  
    // Mostrar las opciones en el contenedor
    options.forEach(letter => {
      const optionButton = document.createElement('button');
      optionButton.classList.add('option');
      optionButton.textContent = letter;
      optionButton.addEventListener('click', () => checkAnswer(letter));
      optionsContainer.appendChild(optionButton);
    });
  }
  
  // Verificar si la opción seleccionada es la correcta
  function checkAnswer(selectedLetter) {
    const correctLetter = signLanguageImages[currentSignIndex].letter;
    if (selectedLetter === correctLetter) {
      message.textContent = '¡Respuesta correcta!';
    } else {
      message.textContent = `Respuesta incorrecta. La letra correcta era ${correctLetter}.`;
    }
  }
  
  // Generar un número entero aleatorio entre min (incluido) y max (excluido)
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  // Generar una letra aleatoria diferente a la respuesta correcta
  function getRandomLetter() {
    let randomLetter;
    do {
      randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Obtener una letra aleatoria en mayúscula (A-Z)
    } while (randomLetter === signLanguageImages[currentSignIndex].letter); // Evitar repetir la letra correcta
    return randomLetter;
  }
  
  // Avanzar a la siguiente ronda
  function nextRound() {
    currentSignIndex = (currentSignIndex + 1) % signLanguageImages.length; // Circular por el array de imágenes
    message.textContent = ''; // Limpiar el mensaje
    loadSignImage();
    displayOptions();
  }
  