import React from 'react'
import PostApplications from '../component/UI/PostApplication'
import ApplicationID from './ApplicationID'
function Applications() {
  return (
    <div>
      <PostApplications application={{numberID: 10, Name: 'Alpha', status: 'OK' }}/>
      <PostApplications application={{numberID: 11, Name: 'Folen', status: 'NO' }}/>

    </div>
  )
}

export default Applications