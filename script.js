document.addEventListener('DOMContentLoaded', function () {
  const horrorFace = document.querySelector('.horror-face');
  const ghostText = document.querySelector('.ghost-text');

  let vibrationInterval; // Variable to store the interval ID

  horrorFace.addEventListener('click', function () {
    playHorrorSound();
    startContinuousVibration();
    showHackingPopup();
    showGhostText();
    downloadDevilGoatPicture();
    shakeWebpage();
    toggleGlowEffect();
    toggleFlickerEffect();
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
    audio.play();
  }

  function showHackingPopup() {
    alert('Danger: Your device has been hacked! 😈');
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
});
