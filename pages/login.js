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
        <Layout>
            <Grid style={{width: '100%', height: '100vh'}}>
                <div style={{height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <CustomLogin/>
                </div>
            </Grid>
          
        </Layout>
    )
}



