import React, { useState, useEffect } from "react";
import { fetchDialyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css'


const Chart = ({data:{confirmed,deaths,recovered},country}) => {
    const [dialyData, setDialyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDialyData(await fetchDialyData());
        }
        fetchAPI()
    },[]);

    const lineChart = (
        dialyData.length !== 0
            ? (
                <Line
                    data={{
                        labels: dialyData.map(({ date }) => date),
                        datasets: [{

                            data: dialyData.map(({ confirmed }) => confirmed),
                            label: 'Infectados',
                            borderColor: '#3333ff',
                            fill: true,

                        }, {
                            data: dialyData.map(({ deaths }) => deaths),
                          label: 'Fallecidos',
                            borderColor: 'red',
                            backgroundColor:'rgba(255,0,0,0.5)',
                            fill: true,

                        }],
                    }}

                />) : null
    );

    const barChart = (
        confirmed
        ?(
            <Bar
            data = {{
                labels:['infectados', 'recuperados','fallecidos'],
                datasets:[{
                    label:'People',
                    backgroundColor:[ 'rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)'],

                
                data:[confirmed.value,recovered.value,deaths.value]
                }]

            }}
            options ={{
                legend:{display:false },
                title:{display:true, text:`Actualmente en ${country}`}
            }}
            />
        ):null
    );





    return (
        <div className={styles.container}>
            {country ? barChart:lineChart}
        </div>
    )
}

export default Chart;