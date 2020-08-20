import React, { useState, useEffect} from "react";
import axios from "axios";

const translate_url = 'https://translation.googleapis.com/language/translate/v2';
const API_KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

const Convert = ({ language, text}) => {

    const [translated, setTranslated] = useState('');
    const [debouncedTranslated, setDebouncedTranslated] = useState(translated);


    useEffect(() => {
        const doTranslation = async () => {
            const { data } = await axios.post(translate_url, {}, {
                params:{
                    q: debouncedTranslated,
                    target: language.value,
                    key: API_KEY
                }
            });

            setTranslated(data.data.translations[0].translatedText)
        }

            doTranslation();
        
    }, [debouncedTranslated, language]);

    useEffect(() => {

        const TimerId = setTimeout(() => {
            setDebouncedTranslated(text)
        }, 700);

        return () => {
            clearTimeout(TimerId);
        }

    }, [text])

    return (
        <div>
            <h1 className="ui header">
                {translated}
            </h1>
        </div>
    );
}

export default Convert;