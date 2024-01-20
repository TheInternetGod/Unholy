document.addEventListener('DOMContentLoaded', function () {
  const horrorFace = document.querySelector('.horror-face');
  const ghostText = document.querySelector('.ghost-text');

  let vibrationInterval; // Variable to store the interval ID

  horrorFace.addEventListener('click', function () {
    playHorrorSound();
    startContinuousVibration();
    showGhostText();
    downloadDevilGoatPicture();
    shakeWebpage();
    toggleGlowEffect();
    toggleFlickerEffect();
    // Show hacking popup after other effects
    setTimeout(function () {
      showHackingPopup();
      createCountdownElement();
      startCountdown();
    }, 2000); // Adjust the delay as needed
  });

  function toggleFlickerEffect() {
    horrorFace.classList.toggle('flicker');
  }

  function toggleGlowEffect() {
    horrorFace.classList.toggle('glow');
  }

  function shakeWebpage() {
    document.body.classList.add('shake');
    setTimeout(() => {
      document.body.classList.remove('shake');
    }, 500); // Adjust the duration of the shaking effect if needed
  }

  function downloadDevilGoatPicture() {
    const devilGoatPictureUrl = 'images/UnholyGoat.png'; // Replace with the correct path or URL
    const link = document.createElement('a');
    link.href = devilGoatPictureUrl;
    link.download = 'UnholyGoat.jpg'; // You can customize the downloaded file name
    link.click();
  }

  function showGhostText() {
    ghostText.classList.add('appear');
  }

  function playHorrorSound() {
    const audio = new Audio('audio/Unholygoat.mp3'); // Replace with your audio file
    audio.play()
      .catch(error => {
        console.error('Audio playback failed:', error.message);
      });
  }

  function startContinuousVibration() {
    if (navigator.vibrate) {
      vibrationInterval = setInterval(function () {
        navigator.vibrate([200, 100, 200]); // Vibration pattern: vibrate for 200ms, pause for 100ms, vibrate for 200ms
      }, 500); // Repeat the vibration every 500ms
    }
  }

  // Stop continuous vibration when the window is closed or navigated away
  window.addEventListener('beforeunload', function () {
    clearInterval(vibrationInterval);
  });

  function showHackingPopup() {
    alert('Danger: Your device has been hacked! 😈');
  }

  function createCountdownElement() {
  // Check for existing countdown element and remove it
  const existingCountdown = document.querySelector('.countdown');
  if (existingCountdown) {
    existingCountdown.remove();
  }

  // Create a fresh countdown element
  const countdownElement = document.createElement('div');
  countdownElement.classList.add('countdown');
  countdownElement.style.visibility = 'visible';
  countdownElement.style.display = 'block';
  countdownElement.textContent = '5'; // Initial countdown value
  document.body.appendChild(countdownElement);
  console.log('Countdown element created.');
}

function startCountdown() {
  let count = 5;
  const countdownInterval = setInterval(() => {
    playBeepSound();

    // Update countdown value
    const countdownElement = document.querySelector('.countdown');
    countdownElement.textContent = count;

    if (count <= 0) {
      clearInterval(countdownInterval);
      revealHackingPage();
    }

    count--;
  }, 1000);
}

  function revealHackingPage() {
  window.location.href = 'hacpage.html'; // Redirect immediately
}


  function playBeepSound() {
    const beepSound = new Audio('audio/Beep1.wav'); // Replace with your beep sound file
    beepSound.play();
  }
});
