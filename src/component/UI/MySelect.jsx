import React from 'react'

function MySelect(option, defaultValue) {
  return (
    <select>
        <option value={""}>{defaultValue}</option>
        {option.map(option =>
            <option value = {option.value}></option>
        )}
    </select>
  )
}

export default MySelect