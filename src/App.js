import React, {useState} from 'react';
import Accordion from './componenets/Accordion';
import Search from './componenets/Search';
import Dropdown from './componenets/Dropdown';

export default () => {
    
    const items=[
        {title: "what is react?", content: "React is the front end javascript frameowrk"}, 
        {title: "Why react?", content: "fast spped front end framework"}
    ];
    const options= [
        {label: 'The Color Red', value: 'red'}, 
        {label: 'The Color Green', value: 'green'}, 
        {label: 'The Color Blue', value: 'blue'}, 
    ];
    const [selected, setSelected] = useState(options[0]);
    return(
        <div className="ui container">
            <Dropdown options={options} selected={selected} onSelectedChange={setSelected}/>
        </div>
    )
}