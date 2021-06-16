import React from 'react';
import { Grid } from '@material-ui/core';

export default function Container(props){
    return(
        <Grid container style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', ...props.style}}>
            {props.children}
        </Grid>
    )
}
