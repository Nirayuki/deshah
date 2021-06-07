import React from 'react';

export default function CustomColorContainer(props){
    return(
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100vw', height: '100vh', ...props.style}}>
            {props.children}
        </div>
    )
}
