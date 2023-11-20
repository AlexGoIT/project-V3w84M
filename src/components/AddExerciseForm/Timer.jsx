import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import {
  PlayIcon,
  TimerBtn,
  TimerSub,
  TimerText,
  TimerTitle,
  TimerWrapper,
} from './Timer.styled';
import PropTypes from 'prop-types';

import symbolDefs from '../../assets/images/sprite.svg';
import { useEffect, useRef, useState } from 'react';

const Timer = ({
  time,
  burnedCalories,
  setDynamicBurnCal,
  dynamicBurnCal,
  setDynamicTime,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const updateDynamicValues = ({ remainingTime }) => {
      const duration = time * 60;

      setDynamicBurnCal(() => {
        const timeN = (duration - remainingTime) / duration;
        const burnCal = (timeN * burnedCalories) / time;
        return Math.round(burnCal);
      });

      setDynamicTime(() => Math.round((duration - remainingTime) / 60));
    };

    const interval = setInterval(() => {
      // Отримати залишок часу ще раз і викликати функцію оновлення значень
      updateDynamicValues({ remainingTime: remainingTimeRef.current });
    }, 1000);

    // При зміні isPlaying встановити або очистити інтервал
    if (isPlaying) {
      const remainingTime = time * 60;
      updateDynamicValues({ remainingTime });
      remainingTimeRef.current = remainingTime;
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isPlaying, time, burnedCalories, setDynamicBurnCal, setDynamicTime]);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const remainingTimeRef = useRef(time * 60);

  const children = ({ remainingTime }) => {
    remainingTimeRef.current = remainingTime;

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

Timer.propTypes = {
  time: PropTypes.number.isRequired,
  burnedCalories: PropTypes.number.isRequired,
  setDynamicBurnCal: PropTypes.func.isRequired,
  dynamicBurnCal: PropTypes.number.isRequired,
  setDynamicTime: PropTypes.func.isRequired,
};

export default Timer;
