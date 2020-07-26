import React, { useState, useEffect } from 'react'
import axios from 'axios';

const key = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

const Convert = ({language, text}) => {
    const [response, setResponse] = useState('');
    const [tempResponse, setTempResponse] = useState('');
    useEffect(() => {
        axios.post(`https://translation.googleapis.com/language/translate/v2`, {}, {
            params: {
                key: key,
                q: text,
                target: language.label
            }
        }).then(response => {
           setResponse(response.data.data.translations[0].translatedText);
        })
    }, [tempResponse, language])

    useEffect(() => {
        const timerId = setTimeout(() => {
            setTempResponse(text)
        }, 500)
        console.log('Is changed');
        return () => {
            clearTimeout(timerId);
        }
    }, [text])

    return (
        <div>
            <p>Language is: {language.title}</p>
            <p>Text is: {text}</p>
            <p>Text is: {response}</p>
        </div>
    )
}

export default Convert;