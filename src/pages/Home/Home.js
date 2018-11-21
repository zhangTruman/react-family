import React, {Component} from 'react';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0
        }
    }

    _handleClick = () => {
        this.setState({
            count: ++this.state.count
        })
    }

    render() {
        return (
            <div>
                this is home22211aa11~<br/>
                当前计数：{this.state.count}
                <button onClick={this._handleClick}>自增</button>
            </div>
        )
    }
}