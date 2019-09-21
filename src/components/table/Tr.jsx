import React from 'react';

const Tr = (props) => (
    <tr className={props.class}>{props.children}</tr>
);

export default Tr;