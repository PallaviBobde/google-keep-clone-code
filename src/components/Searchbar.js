import React, { useState } from 'react';

const Searchbar = ({valtosearch}) =>{
    const [searchval,setSearchval] = useState("");

    return (
        <div>
            <form>
                <input 
                    name="value"
                    value={searchval} 
                    onChange={(e)=>{
                        setSearchval(e.target.value)
                        valtosearch(e.target.value)
                    }
                    }
                    placeholder='Search..'
                    autoComplete='off'
                />
            </form>
        </div>
    );
}

export default Searchbar;