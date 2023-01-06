import React, {useEffect, useState} from 'react';
import axios from "axios";

function Definition(props) {

    const[defs, setDefs] = useState([]);

    useEffect(() => {

        async function getData() {
            const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${props.word}`;
            if(!props.word) return;
            try {
                const data = await axios.get(url);
                if(data !== null) {
                    setDefs(data.data);
                }
            } catch (err) {
                setDefs([]);
            }
        }

        getData();
    }, [props.word]);

    const audioRef = React.useRef(null);

    function handleClick(url) {
        if(url) {
            const audio = new Audio(url);
            audio.play();
        }
    }

    return (
        <div className="definitions">
            {!props.word && (<p className='tip'>Start by typing a word in search...</p>)}
            {props.word && defs.length === 0 && (<p className='tip'>Sorry, the definition of this word was not found.</p>)}
            {defs.map((definition, index) => {
                return (
                    <div className="definition" key={index}>
                        <div className="phonetics">
                            <span className="phonetic" onClick={() => {handleClick(definition?.phonetics[0]?.audio)}}>
                                { definition?.phonetics[0]?.text }
                            </span>
                            <i className="iconfont icon-yangshengqi" onClick={() => {handleClick(definition?.phonetics[0]?.audio)}}></i>
                            <audio src={definition?.phonetics[0]?.audio} ref={audioRef}></audio>
                        </div>
                        <div className="meanings">
                            {definition.meanings.map((meaning, index) => {
                                return (
                                    <div className="meaning" key={index}>
                                        <span className="partOfSpeech">{meaning.partOfSpeech}</span>
                                        <span className="word-meaning">
                                            {meaning.definitions.map(definition => definition.definition).join(' ')}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Definition;