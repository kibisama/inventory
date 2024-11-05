import React from 'react';
import { useDispatch } from 'react-redux';
import { setResultData } from '../../../../reduxjs@toolkit/cardinalInvoiceSlice';
import {
  Box,
  Button,
  Fade,
  Stepper,
  Step,
  StepLabel,
  Typography,
} from '@mui/material';
import textGenerator from './text';

const steps = ['Rx items', 'Price changes', 'Short dates', 'OTC items'];

const style = {
  container: {
    width: '100%',
    px: 4,
    py: 2,
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flexGrow: 1,
  },
  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

const StepContent = ({ activeStep, data }) => {
  return (
    <Box sx={{ py: 2 }}>
      {textGenerator(activeStep, data).map((v, i) => {
        return <Typography key={i}>{v}</Typography>;
      })}
    </Box>
  );
};

const Result = ({ data }) => {
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if (activeStep === steps.length) {
      dispatch(setResultData());
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    if (activeStep === 0) {
      dispatch(setResultData());
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Fade in timeout={500}>
      <Box sx={style.container}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, i) => {
            return (
              <Step key={i}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <Box sx={style.content}>
          <StepContent activeStep={activeStep} data={data} />
        </Box>
        <Box sx={style.bottom}>
          <Button children="back" onClick={handleBack} />
          <Button
            children={activeStep === steps.length ? 'done' : 'next'}
            onClick={handleNext}
          />
        </Box>
      </Box>
    </Fade>
  );
};

export default Result;
