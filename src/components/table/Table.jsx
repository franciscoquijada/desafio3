import React from 'react';

const Table = (props) => (
    <table className={props.class}>{props.children}</table>
);

export default Table;