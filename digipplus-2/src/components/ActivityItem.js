import React from 'react'

//componnet to display the username and the activity
function ActivityItem() {
  return (
    <div className='ActivityItem'>
        <i class="fa-solid fa-user"></i>
        <div class="UserActivityInfo">
         <h4>User Name</h4>
         <p>Have done somethign</p>
        </div>
    </div>
  )
}

export default ActivityItem