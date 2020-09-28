import React from 'react'
class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state={
            date: new Date(),
            timerId:0
        }
    }
    componentDidMount(){
        this.timerId=setInterval(
            ()=>this.tick(),1000
        )
    }
    componentWillUnmount(){
        clearInterval(this.timerId)
    }
    tick(){
        this.setState({ 
            date:new Date()
        })
    }
    render(){
        return(
            <div>
                <h1>hello,world</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
                <p>{this.props.data}</p>
            </div>
        )
    }
}
export default Clock;