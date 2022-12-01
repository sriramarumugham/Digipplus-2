import React from 'react'

function AnnouncementItem({title , content}) {
  return (
    <div className='AnnouncementItem'>
        <h4>{title}</h4>
        <p>{content}</p>
    </div>
  )
}

export default AnnouncementItem