import React, {useState} from 'react';

function Header(props) {
    const [input, setInput] = useState("");

    function changeInput(event) {
        const text = event.target.value;
        setInput(text);
        props.onChange(text);
    }

    return (
        <header>
            <h2 className="title">{ input.length === 0 ? 'Word Hunt' : input }</h2>
            <div className="input-wrap">
                <input type="text" placeholder="search a word..." value={input} onChange={changeInput}/>
            </div>
        </header>
    );
}

export default Header;