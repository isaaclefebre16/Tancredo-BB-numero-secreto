const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.lang = 'pt-Br'
  recognition.start()

  recognition.addEventListener('result', onPeack)

  function onPeack(e) {
    console.log(e.result[0][0.].transcript)
  }
