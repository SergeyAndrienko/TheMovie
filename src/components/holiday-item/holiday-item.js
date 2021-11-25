import React from 'react'

function HolidayItem({holiday, click}) {
    return (
        <li onClick={() => click(holiday)} className="holidayInfo">
            {holiday.name}
        </li>

    )
}
export default HolidayItem;