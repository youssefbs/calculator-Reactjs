import React, { Component } from 'react';

class Key extends Component {
    render() {
        let val= this.props.val;
        let id=val;
        let rend='';
        if(val==='add'){
            rend='+';
        }else if(val==='subtract'){
            rend='-';
        }else if(val==='multiply'){
            rend='*';
        }else if(val==='divide'){
            rend='/';
        }else if(val==='equals'){
            rend='=';
        }else if(val==='clear'){
            rend='AC';

        }else if(val==='decimal'){
            rend='.'
        }
        else{
            rend=val;
        }

        if(val===0){
            val='zero'
        }else if(val===1){
            val='one'
        }else if(val===2){
            val='two'
        }else if(val===3){
            val='three'
        }else if(val===4){
            val='four'
        }else if(val===5){
            val='five'
        }else if(val===6){
            val='six'
        }else if(val===7){
            val='seven'
        }else if(val===8){
            val='eight'
        }else if(val===9){
            val='nine'
        }
    
        return (
             <div id={val}  className='key' onClick={(e)=>this.props.cal(e,id)}>
                {rend}
            </div>
        );
    }
}

export default Key;