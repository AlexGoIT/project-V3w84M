import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import {
  PlayIcon,
  TimerBtn,
  TimerSub,
  TimerText,
  TimerTitle,
  TimerWrapper,
} from './Timer.styled';

import symbolDefs from '../../assets/images/sprite.svg';
import { useState } from 'react';

const Timer = ({
  time,
  burnedCalories,
  setDynamicBurnCal,
  dynamicBurnCal,
  setDynamicTime,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const children = ({ remainingTime }) => {
    const duration = time * 60;

    setDynamicBurnCal(() => {
      const timeN = (duration - remainingTime) / duration;

      const burnCal = (timeN * burnedCalories) / time;
      return Math.round(burnCal);
    });

    setDynamicTime(() => Math.round((duration - remainingTime) / 60));

    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0'
    )}`;
  };

  return (
    <TimerWrapper>
      <TimerTitle>Time</TimerTitle>
      <CountdownCircleTimer
        strokeWidth={4}
        size={124}
        isPlaying={isPlaying}
        duration={time * 60}
        colors={'#E6533C'}
        trailColor="rgba(239, 237, 232, 0.10)"
        remainingTime={time * 60}
        strokeLinecap="round"
      >
        {({ remainingTime }) => (
          <div style={{ color: '#fff' }} role="timer" aria-live="assertive">
            {children({ remainingTime })}
          </div>
        )}
      </CountdownCircleTimer>
      <TimerBtn onClick={handlePlay}>
        <PlayIcon>
          <use
            href={isPlaying ? `${symbolDefs}#pause` : `${symbolDefs}#play`}
          ></use>
        </PlayIcon>
      </TimerBtn>
      <TimerText>
        Burned calories:<TimerSub>{dynamicBurnCal}</TimerSub>
      </TimerText>
    </TimerWrapper>
  );
};

export default Timer;
