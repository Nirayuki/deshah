import React from 'react';
import Layout from '../src/components/Layout';
import { Table } from 'react-bootstrap';

const data = [
  {name: "Godinez", score: 1000},
  {name: "Hugo", score: 970},
  {name: "Aron", score: 968},
  {name: "David", score: 950},
  {name: "Henrique", score: 940},
  {name: "Samuel", score: 930},
  {name: "Eduardo", score: 910},
  {name: "Dudu", score: 850},
  {name: "American Killer", score: 840},
  {name: "God of scores", score: 810},
]

export default function Home() {
  return (
    

    <Layout> 

      <style type="text/css">
      {`
        *{
          -webkit-backface-visibility: hidden;
        }
        .table{
          margin: 0rem 1rem;
          margin-top: 4rem;
          border-radius: 10px;
          background: #212529;
          text-align:center;
          color: #fff;
        }

        #ranking tr td:first-child,#ranking tr th:first-child{
          
          border-right: #fff solid 0.1rem;
        }

        .table tbody tr{
          border-bottom: #fff 0.1rem;
        }

        .table tbody tr:last-child td{
          border:none;
        }

        #table-section{
          display:flex;
          
        }

        #news tr{
          
          
          
        }



      `}
      </style>
      <div style={{background: 'url(background.png)', backgroundPosition: 'center center',  height:"100vh"}}>
      <section id="table-section">
            <Table id="ranking" className="table">
              <thead>
                <tr>
                  <th>Ranking Geral</th>
                  <th>Pontuação</th>
                </tr>
              </thead>

              <tbody>
                {data.map((item) => (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.score}</td>
                    </tr>
                ))}
              </tbody>
            </Table>

            <Table id="news" className="table">
                <thead>
                  <tr>
                    <th>Noticias</th>

                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Godinez vive</td>
                  </tr>

                  <tr>
                    <td>Godinez morre brutalmente</td>
                  </tr>
                </tbody>
              </Table>
        </section>
      </div>




    </Layout>
  )
}