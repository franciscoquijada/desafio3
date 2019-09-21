import React from 'react';

const Strikethrough = (props) => (
    <del style={{ backgroundColor: 'gray' }}>{props.children}</del>
);

export default Strikethrough;