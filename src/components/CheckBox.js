import React, { useState } from 'react';

const CheckBox = (props) => {
   
    return (
        <input type="checkbox" 
        id={props.id} 
        className={props.count === 0 ? "hidden" : ""}
        onClick={(e) => {props.modifyBankState(e)}}
        checked={props.checked}
        />
    );
};

export default CheckBox;