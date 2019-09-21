import React from 'react';
import { Button } from 'reactstrap';

const ButtonCustom = (props) => (
    <Button onClick={props.handleClick} style={{marginRight : '5px'}} outline color={props.class} value={props.value}>
        {props.name}
    </Button>
);

export default ButtonCustom;
