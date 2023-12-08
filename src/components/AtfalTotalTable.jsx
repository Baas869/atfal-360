import React, { useContext } from 'react'
import AtfalDataContext from '../Data/AtfalData'

function AtfalTotalTable() {
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
    // <div style={{background: '#fff', borderRadius: '15px', 
    // boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.4)', 
    // padding: '1rem' }}>
         <table className="table">
            <thead>
                <tr >
                    <th>Categories</th>
                    <th>Age</th>
                    <th>Total No</th>
                    <th>Percentage%</th>
                </tr>
            </thead>
            <tbody id="book-list">
                <tr style={{color: '#000'}}>
                    <td className="preschool">Pre-School</td>
                    <td className="preschool">0 - 5</td>
                    <td className="preschool">{preschool.length}</td>
                    <td className="preschool">{preschoolPercent}%</td>
                </tr>
                <tr style={{}}>
                    <td className="earlychild">Early Child</td>
                    <td className="earlychild">6 - 10</td>
                    <td className="earlychild">{earlychild.length}</td>
                    <td className="earlychild">{earlychildPercent}%</td>
                </tr>
                <tr style={{}}>
                    <td className="preteen">Pre-teen</td>
                    <td className="preteen">11 - 13</td>
                    <td className="preteen">{preteen.length}</td>
                    <td className="preteen">{preteenPercent}%</td>
                </tr>
                <tr style={{}}>
                    <td className="teen">Teen</td>
                    <td className="teen">14 - 17</td>
                    <td className="teen">{teen.length}</td>
                    <td className="teen">{teenPercent}%</td>
                </tr>
            </tbody>
        </table>

    // </div>
  )
}

export default AtfalTotalTable
