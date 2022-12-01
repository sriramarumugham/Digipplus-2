import React from 'react'

//displays the list of announcemt with headin and content
function AnnouncementItem({title , content}) {
  return (
    <div className='AnnouncementItem'>
        <h4>{title}</h4>
        <p>{content}</p>
    </div>
  )
}

export default AnnouncementItem