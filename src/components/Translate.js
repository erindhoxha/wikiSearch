import React, { useState } from 'react'
import Dropdown from './Dropdown'
import Convert from './Convert';
const key = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';
const options = [
    {
        title: 'Afrikaans',
        label: 'af'
    },
    {
        title: 'Arabic',
        label: 'ar'
    },
    {
        title: 'Hindi',
        label: 'hi'
    },
    {
        title: 'Dutch',
        label: 'nl'
    }
]

const Translate = ( { label }) => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label className="label">Enter text</label>
                    <input className="ui input" type="text" value={text} placeholder="Enter text" onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown options={options} selected={language} label={label} setSelected={setLanguage} />
            <h3 className="ui header">Output</h3>
            <Convert language={language} text={text} />
        </div>
    )
};

export default Translate;