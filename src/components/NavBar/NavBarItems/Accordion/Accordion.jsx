import React, { useState } from 'react';
import AccordionItem from "./AccordionItem.jsx";
import '../../styles/_accordion.sass'
import {items} from '../../../../assets/items/dataItems.jsx';

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };


    return (
        <div className={"accordion-main"}>
            <div className={"navbaritems_span"}>Панель инструментов</div>
            <div className="accordion">

                {items.map((item, index) => (
                    <AccordionItem
                        key={index}
                        item={item}
                        index={index}
                        active={activeIndex === index}
                        onItemClick={handleItemClick}
                    />
                ))}
            </div>
        </div>


    );
};

export default Accordion;