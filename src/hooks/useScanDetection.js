import React from 'react';

const useScanDetection = (_a) => {
  const _b = _a.timeToEvaluate,
    timeToEvaluate = _b === void 0 ? 100 : _b,
    _c = _a.averageWaitTime,
    averageWaitTime = _c === void 0 ? 50 : _c,
    _d = _a.startCharacter,
    startCharacter = React.useMemo(() => (_d === void 0 ? [] : _d), [_d]),
    _e = _a.endCharacter,
    endCharacter = React.useMemo(() => (_e === void 0 ? [13, 27] : _e), [_e]),
    onComplete = _a.onComplete,
    onError = _a.onError,
    _f = _a.minLength,
    minLength = _f === void 0 ? 1 : _f,
    ignoreIfFocusOn = _a.ignoreIfFocusOn,
    _g = _a.stopPropagation,
    stopPropagation = _g === void 0 ? false : _g,
    _h = _a.preventDefault,
    preventDefault = _h === void 0 ? false : _h,
    _j = _a.container,
    container = _j === void 0 ? document : _j;
  const buffer = React.useRef([]);
  const timeout = React.useRef(false);
  const clearBuffer = () => {
    buffer.current = [];
  };

  const evaluateBuffer = React.useCallback(() => {
    clearTimeout(timeout.current);
    const sum = buffer.current
      .map((_a, k, arr) => (k > 0 ? _a.time - arr[k - 1].time : 0))
      .slice(1)
      .reduce((total, delta) => total + delta, 0);
    const avg = sum / (buffer.current.length - 1);
    const code = buffer.current
      .slice(startCharacter.length > 0 ? 1 : 0)
      .map((_a) => _a.char)
      .join('');
    //
    console.log(buffer.current);
    if (
      avg <= averageWaitTime &&
      buffer.current.slice(startCharacter.length > 0 ? 1 : 0).length >=
        minLength
    ) {
      onComplete(code);
    } else {
      avg <= averageWaitTime && !!onError && onError(code);
    }
    clearBuffer();
  }, [averageWaitTime, minLength, onComplete, onError, startCharacter]);

  const onKeyPress = React.useCallback(
    (event) => {
      if (event.currentTarget !== ignoreIfFocusOn) {
        if (endCharacter.includes(event.keyCode)) {
          evaluateBuffer();
        }
        if (
          buffer.current.length > 0 ||
          startCharacter.includes(event.keyCode) ||
          startCharacter.length === 0
        ) {
          clearTimeout(timeout.current);
          timeout.current = setTimeout(evaluateBuffer, timeToEvaluate);
          buffer.current.push({ time: performance.now(), char: event.key });
        }
      }
      if (stopPropagation) {
        event.stopPropagation();
      }
      if (preventDefault) {
        event.preventDefault();
      }
    },
    [
      endCharacter,
      evaluateBuffer,
      ignoreIfFocusOn,
      preventDefault,
      startCharacter,
      stopPropagation,
      timeToEvaluate,
    ],
  );

  React.useEffect(
    () => () => {
      clearTimeout(timeout.current);
    },
    [],
  );
  React.useEffect(() => {
    container.addEventListener('keypress', onKeyPress);
    return () => {
      container.removeEventListener('keypress', onKeyPress);
    };
  }, [container, onKeyPress]);
};

export default useScanDetection;
