import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import DefaultLayout from '../../components/DefaultLayout';

export default function Home() {
    return (
        <>
            <DefaultLayout/>
            <Grid container spacing={2} style={{paddingTop: 10}}>
                <Grid item xs={3}>
                    <Typography>Oi</Typography>
                </Grid>
            </Grid>
        </>
    );
}