import React, { useEffect, useState } from 'react';

const HeartRain = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now(),
        left: Math.random() * 100,
        size: Math.random() * 20 + 20, 
        duration: Math.random() * 2 + 3, 
      };
      setHearts((prev) => [...prev, newHeart])

      // remove os corações antigos após a animação
      setTimeout(() => {
        setHearts((prev) => prev.filter((heart) => heart.id !== newHeart.id))
      }, newHeart.duration * 1000)
    }, 300)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 2
      }}
    >
      {hearts.map((heart) => (
        <span
          key={heart.id}
          style={{
            position: 'absolute',
            top: 0,
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animation: `fall ${heart.duration}s linear`,
          }}
        >
          ❤️
        </span>
      ))}

      <style>
        {`
          @keyframes fall {
            0% {
              transform: translateY(0);
              opacity: 1;
            }
            100% {
              transform: translateY(95vh); /* agora limitado a 95% da viewport */
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default HeartRain