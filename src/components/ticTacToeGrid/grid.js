import React, { useState } from 'react'
import Cell from '../ticTacToeGrid/cell'

const Grid = () => {
  const [board, setBoard] = useState([])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        margin: 'auto',
      }}
    >
      <div style={{ flexDirection: 'column' }}>
        {Array(3)
          .fill(1)
          .map((_, j) => (
            <div key={j} style={{ display: 'flex', flexDirection: 'row' }}>
              {Array(3)
                .fill(1)
                .map((_, i) => (
                  <Cell key={i} indexValue={`row${j}col${i}`} />
                ))}
            </div>
          ))}
      </div>
    </div>
  )
}

export default Grid
