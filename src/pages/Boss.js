import React from 'react'
import '../style/home.css'
class Boss extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isShow:true
        }
        this.toToggole=this.toToggole.bind(this)
    }
    render(){
        return(
            <div>
                <div className={this.state.isShow?'show':"hide"}>Boss级人物-孙悟空</div>
                <div><button onClick={this.toToggole}>召唤Boss</button></div>
            </div>
        )
    }
    toToggole(){
        this.setState({
            isShow:!this.state.isShow  
        })
        console.log(this.state.isShow)
    }
}
export default Boss