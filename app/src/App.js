import logo from './logo.svg';
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
import { useState } from 'react';

function App() {
  const pads = [
    { key: 'Q', sound: Q, dispaly: "Heater 1" },
    { key: 'W', sound: W, dispaly: "Heater 2" },
    { key: 'E', sound: E, dispaly: "Heater 3" },
    { key: 'A', sound: A, dispaly: "Heater 4" },
    { key: 'S', sound: S, dispaly: "Clap" },
    { key: 'D', sound: D, dispaly: "Opeh HH" },
    { key: 'Z', sound: Z, dispaly: "Kick n' Hat" },
    { key: 'X', sound: X, dispaly: "kick" },
    { key: 'C', sound: C, dispaly: "Closed HH" }
  ];
  const [displayElement, setDisplayElement] = useState("")
  const handlePlayAudio = (pad) => {
    if (pad) {
      setDisplayElement(pad.dispaly)
      const audio = document.getElementById(pad.key);
      audio.currentTime = 0;
      audio.play();
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
            <span key={pad.key} >
              <button className='drum-pad' onClick={() => handlePlayAudio(pad)} >{pad.key}</button>
              <audio src={pad.sound} className="clip" id={pad.key}></audio>
            </span>
          ))}

        </div>
      </header>
    </div>
  );
}

export default App;
