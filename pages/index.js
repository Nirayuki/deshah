import React from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.home_container}>
      <div className={styles.ranks_container}>
        <div className={styles.rank}>
          <div className={styles.span_container}>
            <span>Your Status</span>
          </div>
          
          <div className={styles.status_container}>
            <div className={styles.status}>
                <span>Nível</span>

                <div className={styles.svg_container}> 
          
                </div>
            </div>

            <div className={styles.risco}></div>

            <div className={styles.status}>
                <span>Pontuação</span>

                <div className={styles.svg_container}> 

                </div>
            </div>

            <div className={styles.risco}></div>

            <div className={styles.status}>
                <span>Tempo de jogo</span>

                <div className={styles.svg_container}> 
          
                </div>
            </div>
          </div>
        </div>

        <div className={styles.rank}>
          <div className={styles.span_container}>
            <span>Rank Global</span>
          </div>

          <div className={styles.status_container}>
            <div className={styles.status}>
                <span>Nível</span>

                <div className={styles.svg_container}> 
          
                </div>
            </div>

            <div className={styles.risco}></div>

            <div className={styles.status}>
                <span>Pontuação</span>
                <div className={styles.svg_container}> 

                </div>
            </div>

            <div className={styles.risco}></div>

            <div className={styles.status}>
                <span>Tempo de jogo</span>

                <div className={styles.svg_container}> 
          
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}