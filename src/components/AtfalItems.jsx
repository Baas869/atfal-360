import React from 'react'

function AtfalItems({tifle, ind}) {
    return (
    <>
        <tr>
            <td style={{textTransform: 'uppercase'}}>{tifle.full_name}</td>
            <td style={{textTransform: 'capitalize'}}>{tifle.region}</td>
            <td style={{textTransform: 'capitalize'}}>{tifle.state}</td>
            <td style={{textTransform: 'capitalize'}}>{tifle.dila}</td>
            <td style={{textTransform: 'capitalize'}}>{tifle.muqami}</td>
        </tr>
    </>
  )
}

export default AtfalItems
