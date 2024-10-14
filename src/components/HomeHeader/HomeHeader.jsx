import React, {useState} from 'react';
import group1 from '../../assets/HomeHeader/group1.svg'
import group2 from '../../assets/HomeHeader/group2.svg'
import profile from '../../assets/HomeHeader/image.png'
import './style/HomeHeader.sass'
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

const HomeHeader = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <div className={"home-header"}>
            <div className={"header-days"}>
                <div className={'month-picker'}>
                    <button>Сегодня</button>
                    <button>Неделя</button>
                </div>
                <div className={'day-picker'}>
                    <button className={'header-days_left'}><IoMdArrowDropleft size={20}/></button>
                    <span className="date">16 сентябрь</span>
                    <button className={'header-days_right'}><IoMdArrowDropright size={20}/></button>
                </div>
            </div>
            <div className={'header-profile'}>
                <div className="switch">
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleChange}
                        id="switch"
                    />
                    <label htmlFor="switch">
                        <span className={`slider ${isChecked ? 'checked' : ''}`}/>
                    </label>
                </div>
                <button><img src={group1} alt="group1"/></button>
                <button><img src={group2} alt="group2"/></button>
                <button><img src={profile} alt="profile"/></button>
            </div>
        </div>
    );
};

export default HomeHeader;