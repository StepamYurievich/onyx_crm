import React, {useEffect, useState} from 'react';
import "../../styles/_accordion.sass"

const AccordionItem = ({ item, index, active, onItemClick }) => {
    const [borderVisible, setBorderVisible] = useState(false);
    const [changeColor, setChangeColor] = useState(false);

    useEffect(() => {
        if (active) {
            setBorderVisible(true);
        } else {
            setBorderVisible(false);
        }
    }, [active]);

    const handleChangeColor = () => {
        setChangeColor(!changeColor)
    }

    return (
        <div className={`accordion-item ${active ? 'activeaccordion' : ''}`}>
            <div className="accordion-header" onClick={() => onItemClick(index)}>
                <div className="accordion-header-title">
                    <img src={item.img} alt=""/>
                    <h3 className={"activeaccordion"}>{item.item}</h3>
                </div>
                <div>
                    {borderVisible && (
                        <div className="border-animation"/>
                    )}
                </div>
            </div>
            <div className="content">
                {active && (
                    <div className="content-inner">
                        {item.components.map((component, i) => (
                            <div key={i}>{component}</div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AccordionItem;