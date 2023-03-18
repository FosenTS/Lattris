import React from 'react'
import '../styles/PostApplication.css'


function PostApplications(props) {

  console.log(props)
  return (
    <div className= "PostApplications">
      <div className= "PostApplications__content">
        <div className= "numberID">
          <strong>{props.application.numberID}</strong>
        </div> 
        <div className='NameComp'>
          <strong>{props.application.Name}</strong>
        </div>
        <div className='Status'>
          <strong>{props.application.status}</strong>
        </div>
      </div>
    </div>
  )
}

export default PostApplications