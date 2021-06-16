import React from 'react';
import CustomColorContainer from '../src/components/CustomColorContainer';
import CustomRegister from '../src/components/Register/index';
import { Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import CustomPaper from '../src/components/CustomPaper';

export default function Register(data) {

    const theme = useTheme();

    return (
        <CustomColorContainer style={{ backgroundColor: '#000' }}>
            <Grid container style={{display: 'flex', justifyContent: 'center', height: '70vh'}}>
                <Grid item xs={11} sm={6} >
                    <CustomPaper>
                        <CustomRegister />
                    </CustomPaper>
                </Grid>  
            </Grid>
        </CustomColorContainer>
    )
}



