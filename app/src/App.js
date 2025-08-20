
import './App.css';
import Q from './Heater-1.mp3'
import W from './Heater-2.mp3'
import E from './Heater-3.mp3'
import A from './Heater-4_1.mp3'
import S from './Heater-6.mp3'
import D from './Dsc_Oh.mp3'
import Z from './Kick_n_Hat.mp3'
import X from './Kick_n_Hat.mp3'
import C from './Cev_H2.mp3'
import { useState,useEffect } from 'react';

function App() {

  const pads = [
    { key: 'Q', sound: Q, display: "Heater 1" },
    { key: 'W', sound: W, display: "Heater 2" },
    { key: 'E', sound: E, display: "Heater 3" },
    { key: 'A', sound: A, display: "Heater 4" },
    { key: 'S', sound: S, display: "Clap" },
    { key: 'D', sound: D, display: "Opeh HH" },
    { key: 'Z', sound: Z, display: "Kick n' Hat" },
    { key: 'X', sound: X, display: "kick" },
    { key: 'C', sound: C, display: "Closed HH" }
  ];

  const [displayElement, setDisplayElement] = useState("");

  useEffect(() => {
  const handleKeyPress = (e) => {
    const key = e.key.toUpperCase();
    const pad = pads.find(p => p.key === key);
    if (pad) handlePlayAudio(pad);
  };

  document.addEventListener('keydown', handleKeyPress);
  return () => document.removeEventListener('keydown', handleKeyPress);
}, []);

  const handlePlayAudio = (pad) => {
    if (pad) {
      setDisplayElement(pad.display)
      const audio = document.getElementById(pad.key);
      if (audio) {
      audio.pause();         // stop if already playing
      audio.currentTime = 0; // rewind
      audio.play().catch(err => console.log(err)); // handle promise errors
    }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div id="drum-machine">
          <div id="display">
            {displayElement}
          </div>
          {pads.map((pad) => (
            <div
              key={pad.key}
              id={pad.display}
              className="drum-pad"
              onClick={() => handlePlayAudio(pad)}
            >
              {pad.key}
              <audio
                src={pad.sound}
                className="clip"
                id={pad.key}
              ></audio>
            </div>
          ))}

        </div>
      </header>
    </div>
  );
}

export default App;
