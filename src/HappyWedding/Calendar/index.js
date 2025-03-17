import React from 'react'
import { CalendarWrapper } from './style'
import AprilCalendar from './AprilCalendar'

const Calendar = () => {
  return (
    <CalendarWrapper>
        <div className="image-title-calendar">
            <img src="/assets/images/savethedate-style.png" alt=""/>
        </div>
        <AprilCalendar />
    </CalendarWrapper>
  )
}

export default Calendar