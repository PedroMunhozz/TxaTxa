import React from 'react';
import Confetti from 'react-confetti';

const Confete = () => {
  return (
    <div>
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        recycle={false}
        numberOfPieces={2700}
        gravity={0.1}
        tweenDuration={9000}
        colors={['#FFC0CB', '#FF69B4', '#FF1493', '#C71585']}
        confettiSource={{ x: window.innerWidth / 2, y: -20 }}
        initialVelocityX={13}
        initialVelocityY={20}
        shapes={['heart']}
      />
    </div>
  );
};

export default Confete;
