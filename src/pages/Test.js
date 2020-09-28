import React, { Component } from 'react';
import PropTypes from 'prop-types'
class Test extends Component {
    constructor(props){
        super(props)
        this.delItem=this.delItem.bind(this)
    }
    delItem(index){
        this.props.delItem(index)
    }
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content!==this.props.content){
            return true
        }
        return false
    }
    render() { 
        console.log('child-render')
        return ( 
            <li onClick={this.delItem.bind(this.props.index)}>
                {this.props.avName}为你服务：{this.props.item}
            </li>
         );
    }
}
 //在class外面进行校验
 Test.propTypes={
     item:PropTypes.string,
     index:PropTypes.number,
     delItem:PropTypes.func
 }
export default Test;