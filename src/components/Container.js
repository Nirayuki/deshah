import React from 'react';

export default function Container(props){
    return(
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', ...props.style}}>
            {props.children}
        </div>
    )
}
