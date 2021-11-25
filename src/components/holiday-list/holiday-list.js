import React, {useState, useCallback} from 'react';
import HolidayItem from "../holiday-item/holiday-item";
import Modal from "../modal/modal";
import Spinner from "../spiner/spiner";

const HolidayList = ({nameHolidays, isLoaded}) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [activeHoliday, setActiveHoliday] = useState({});


    const handleClick = useCallback((holiday) => {
        setModalOpen((prev) => !prev);
        setActiveHoliday(holiday)
    }, []);

    if (!isLoaded) {
        return (<div>
                <div>
                    <ul className="wrapItem">
                        {nameHolidays.map((nameItem, index) => (
                            <HolidayItem key={index} holiday={nameItem} click={handleClick}/>
                        ))}
                    </ul>
                    <Modal isOpen={modalOpen}
                           modalClose={() => setModalOpen((prev) => !prev)}
                           holiday={activeHoliday}/>
                </div>
            </div>
        )
    }
    return (<div className="loading"><Spinner/></div>)


};

export default HolidayList;