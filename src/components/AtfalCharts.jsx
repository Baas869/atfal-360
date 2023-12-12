import React, { useContext } from 'react'
import AtfalDataContext from '../Data/AtfalData'
import {Chart as ChartJS, defaults } from 'chart.js/auto'
import{ Bar, Doughnut} from 'react-chartjs-2'

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = 'start';
defaults.plugins.title.font.size = '20';
defaults.plugins.title.color = '#008000';



function AtfalCharts() {
 
    const {preschool,
      earlychild, 
      preteen, 
      teen,
      preschoolPercent,
      earlychildPercent,
      preteenPercent,
      teenPercent
     } = useContext(AtfalDataContext) 
  
  return (
    <div className=' atfalChart-tab'>
      <div className='atfal-charts' >
          <Bar 
            data={{
              labels: ['Age 0-5', 'Age 6-10', 'Age 11-13', 'Age 14-17'],
              datasets: [
                {
                  label: 'Total Numbers',
                  data: [preschool.length, earlychild.length, preteen.length, teen.length],
                  backgroundColor: ['#008000'],
                  borderRadius: 5,
                },
                {
                  label: 'Percentage ',
                  data: [preschoolPercent, earlychildPercent, preteenPercent, teenPercent],
                  backgroundColor: [
                    '#ff6a95',
                    '#FB9540',
                    '#2DCEB6',
                    '#269FFB',
                  ],
                  borderRadius: 5,
                },
              ]
            }}
            options={{
              maintainAspectRatio: false,
              plugins:{
                title:{
                  text: 'Atfal-360 Statistic Bar Charts'
                }
              },
              
            }}
          />

      </div>
      <div className='atfal-charts'>
          <Doughnut 
            data={{
              labels: ['Age 0-5', 'Age 6-10', 'Age 11-13', 'Age 14-17'],
              datasets: [
                {
                  label: 'Percentage ',
                  data: [preschoolPercent, earlychildPercent, preteenPercent, teenPercent],
                  backgroundColor: [
                    '#ff6a95',
                    '#FB9540',
                    '#2DCEB6',
                    '#269FFB',
                  ],
                },
              ]
            }}
            options={{
              plugins:{
                title:{
                  text: 'Atfal-360 Statistic Percentage Charts'
                }
              }
            }}
          />

      </div>
    </div>
  )
}

export default AtfalCharts
