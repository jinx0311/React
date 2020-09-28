import React from 'react'
class BoilingVerdict extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
            if(this.props.celsius>=100){
                return <p>沸腾了</p>
            }
            return <p>没沸腾</p>
    }
}
export default BoilingVerdict