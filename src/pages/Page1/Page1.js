import React, {Component} from 'react';
import './Page1.css'
import testPic from './images/test.jpg';
import './index.less'
export default class Page1 extends Component {
    render() {
        return (
            <div className="page-box" >
                <div className="test">
                    9999
                </div>
                this is Page1~
                <img src={testPic}></img>
            </div>
        )
    }
}
