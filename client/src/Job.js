import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


export default function Job({job, onClick}) {
    return (
        <Paper onClick={onClick} className={'job'}>
            <div>
                <Typography variant='h6'>{job.title}</Typography>
                <Typography variant='h5'>{job.company_name}</Typography>
                <Typography>{job.candidate_required_location}</Typography>
            </div>
            <div>
                <Typography>{job.publication_date}</Typography>
            </div>
        </Paper>
    )
}