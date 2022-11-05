import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
const options = [
    {
        label: 'Akfrikaans',
        value: 'af'
    },
    {
        label: 'Arabic', 
        value: 'ar'
    }, 
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Korean',
        value: 'ko'
    }
];
const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return(
        <div>
            <div className="ui form">
                <label>Input text</label>
                <input value={text} onChange={(e)=>setText(e.target.value)}/>
            </div>
            <Dropdown 
                label="Select langluage"
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
            />
            <hr/>
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language}/>
        </div>
    );
}

export default Translate;