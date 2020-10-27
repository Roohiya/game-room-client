import React from 'react'

const Cell = (props) => {

  return (
    <div
      style={{ display: 'flex', flexDirection: 'row' }}
      onClick={() => {
        console.log('click')
      }}
    >
      <div
        style={{
          width: '8rem',
          height: '8rem',
          border: '1px solid black',
        }}
      >
        <div />
      </div>
    </div>
  )
}

export default Cell
