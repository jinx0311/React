import React from 'react'
import '../../style/FancyHome.css'
class FancyBorder extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <div className='big'>
                {this.props.children}
            </div>
        )
    }
}
export default FancyBorder