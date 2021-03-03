import React from 'react';
import '../../styles/home.css';



export default function Home() {
    return (
        <div className="Homecontainer">
            <div className="bemvindo_container">
                <h1>Bem vindo a Deshah Games</h1>
                <p> Nós somos um grupo pequeno de engenheiros de software</p>
            </div>

            <div className="home_container">
                <div className="rank_container">
                    <div className="title">
                        <h1>Rank</h1>
                    </div>

                    <div className="rank">
                    </div>
                </div>
            </div>
        </div>
    )
}