import React from 'react';
import {items} from '../../assets/items/dayItems.jsx'
import '../HomeHeader/style/HomeHeader.sass'

const Shedule = () => {

    return (
        <div className="Shedule-home">

            <table>
                <tbody>
                {items.map((item, index) => (
                    <tr key={index}>
                        <td className={'table-date_inner'} style={{borderBottom: `1px solid ${item.color}`}}>
                            <div className={'table-date'}>
                                <span>{item.date}</span>
                                <span>{item.date}</span>
                            </div>
                        </td>

                        {item.content.map((item, index) => (
                            <td className={'table-minutes'} key={index} style={{borderBottom: `1px solid #E9EBEE`}}>
                                <div>{item}</div>
                                <div>{item}</div>
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Shedule;