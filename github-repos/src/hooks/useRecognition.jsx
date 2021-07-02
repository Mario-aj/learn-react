import { useState } from 'react';

export const useRecognition = () => {
  const [error, setError] = useState(null);
  const [speech, setSpeech] = useState(null);
  const [isListening, setIsListening] = useState(false);

  const speechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition =
    speechRecognition !== undefined ? new speechRecognition() : null;

  if (!recognition) {
    setError('Speech recognition is not found!');
  }

  recognition.lang = 'en_US';

  recognition.onstart = () => setIsListening(true);
  recognition.onend = () => {
    setIsListening(false);
    setSpeech(null);
  };
  recognition.onerror = (e) => setError(e.message);
  recognition.onresult = (e) => setSpeech(e.results[0][0].transcript);

  return { result: { error, speech }, isListening, recognition };
};
