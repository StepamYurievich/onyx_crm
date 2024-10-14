import React from 'react';
import {TiArrowSortedDown} from "react-icons/ti";
import {FaRubleSign} from "react-icons/fa6";
import '../../styles/_calendar.sass'

const CalendarItem = ({isOpen,items,isRotated,handleItemClick}) => {
    return (

        <div className={'dropdown'}>
            <button className={`dropdown-toggle ${isRotated ? 'visible' : ''}`} onClick={handleItemClick}>
                    <span>
                        Аналитика за сутки
                    </span>
                <TiArrowSortedDown
                    style={{
                        transform: isRotated ? 'rotate(0)' : 'rotate(180deg)',
                        transition: 'transform 0.1s ease-in-out',
                        color: isRotated ? '#252F40' : 'white',
                    }}
                    size={15}
                />

            </button>
            {isRotated &&
                <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
                    {items.map((item, index) => (
                        <li key={index}>
                            <span>{item.dropdownTitle}</span>
                            <div>
                                <span>{item.cash}</span>
                                <FaRubleSign/>
                            </div>
                        </li>
                    ))}
                </div>
            }
        </div>
    );
};

export default CalendarItem;