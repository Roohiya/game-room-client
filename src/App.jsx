import React from 'react'

function App (props) {
  return (
    <div>
      <h1>
        Hello, world! This is my app!
      </h1>
      <canvas
        useref='canvas'
        width={640}
        height={425}
        style={{ border: '1px solid black' }}
        onClick={e => {
          console.log(e.clientX)
        }}
      />
    </div>
  )
}
export default App
