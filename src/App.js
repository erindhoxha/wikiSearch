import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Header from './components/Header';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const options = [
    {
        title:'What is React?',
        label: 'React is a front-end javascript 1'
    },
    {
        title:'What is AngularJS?',
        label: 'React is a front-end javascript 2'
    },
    {
        title:'What is DropdownJS?',
        label: 'React is a front-end javascript 3'
    },
]

export default () => {
    const [selected, setSelected] = useState(options[0]);
    return (
    <div className="ui container">
        <Header />
        <Translate options={options} label={'Select a language'} selected={selected} setSelected={setSelected} />
        {/* <Dropdown 
        label={'Select a framework'}
        setSelected={setSelected} 
        selected={selected} 
        options={options} />
        <Search /> */}
        {/* <Accordion data={items}/> */}
    </div>
    )
}