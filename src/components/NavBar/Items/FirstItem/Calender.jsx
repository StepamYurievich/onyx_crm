import React, {useState} from 'react';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DateCalendar} from '@mui/x-date-pickers/DateCalendar';
import '../../styles/_calendar.sass'
import 'dayjs/locale/ru';
import CalendarItem from "./CalendarItem.jsx";

export default function BasicDateCalendar() {
    const items = [
        {dropdownTitle: 'Общий заработок', cash: 0},
        {dropdownTitle: 'Оказано услуг', cash: 0},
        {dropdownTitle: 'Продано товаров', cash: 0},
        {dropdownTitle: 'Наличными', cash: 0},
        {dropdownTitle: 'Безналичными', cash: 0},
    ]
    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setIsActive] = useState(true);
    const [isRotated, setIsRotated] = useState(false);
    const [isColor, setIsColor] = useState('');

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    const handleItemClick = () => {
        setIsRotated(!isRotated);
    };
    return (
        <div className={'calendar'}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'ru'}>
                <DateCalendar
                    showDaysOutsideCurrentMonth
                />
            </LocalizationProvider>
            <button
                className={isActive ? "firstItemButtonn" : "firstItemButton-active"}
                onClick={() => (setIsActive(!isActive))}
            >
                <span>
                    Оформить продажу
                </span>
            </button>
            <CalendarItem
                items={items}
                isRotated={isRotated}
                handleItemClick={handleItemClick}
                isOpen={isOpen}
                handleToggle={handleToggle}
            />
        </div>

    );
};