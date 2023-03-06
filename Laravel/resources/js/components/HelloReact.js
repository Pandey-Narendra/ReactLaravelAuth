// resources/js/components/HelloReact.js

import React from 'react';
import ReactDOM from 'react-dom';

export default function HelloReact(props) {

    return (
        <h1 className='text-center'>{props.data} React!</h1>
    );
}

if (document.getElementById('hello-react')) {
    var data = document.getElementById('hello-react').getAttribute('name');
    ReactDOM.render(<HelloReact data={data}/>, document.getElementById('hello-react'));
}
