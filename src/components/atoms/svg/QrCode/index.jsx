import * as React from 'react';
import { useTheme } from '@mui/material';
import {
  animated,
  config,
  useTransition,
  useSpringRef,
} from '@react-spring/web';

const QrCodeSVG = (props) => {
  const { palette } = useTheme();
  const strokeColor = palette.mode === 'dark' ? 'white' : 'black';

  const innerPaths = [
    { d: 'M167.333 234V167.333H234V234H167.333Z' },
    {
      d: 'M367.333 300.667V167.333H500.667V300.667H367.333Z',
      fill: palette.primary.main,
    },
    { d: 'M500.667 434V500.667H434V434H500.667Z' },
    {
      d: 'M167.333 500.667V367.333H300.667V500.667H167.333Z',
      fill: palette.primary.main,
    },
  ];

  const springApi = useSpringRef();
  const transition = useTransition(innerPaths, {
    ref: springApi,
    loop: true,
    trail: 2000 / innerPaths.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0.5 },
    config: config.molasses,
    keys: 'd',
  });
  React.useLayoutEffect(() => {
    springApi.start();
  }, [springApi]);

  return (
    <>
      <svg
        onClick={() => {
          springApi.start();
        }}
        width={props.size ?? 400}
        height={props.size ?? 400}
        viewBox="0 0 668 668"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        {/* Frame */}
        <path
          d="M634 200.667V67.3333C634 58.4928 630.488 50.0143 624.237 43.7631C617.986 37.5119 609.507 34 600.667 34H467.333"
          stroke={strokeColor}
          strokeWidth={66.6667}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M467.333 634H600.667C609.507 634 617.986 630.488 624.237 624.237C630.488 617.986 634 609.507 634 600.667V467.333"
          stroke={strokeColor}
          strokeWidth={66.6667}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M200.667 34H67.3333C58.4928 34 50.0143 37.5119 43.7631 43.7631C37.5119 50.0143 34 58.4928 34 67.3333V200.667"
          stroke={strokeColor}
          strokeWidth={66.6667}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M34 467.333V600.667C34 609.507 37.5119 617.986 43.7631 624.237C50.0143 630.488 58.4928 634 67.3333 634H200.667"
          stroke={strokeColor}
          strokeWidth={66.6667}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {transition((style, item) => (
          <animated.svg style={style}>
            <path
              d={item.d}
              fill={item.fill}
              stroke={strokeColor}
              strokeWidth={66.6667}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </animated.svg>
        ))}
      </svg>
    </>
  );
};
export default QrCodeSVG;
