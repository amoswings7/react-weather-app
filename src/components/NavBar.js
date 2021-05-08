import React, { useState } from 'react';

const NavBar = ({setCity_name,setUnits}) => {

    const [value,setValue] = useState('')

    //it updates useState value every single time an input changes value
    function updateValue(e){
        setValue(e.target.value);
    }

    //when a user clicks the right arrow button to enter a city
    function searchHandler(){
        if(value.length===0){
            alert('you cannot enter an empty filled please fill in the field to search')
            return
        }
        setCity_name(value);
    }
    //its fucntion that enables users to change unit value type from celsius to farenight degrees
    function unitHandler(e){
        setUnits(e.target.value)
    }
    //when a user clicks a enter keybord key then the input value submits
    function onEnter(e){
        if(e.keyCode ===13){
            if(value.length===0){
                alert('you cannot enter an empty filled please fill in the field to search')
                return
            }
            setCity_name(value);
        }
    }

    return (
        <nav className='nav-bar'>
            <div className='nav-header'>
                <h1>My weather center app</h1>
            </div>
            <div className='nav-search-bar'>
                <h3>Current weather and 5 day forecast</h3>
                <select onChange={unitHandler}>
                    <option value='metric'>metric unit measurement</option>
                    <option value='imperial'>imperial unit measurement</option>
                </select>
                <div className='input-area'>
                    <input onKeyUp={onEnter} onChange={updateValue} type="text" placeholder='search for a city' required/>
                    <button onClick={searchHandler} className='input-btn'><i className="fas fa-arrow-right"></i></button>
                </div>
            </div>
        </nav>
     );
}
 
export default NavBar;