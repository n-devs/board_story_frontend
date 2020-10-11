import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const useStyles = makeStyles((theme) => ({
    root: {
        // maxWidth: 650,
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 5,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        // paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },
    img: {
        maxHeight: 350,
        display: 'block',
        // maxWidth: 400,
        borderRadius: 5,
        overflow: 'hidden',
        width: '100%',
    },
}));

function Swipeable(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    //   const maxSteps = tutorialSteps.length;

    //   const handleNext = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    //   };

    //   const handleBack = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
    //   };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <div className={classes.root}>
            <Paper square elevation={0} className={classes.header}>
                <Typography style={{
                    position: 'absolute',
                    top: 85,
                    zIndex: 1,
                    fontSize: '2rem',
                    fontWeight: 400,
                    lineHeight: 1.167,
                    letterSpacing: '0em',
                    color:"#fff",
                    padding: 10
                }}>{props.imgSteps[activeStep].label}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
                style={{
                    borderRadius: 5
                }}
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {props.imgSteps.map((step, index) => (
                    <div key={step.label} style={{
                        borderRadius: 5
                    }}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <img className={classes.img} src={step.imgPath} alt={step.label} />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            {/* <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      /> */}
        </div>
    );
}

export default Swipeable;
