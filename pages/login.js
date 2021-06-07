import React from 'react';
import Layout from '../src/components/Layout';
import CustomColorContainer from '../src/components/CustomColorContainer';
import CustomLogin from '../src/components/Login/index';
import { Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import CustomPaper from '../src/components/CustomPaper';

export default function Login(data) {

    const theme = useTheme();

    return (
        <CustomColorContainer style={{ backgroundColor: '#000' }}>
            <Grid xs={10} sm={5} style={{backgroundColor: '#757', height: '70vh'}}>
                <CustomPaper>
                    <CustomLogin />
                </CustomPaper>
            </Grid>
        </CustomColorContainer>
    )
}



