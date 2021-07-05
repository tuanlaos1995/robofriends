import React from 'react';

function SearchBox(props) {
    const { searchChange } = props;


    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-light-blue'
                type='search'
                placeholder='search robots'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;