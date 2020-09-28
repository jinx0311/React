import React from 'react'

class TemperatureInput extends React.Component{
    constructor(props){
        super(props)
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(e){
        this.props.onHandleChange(e.target.value)
    }
   
    render(){
        const temperature = this.props.temperature
        return(
            <fieldset>
                <legend>当前温度是:</legend>
                <input value={temperature} onChange={this.handleChange}></input>
            </fieldset>
        )
    }
}
export default TemperatureInput