import React from 'react';
import Typography from '@mui/material/Typography';
import Job from './Job.js';
import JobModal from './JobModal.js';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { job } from 'cron';

export default function Jobs({jobs}) {
    // modal
    const [open, setOpen] = React.useState(false);
    const [selectedJob, selectJob] = React.useState({});
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    // pagination
    const jobsPerPage = 20;
    const numJobs = jobs.length;
    const numPages = Math.ceil(numJobs / jobsPerPage);

    const [activeStep, setActiveStep] = React.useState(0);

    const startIndex = activeStep * jobsPerPage;
    const endIndex = Math.min(numJobs, (activeStep + 1) * jobsPerPage);
    const jobsOnPage = jobs.slice(startIndex, endIndex);

    function handleNext() {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    function handleBack() {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div className="jobs">
            <JobModal open={open} job={selectedJob} handleClose={handleClose}/>
            <Typography variant="h4" component="h1">
                Entry Level Software Jobs
            </Typography>
            <Typography variant="h6" component="h1">
                Found {numJobs} jobs in total.
            </Typography>
            <Typography variant="h6" component="h1">
                Showing #{startIndex + 1} to #{endIndex};
            </Typography>
            {
                jobsOnPage.map(
                    (job, i) => <Job key={i} job={job} onClick={() => {
                        handleClickOpen();
                        selectJob(job);
                    }}/>
                )
            }
            <div>
                Page {activeStep + 1} of {numPages}
            </div>
            <MobileStepper
                variant="progress"
                steps={numPages}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === numPages - 1}
                    >
                        Next
                        <KeyboardArrowRight />
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        <KeyboardArrowLeft />
                        Back
                    </Button>
                }
            />  
        </div>

    )
}