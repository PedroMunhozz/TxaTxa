import React, { useState, useEffect } from 'react';
import './App.css'; 

function App() {  
  const [startDate] = useState(new Date('2022-09-16T21:00:00'));
  const [endDate] = useState(new Date('2026-01-29T23:59:59'));

  const timeElapsed = endDate - startDate;

  // const [timeElapsed, setTimeElapsed] = useState(null);

  const formatTimeElapsed = () => {
    const seconds = Math.floor((timeElapsed / 1000) % 60);
    const minutes = Math.floor((timeElapsed / 1000 / 60) % 60);
    const hours = Math.floor((timeElapsed / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));

    return (
      <div className="time-container">
        <div className="time-box">{days} d</div>
        <div className="time-box">{hours} hrs</div>
        <div className="time-box">{minutes} min</div>
        <div className="time-box">{seconds} sec</div>
        <div className="juntos"> juntos</div>
      </div>
    );
  };

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     const currentTime = new Date();
  //     const elapsedTime = currentTime - startDate;
  //     setTimeElapsed(elapsedTime);
  //   }, 1000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [startDate]);

  // const formatTimeElapsed = () => {
  //   if (timeElapsed === null) {
  //     return 'Calculating...';
  //   }

  //   const seconds = Math.floor((timeElapsed / 1000) % 60);
  //   const minutes = Math.floor((timeElapsed / 1000 / 60) % 60);
  //   const hours = Math.floor((timeElapsed / (1000 * 60 * 60)) % 24);
  //   const days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));

  //   return (
  //     <div className="time-container">
  //       <div className="time-box">{days} d</div>
  //       <div className="time-box">{hours} hrs</div>
  //       <div className="time-box">{minutes} min</div>
  //       <div className="time-box">{seconds} sec</div>
  //       <div className="juntos"> juntos</div>
  //     </div>
  //   );
  // };

  return (
    <div>
      <div>
        <h1 className='titulo'>Feliz dia dos namorados, meu amor (2023)!😍</h1>
        {formatTimeElapsed()}
      </div>
       <div className="image-container">
       <div className="image image1"></div>
        <div className="image image2"></div>
        <div className="image image3"></div>
        <div className="image image4"></div>
        <div className="image image5"></div>
        <div className="image image6"></div>
        <div className="image image7"></div> 
      </div>
    </div>
  );
}

export default App;
// import React, { useEffect } from 'react';
// import ConfettiGenerator from 'confetti-js';

// const Confete = () => {
//   useEffect(() => {
//     const confettiSettings = {
//       target: 'confetti-canvas',
//       size: 3,
//       animate: true,
//       props: ['circle', 'square', 'triangle', 'heart'],
//       colors: [
//         [255, 0, 0], // vermelho
//         [255, 165, 0], // laranja
//         [255, 255, 0], // amarelo
//         [0, 128, 0], // verde
//       ],
//     };

//     const confetti = new ConfettiGenerator(confettiSettings);
//     confetti.render();

//     return () => {
//       confetti.clear();
//     };
//   }, []);

//   return <canvas id="confetti-canvas" />;
// };

// export default Confete;

// export default function Confete() {
//   React.useEffect(() => {
//     const confettiSettings = { target: 'my-canvas' };
//     const confetti = new ConfettiGenerator(confettiSettings);
//     confetti.render();

//     return () => confetti.clear();
//   }, []) // add the var dependencies or not
// }