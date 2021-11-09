import React from 'react';
import Layout from '../src/components/Layout';
import CustomSettings from '../src/components/Settings/index';
import { Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import LayoutAuth from '../src/components/LayoutAuth';

export default function Settings(data) {

    const theme = useTheme();

    return (
        <LayoutAuth>
            <Grid style={{width: '100%', height: '100vh'}}>
                <div style={{height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <CustomSettings/>
                </div>
            </Grid>
        </LayoutAuth>
    )
}



