import React from 'react'

class List extends React.Component{
    constructor(props){
        super(props)
        this.state={
            numbers:[
                {
                    name:'jinx',
                    sex:'女',
                    yarn:14
                },
                {
                    name:'abalu',
                    sex:'男',
                    yarn:22
                },
            ]
        }
        this.getList=this.getList.bind(this)
    }
   getList(){
           let list= this.state.numbers
           let listItem=list.map((number)=>
               <li key={number.yarn}>
                   <p>{number.name}</p>
                   <p>{number.sex}</p>
                   <p>{number.yarn}</p>
               </li>
           )
           return(
           <ul>{listItem}</ul>
           )
           
   }
   render(){
       return(
         <div>
             <this.getList></this.getList>
         </div>
       )
   }
}
export default List