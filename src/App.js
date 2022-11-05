import React, {useState} from 'react';
import Accordion from './componenets/Accordion';
import Search from './componenets/Search';
import Dropdown from './componenets/Dropdown';
import Translate from './componenets/Translate';
import Route from './componenets/Route';
import Header from './componenets/Header';

const items=[
    {title: "what is react?", content: "React is the front end javascript frameowrk"}, 
    {title: "Why react?", content: "fast spped front end framework"}
];
const options= [
    {label: 'The Color Red', value: 'red'}, 
    {label: 'The Color Green', value: 'green'}, 
    {label: 'The Color Blue', value: 'blue'}, 
];

export default () => {
    const [selected, setSelected] = useState(options[0]);
    return(
        <div className="ui container">
            <Header/>
            <Route path="/">
                <Accordion items={items}/>
            </Route>
            <Route path="/list">
                <Search/>
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    label="select Color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate/>
            </Route>
        </div>
    )
}