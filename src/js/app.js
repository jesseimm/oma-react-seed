import React, {Component} from 'react';
import {render} from 'react-dom';
import '../css/style.css';
import lapikasImage from '../public/assets/lapikkaat.jpg';

class Hello extends Component {
    render() {
        return (
            <div>
                <p>Hello from react</p>

                {/*<img src={lapikasImage} alt={'lapikkaat'}/>*/}
            </div>
        );
    }
}

render(<Hello/>, document.getElementById('root'));