import React, {useState} from "react";

const Accordion = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const renderedItems = data.map((item, index) => {
        const active = index == activeIndex ? 'active' : '';
        return (
            <React.Fragment key={item.title}>
                <div 
                className={`title ${active}`}
                onClick={() => setActiveIndex(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p className="transition visible">{item.content}</p>
                </div>
            </React.Fragment>
        )
    })
    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    )
}

export default Accordion;