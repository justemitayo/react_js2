import React from 'react'

const Square = ({colorPicture, hexValue, textToggle}) => {
  return (
    <section className='square' style=
    {{
      background: colorPicture,
      color: textToggle ? 'black' : 'white' 
    }}>
      <p>{colorPicture ? colorPicture : 'Empty Value'}</p>
      <p>{hexValue? hexValue : null}</p>
    </section>
  )
}
Square.defaultProps = {colorPicture : 'Empty Color Value'}

export default Square