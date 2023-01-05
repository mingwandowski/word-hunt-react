import React from 'react';

function Header() {
    return (
        <header>
            <h2 class="title">{ 'Word Hunt' }</h2>
            <div class="input-wrap">
                <input type="text" placeholder="search a word..."/>
            </div>
        </header>
    );
}

export default Header;