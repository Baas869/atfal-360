import React, { useContext } from 'react'
import AtfalDataContext from '../Data/AtfalData'
import AtfalItems from './AtfalItems'
import { Link } from 'react-router-dom'

function AtfalLists() {
    const {atfalFeedback} = useContext(AtfalDataContext)
  return (
    <div className='list' style={{overflowX: 'auto'}}>
        <h4>List of Tifle</h4>    
        <table className="list-table">
            <thead>
                <tr >
                    <th>Names</th>
                    <th>Region</th>
                    <th>State</th>
                    <th>Dila</th>
                    <th>Muqami</th>
                </tr>
            </thead>
            <tbody id="book-list">
            {atfalFeedback.slice(0,10).map((tifle, ind) => (
                <AtfalItems key={tifle._id} tifle={tifle} index={ind}/>))}
            </tbody>
        </table>
        <button style={{padding: '5px', fontSize: '1rem', cursor: 'pointer'}}>
            <Link to='/statistic'>view full table</Link>
            
        </button>
    </div>
    
  )
}

export default AtfalLists
