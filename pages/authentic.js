import React from 'react';
import Layout from '../src/components/Layout';
import CustomColorContainer from '../src/components/CustomColorContainer';
import CustomAutentic from '../src/components/Login/CustomAutentic';
import { Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import CustomPaper from '../src/components/CustomPaper';

export default function Login(data) {

    const theme = useTheme();

    return (
        // <body background-image="https://cdn.discordapp.com/attachments/738566721388019730/854800704711294986/6a12decf38720e0731aece4102598c42.jpg">
        //     <center>
        //         <Grid xs={10} sm={5} style={{ backgroundColor: '#757', height: '70vh'}}>
        //             <CustomPaper>
        //                 <CustomAutentic />
        //             </CustomPaper>
        //         </Grid>
        //     </center>
        // </body>
        // <body background="https://cdn.discordapp.com/attachments/738566721388019730/854798356228734986/foto.jpg" height="50%" width="100%"  >
        //     <center>
        //         <Grid xs={10} sm={5} style={{ backgroundColor: '#757', height: '70vh' }}>
        //             <CustomPaper>
        //                 <CustomAutentic />
        //             </CustomPaper>
        //         </Grid>
        //     </center>
        // </body>
        <CustomColorContainer style={{ backgroundColor: '#000' }}>
            <Grid xs={10} sm={5} style={{ backgroundColor: '#757', height: '70vh' }}>
                <CustomPaper>
                    <CustomAutentic />
                </CustomPaper>
            </Grid>
        </CustomColorContainer>
    )
}



