import React from 'react'
import colorNames from 'colornames'

const Input = ({colorPicture, setColorPicture, setHexValue, textToggle, setTextToggle}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Add Color Name:</label>
      <input
        autoFocus
        type='text'
        placeholder='Add Color Value'
        required
        value={colorPicture}
        onChange={(e) => {
          setColorPicture(e.target.value)
          setHexValue(colorNames(e.target.value))
        }}  
      />
      <button
        type='button'
        onClick={() => {setTextToggle(!textToggle)}}
      >
        Toggle Text Color
      </button>
    </form>
  )
}

export default Input