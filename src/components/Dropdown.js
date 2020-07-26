import React, { useState, useEffect, useRef } from 'react'



const Dropdown = ( { options, selected, setSelected, label }) => {
    const [visible, setVisible] = useState(false);
    const dropdownElement = useRef();

    const remove = (e) => {
        if (visible === true) {
            if (dropdownElement.current.contains(e.target)) {
                return;
            }
            setVisible(false);
        }
    }

    useEffect( () => {
        document.body.addEventListener('click', remove);
        return () => {
            document.body.removeEventListener('click', remove);
        }
    })

    const renderedOptions = options.map( option => {
        if (option !== selected) {
            return (
                <div 
                onClick={() => { 
                    setSelected(option)
                }} 
                key={option.title} className="item">
                    {option.title} <br/>
                    {option.label}
                </div>
            )
        }
    })
    return (
        <div className="ui form" ref={dropdownElement} onClick={() => setVisible(!visible) }>
            <div className="field dropdown">
                <label className="label">{label}</label>
                <div className={`ui selection dropdown ${visible ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected ? selected.title : label}</div>
                    <div className={`menu  ${visible ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}  

export default Dropdown;