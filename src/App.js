import React from 'react';
import Key from './Key'
import './App.css';

class App extends React.Component{
  state={
    display:'0',
    keys:['clear','add','multiply',1,2,3,'divide',4,5,6,'subtract',7,8,9,'equals',0,'decimal'],
    operation:[],
    CurrentOpe:''
  }

  elem=()=>{
    let newop=[];
    const {operation}=this.state
    const n=this.state.operation.length;
    for(let i=0;i<n-1;i++){
      if((operation[i]==='+' || operation[i]==='*'|| operation[i]==='/') && ( (operation[i+1]>=0) || operation[i+1]==='-')){
          if(operation[i+1]==='-'){
            if(i+2<n && operation[i+2]>=0){
              newop.push(operation[i])      
            }
          }else{
            newop.push(operation[i])
          }

        
      }
      else if(operation[i]>=0){
        newop.push(operation[i])
      }else if(operation[i]==='-' && (operation[i+1]>=0)){
        newop.push(operation[i])
      }
    }
    if(operation[n-1]>0)
    {
      newop.push(operation[n-1])
    }
    const str=newop.join(' ');
    this.setState({
      display:eval(str),
      CurrentOpe:eval(str),
      operation:[]
    })
    
  }

  cal=(e,id)=>{
    let val=id
    
    
    if(val==='clear'){
      this.setState({
        display:0,
        operation:[],
        CurrentOpe:''
      })
    }else if(val>0 && val<=9){
      const{operation}=this.state;
      const n=operation.length;

      if(operation[n-1]>0){
        this.setState({
          display:val,
          operation:[],
          CurrentOpe:val
        })
      }else{
        this.setState((prevState)=>{
          return{
            CurrentOpe:prevState.CurrentOpe.concat(val),
            display:[...prevState.operation,...prevState.CurrentOpe.concat(val)]
          }
        })
      }

     
    }else if(val==0){
      if(this.state.CurrentOpe!=='')
      {
        this.setState((prevState)=>{
          return{
            CurrentOpe:prevState.CurrentOpe.concat(val),
            display:prevState.CurrentOpe.concat(val)
          }
        })           
      }
    }else if(val==='decimal'){
        if(this.state.CurrentOpe.indexOf('.')<0 && this.state.CurrentOpe!==''){
          
          this.setState((prevState)=>{
            return{
              CurrentOpe:prevState.CurrentOpe.concat('.'),
              display:prevState.CurrentOpe.concat('.')
            }
          })
        }
    }else if(val==='equals'){
      this.setState((state)=>{
        return{
          operation:[...state.operation,state.CurrentOpe],
          CurrentOpe:''
        }
      },this.elem)
     
    
      
    }else{
      if(val==='add'){
        val='+'
      }else if(val==='multiply'){
        val='*'
      }else if(val==='divide'){
        val='/'
      }else{
        val='-'
      }

      this.setState((state)=>{
        if(this.state.CurrentOpe!==''){
          return{
            operation:[...state.operation,state.CurrentOpe,val],
            CurrentOpe:'',
            display:[...state.operation,state.CurrentOpe,val]
          }
        }
        else{
          return{
            operation:[...state.operation,val],
            CurrentOpe:'',
            display:[...state.operation,val]
          }
        }
      })
    }
  }


  render(){

    return(
      <div className='App'>
        <div id='display'>
          {this.state.display}
        </div>

        <div id='keys'>
          {
            this.state.keys.map((key,index)=>(
                <Key key={index} val={key} cal={this.cal}/>
            ))
          }
        </div>
      </div>
    )
  }
}

export default App;
