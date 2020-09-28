import React, { Component } from 'react';
import '../style/home.css'
//import NameForm from './NameForm'
import Calculator from './Calculator'
//import Banner from './Banner'
//import List from './List'
class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            status:true,
            isLogin:false
        }
       
    }
    render() {
        return(
            <div>
                <Calculator></Calculator>
            </div>
        )
    }
    }
 
export default Home;