import React from 'react'

function AtfalItems({tifle}) {
    return (
    <>
            <tr>
                <td style={{textTransform: 'uppercase'}}>{tifle.FullName}</td>
                <td style={{textTransform: 'capitalize'}}>{tifle.Region}</td>
                <td style={{textTransform: 'capitalize'}}>{tifle.State}</td>
                <td style={{textTransform: 'capitalize'}}>{tifle.Dila}</td>
                <td style={{textTransform: 'capitalize'}}>{tifle.Muqam}</td>
        </tr>
        
    </>
  )
}

export default AtfalItems
