import React from 'react';
import Layout from '../src/components/Layout';
import { Table } from 'react-bootstrap';

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
          background: #C4C4C4;
          text-align:center;
        }

        #ranking tr td:first-child,#ranking tr th:first-child{
          
          border-right: black solid 0.1rem;
        }

        .table tbody tr{
          border-bottom: grey 0.1rem;
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
      <div style={{background:"#8C8787", height:"100vh"}}>
      <section id="table-section">
            <Table id="ranking" className="table">
              <thead>
                <tr>
                  <th>Ranking Geral</th>
                  <th>Pontuação</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Godinez</td>
                  <td>1000.0</td>
                </tr>

                <tr>
                  <td></td>
                  <td>0</td>
                </tr>

                <tr>
                  <td></td>
                  <td>0</td>
                </tr>

                <tr>
                  <td></td>
                  <td>0</td>
                </tr>

                <tr>
                  <td></td>
                  <td>0</td>
                </tr>
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