import React from 'react'
import '../style/nameForm.css'
class NameForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
            name:'',
            old:'',
            agreen:true
        }
    this.handleClick=this.handleClick.bind(this)
    this.handelSumbit=this.handelSumbit.bind(this)
    }
    handleClick(e){
        const target = e.target
        const value = target.name==='agreen'?target.checked:target.value
        const name = target.name
        this.setState({
            [name]:value
        })
        
    }
    handelSumbit(e){
        console.log(this.state)
         e.preventDefault();
        
    }
    render(){
        return(
            <form>
                <input name="name" type='text' placeholder='请输入姓名' value={this.state.name} onChange={this.handleClick}></input>
                <input name="old" type='number' placeholder='请输入年龄' value={this.state.old} onChange={this.handleClick}></input>
                <div className='check'>
                    <input name="agreen" checked={this.state.agreen} type='checkbox' onChange={this.handleClick}></input>是否同意协议
                </div>
                <button onClick={this.handelSumbit} onChange={this.selectClick}>提交</button>
            </form>
        )
    }
}

export default NameForm