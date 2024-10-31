import React from 'react'

function UProfile(props) {
  return (
    <div>
      <h1 class={props.Designation}>Name: {props.Name}</h1>
      <h2 class={props.Designation}>Details: {props.Details}</h2>
    </div>
  )
}

export default UProfile
