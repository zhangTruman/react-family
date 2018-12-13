import React, {Component} from 'react';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0,
            num:0
        }
    }

    _handleClick = () => {
        this.setState({
            count: this.state.count+1
        })
        console.log(16,this.state.count)
        this.setState(prevState=>{
            console.log(prevState)
            count: prevState.count+1
        },()=>{
            console.log(21,this.state.count)
        })
        console.log(23,this.state.count)
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                num:this.state.num+1
            })
            console.log(31,this.state.num)
        },0)
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