import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);
    
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000)
        return () => {
            clearTimeout(timerId);
        }
    }, [term])

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get(`https://en.wikipedia.org/w/api.php`, {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                }
            })
            setResults(data.query.search);
        }
        search();
    }, [debouncedTerm])


    const renderedResults = results.map((result) => {
        return (
            <div className="item middle aligned content" key={result.pageid}>
                <div className="right floated content">
                    <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className="ui button">Read</a>
                </div>
                <div className="content">
                    <a href={`https://en.wikipedia.org?curid=${result.pageid}`}>
                        <div className="header">{result.title}</div>
                    </a>
                </div>
                <span dangerouslySetInnerHTML={{ __html: result.snippet }}>
                </span>
            </div>
        )
    })
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input value={term} onChange={e => setTerm(e.target.value)} className="input"></input>
                    <label>Your search term is: {term}</label>
                </div>
            </div>
            <div className="ui celled list">{renderedResults}</div>
        </div>

    )
}

export default Search;