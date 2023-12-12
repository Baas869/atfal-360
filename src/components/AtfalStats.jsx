import React, { useContext } from 'react'
import Card from './Card'
import AtfalDataContext from '../Data/AtfalData'
// import Axios from 'axios'
// import { useQuery } from "@tanstack/react-query" 



function AtfalStats() {
  
    const {atfalFeedback, 
      preschool,
      earlychild, 
      preteen, 
      teen,
      preschoolPercent,
      earlychildPercent,
      preteenPercent,
      teenPercent,
    } = useContext(AtfalDataContext)
    
    
  return (
    <>
      
      <div className='atfal-stats-section'>
          <div className='card-primary'>
            <Card>
                <div className='age'> <p>0 - 5</p></div>
                <h2>Atfal Preschool</h2>
                <h4>Total Tifle {preschool && preschool.length }</h4>
                <p className='preschool'>Ratio: {preschoolPercent}% </p>
            </Card>
          </div>
          <div className='card-primary'>
            <Card>
                <div className='age' style={{backgroundColor:'#FB9540'}}> <p>6 - 10</p></div>
                <h2>Atfal Early Childhood</h2>
                { <h4>Total Tifle {earlychild && earlychild.length}</h4> }
                <p className='earlychild'>Ratio:{earlychildPercent }% </p>
            </Card>
          </div>
          <div className='card-primary'>
            <Card>
            <   div className='age' style={{backgroundColor:'#2DCEB6'}}> <p>11 - 13</p></div>
                <h2>Atfal Pre-Teen</h2>
                <h4>Total Tifle {preteen && preteen.length}</h4>
                <p className='preteen'>Ratio:{preteenPercent}% </p>
            </Card>
          </div>
          <div className='card-primary'>
            <Card>
                <div className='age' style={{backgroundColor:'#269FFB'}}> <p>14 - 17</p></div>
                <h2>Atfal Teen</h2>
                <h4>Total Tifle {teen && teen.length}</h4>
                <p className='teen'>Ratio: {teenPercent}% </p>
            </Card>
          </div>
      </div>
      <div className='total'>
        <Card>
          <h4>Total Atfal: {atfalFeedback.length}</h4>
        </Card>
      </div>
    </>
  )
}

export default AtfalStats
