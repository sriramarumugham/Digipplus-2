import React from 'react';
import '../styles/ActivitySession.css';

import {ActivityCard} from './index';

function ActivitySession() {
  return (
    <div className='ActivitySession'>
        <h2>ActivitySession</h2>
        <div className='ActivityCardslist'>
        <ActivityCard/>
        <ActivityCard/>
        <ActivityCard/>
        <ActivityCard/>
        <ActivityCard/>
        <ActivityCard/>
        </div>

    </div>
  )
}

export default ActivitySession;