import React, {useState, useEffect} from 'react';
import wiki from '../apis/wikipedia';

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);

    useEffect(()=>{
        const search = async () => {
            const {data} = await wiki.get('',{
                params:{
                    srsearch: term
                }
            });
            setResults(data.query.search);
        }
        if( term && !results.length){
            search();
        }else{
            const timeoutId = setTimeout(()=>{
                if (term){
                    search();
                }
            }, 500);
            return () =>{
                clearTimeout(timeoutId);
            }
        }
    },[term, term.length]);

    const renderedResults = results.map((result)=>{
        return(
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                        target="_blank"
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">{result.title}</div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet}}></span>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <label>Enter Search Term</label>
                <input className="input" type="text"
                    value={term}
                    onChange={e=>setTerm(e.target.value)}
                />
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
}

export default Search;