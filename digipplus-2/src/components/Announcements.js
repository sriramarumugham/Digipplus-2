import React from 'react';
import '../styles/Announcements.css';
import AnnouncementItem from './AnnouncementItem';

function Announcements() {
  return (
   <>
    <h2>Announcements</h2>
    <div className='AnnouncementsContainer'>
        <AnnouncementItem title="something" content="something"/>
        <AnnouncementItem title="something" content="something"/>
        <AnnouncementItem title="something" content="something"/>
        <AnnouncementItem title="something" content="something"/>
        
    </div>
    </>
  )
}

export default Announcements