
import React from 'react';

export class Welcome extends React.Component {
    constructor(){

    }
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
