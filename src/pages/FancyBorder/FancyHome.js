import React, { Fragment } from 'react'
//import FancyBorder from './FancyBorder'
import axios from 'axios'
import Test from '../Test'
import Boss from '../Boss'
class FancyHome extends React.Component{
    constructor(props){
        super(props)
        this.state={
            inputValue:'',
            list:[],
            avName:'李宇春'
        }
        this.inputChange = this.inputChange.bind(this)
        this.addList=this.addList.bind(this)
        this.delItem=this.delItem.bind(this )
    }
    componentDidMount(){
        axios.get('https://easy-mock.com/mock/5f71adf371dad5156af74861/jinx')
        .then(res=>{
            this.setState({
                list:res.data.data
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }
    inputChange(e){
        this.setState({
            inputValue:e.target.value
        })
    }
    //增加列表
    addList(){
        this.setState({
            //list:[...this.state.list,this.state.inputValue]
            list:this.state.list.concat(this.state.inputValue),
            inputValue:''
        })
    }
  
    
    
    delItem(index){
        let list = this.state.list 
        list.splice(index,1)
        this.setState({
           list
        })
    }
    render(){
        return(
            <Fragment>
                <label htmlFor="jinx">增加服务：</label>
                <input id='jinx' type='text' placeholder='请输入关键词' value={this.state.inputValue} onChange={this.inputChange}></input>
            <button onClick={this.addList}>增加项目</button>
            <ul>
                {
                    this.state.list.map((item,index)=>{
                        return (
                           <Test
                                avName='王一博'
                                delItem={this.delItem} 
                                key={index} 
                                item={item} 
                                index={index}
                            ></Test>
                        )
                    })
                }
            </ul>
            <Boss></Boss>
            </Fragment>
        )
    }
}
export default FancyHome