import React from 'react';
import Layout from '../src/components/Layout';
import CustomColorContainer from '../src/components/CustomColorContainer';
import CustomAutentic from '../src/components/Login/CustomAutentic';
import { Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import CustomPaper from '../src/components/CustomPaper';
import { useRouter, withRouter } from 'next/router';

export default function Authentic() {

    const theme = useTheme();
    

    return (
        <CustomColorContainer style={{ backgroundColor: '#000' }}>
            <Grid xs={10} sm={5} style={{ backgroundColor: '#757', height: '70vh' }}>
                <CustomPaper>
                    <CustomAutentic />
                </CustomPaper>
            </Grid>
        </CustomColorContainer>
    )
}

