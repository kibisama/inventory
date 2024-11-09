import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Box, ToggleButtonGroup } from '@mui/material';
import StyledToggleButton from '../../atoms/StyledToggleButton';
import {
  asyncInvScan,
  setMode,
  setSource,
  setCost,
  setIsUpdated,
  setError,
} from '../../../reduxjs@toolkit/scanSlice';
import ScanStatusDiagram from '../../atoms/ScanStatusDiagram/ScanStatusDiagram';
import CurrencyInput from '../../molecules/CurrencyInput';
import useScanDetection from '../../../hooks/useScanDetection';
import { parseDataMatrix } from '../../../lib/functions';

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  top: {
    px: '36px',
    display: 'flex',
    justifyContent: 'center',
  },
  bottom: {
    px: '36px',
    pb: '36px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
};

const modes = ['RECEIVE', 'FILL', 'REVERSE', 'RETURN'];
const sources = ['CARDINAL', 'SECONDARY'];

const ScanInputForm = ({ status }) => {
  const dispatch = useDispatch();
  const handleModeChange = React.useCallback(
    (e) => dispatch(setMode(e.target.value)),
    [dispatch],
  );
  const handleSourceChange = React.useCallback(
    (e) => dispatch(setSource(e.target.value)),
    [dispatch],
  );
  const handleCostChange = React.useCallback(
    (e) => {
      dispatch(setCost(e.target.value ? '$' + e.target.value : undefined));
    },
    [dispatch],
  );
  const { mode, source, cost, isUpdated, error } = status;
  const disabled = mode !== 'RECEIVE';

  const timeout = React.useRef(null);
  React.useEffect(() => {
    if (isUpdated) {
      timeout.current = setTimeout(() => {
        dispatch(setIsUpdated(false));
      }, 3000);
    }
  }, [dispatch, isUpdated]);
  const onComplete = React.useCallback(
    (code) => {
      clearTimeout(timeout.current);
      const { gtin, lot, exp, sn } = parseDataMatrix(code);
      if (!gtin || !lot || !exp || !sn) {
        dispatch(setError(1));
        return;
      }
      // else if (error) {
      const body = {
        mode,
        gtin,
        lot,
        exp,
        sn,
        source,
        cost,
      };
      dispatch(asyncInvScan(body));
      // }
    },
    [mode, source, cost, dispatch],
  );
  const onError = React.useCallback(
    (code) => {
      dispatch(setError(1));
    },
    [dispatch],
  );

  useScanDetection({
    onComplete: onComplete,
    onError: onError,
    minLength: 38,
  });

  return (
    <Box sx={style.container}>
      <Box sx={style.top}>
        <ToggleButtonGroup
          color="primary"
          value={mode}
          exclusive
          onChange={handleModeChange}
        >
          {modes.map((v, i) => (
            <StyledToggleButton key={i} value={v} children={v} />
          ))}
        </ToggleButtonGroup>
      </Box>
      <ScanStatusDiagram status={status} />
      <Box sx={style.bottom}>
        <ToggleButtonGroup
          disabled={disabled}
          color="primary"
          value={source}
          exclusive
          onChange={handleSourceChange}
        >
          {sources.map((v, i) => (
            <StyledToggleButton
              key={i}
              sx={{ minWidth: 120 }}
              value={v}
              children={v}
            />
          ))}
        </ToggleButtonGroup>
        <CurrencyInput
          disabled={disabled}
          label="COST"
          onChange={handleCostChange}
        />
      </Box>
    </Box>
  );
};

export default ScanInputForm;
