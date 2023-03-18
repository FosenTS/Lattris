import React, {useState} from 'react'
import PostApplications from '../component/UI/PostApplication'
import ApplicationID from './ApplicationID'
function Applications() {
  const [selectedSort, setSelectedSort] = useState('')


  return (
    <div>
      <div className='Filter'>
        <select>
          <option value="filter__1">По айди заявки</option>
          <option value="filter__2">По имени потребителя</option>
          <option value="filter__3">По статусу</option>
        </select>
      </div>
      <PostApplications application={{numberID: 10, Name: 'Alpha', status: 'OK' }}/>
      <PostApplications application={{numberID: 11, Name: 'Folen', status: 'NO' }}/>
    </div>
  )
}

export default Applications