import React from 'react'

class Banner extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showWarning:true,
            content:[
                {
                    name:'jinx',
                    old:14,
                    sex:'女'
                },
                {
                    name:'alibb',
                    old:24,
                    sex:'男'
                }
            ]
        }
    this.handleClick=this.handleClick.bind(this)
    this.tabbel=this.tabbel.bind(this)
    }
    handleClick(){
        this.setState({
            showWarning:!this.state.showWarning
        })
    }
    tabbel(){
        if(!this.state.showWarning){
            return null
        }
        let list = this.state.content
        let listItem = list.map((cont)=>
            <li key={cont.old}>
                <p>{cont.name}</p>
                <p>{cont.old}</p>
                <p>{cont.sex}</p>
            </li>
        )
        return(
        <ul>{listItem}</ul>
        )
    }
    render(){
        return(
            <div>
                <this.tabbel></this.tabbel>
            <button style={{margin:20+'px'}} onClick={this.handleClick}>
                {this.state.showWarning?'隐藏列表':'显示列表'}
            </button>
            </div>
           
        )
    }
}
export default Banner;