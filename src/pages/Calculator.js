import React from 'react'
import TemperatureInput from './TemperatureInput'
import BoilingVerdict from './BoilingVerdict'

class Calculator extends React.Component{
    constructor(props){
        super(props)
        this.state={
            temperature:90
        }
    this.onHandleChange=this.onHandleChange.bind(this)
    }
    onHandleChange(e){
        this.setState({
            temperature:e
        })
    }
    
    render(){
        return(
            <div>
                <TemperatureInput  onHandleChange={this.onHandleChange} sacle='t'></TemperatureInput>
                <BoilingVerdict celsius={parseFloat(this.state.temperature)}></BoilingVerdict>
            </div>
        )
    }
}
export default Calculator