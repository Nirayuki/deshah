import React from 'react';
import styles from '../styles/About.module.css'


export default function About(){
    return(
        <div className={styles.about_container}>
             <h1>Sobre nós</h1>
            
            <p> Fazemos parte do curso de Engenharia de Software da Universiade, FAG, Faculdade </p>
            <p>assis gurgacz, e estamos desenvolvendo esse jogo como forma de projeto para o nosso</p>
            <p>  desenvolvimento como futoro programadores, esse jogo, apesar de simples, um grande </p>
            <p>significado para nos, pois e o nosso primeiro projeto.</p>
        </div>
    );
}