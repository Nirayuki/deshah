import React from 'react';
import { Paper } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';


export default function CustomPaper(props) {

    console.log(props);
    
    const theme = useTheme();

    return(
        <Paper
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: theme.spacing(2),
                ...props.style
            }}
        >
            {props.children}
        </Paper>
    )
}



