import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';
import { type } from '@testing-library/user-event/dist/type';

const initialstate = {

   current:"0",
   gabli:null,
   operator:null,
   number:false,
   display:"0"
}
function reducer(state,action){
 
    if (action.type === "number" ) {

  if (action.payload === "." && state.current.includes(".")) {
    return state;
  }

 return {
  ...state,

  current: state.number
    ? action.payload
    : state.current === "0"
      ? action.payload
      : state.current + action.payload,

  number: false,

  display: state.number
    ? state.display + " " + action.payload
    : state.display === "0"
      ? action.payload
      : state.display + action.payload
};
    }

    if(action.type=== "clear")
      return{
        ...state,
        display :"0",
         gabli: null,
         operator: null,
         current:"0"
      }
    
    if(action.type=== "operator"){

       if (state.operator !== null) {

        const gabli =Number(state.gabli);
        const current =Number(state.current)
         if (state.operator !== null && state.number === true) {
         return state;
         }

        let result;

        if(state.operator=== "+"){
          result =gabli + current;
        }
        if(state.operator=== "-"){
          result =gabli - current;
        }
        if(state.operator=== "*"){
          result =gabli * current;
        }
        if(state.operator=== "/"){
          result =gabli / current;
        }
         return{
       ...state,
      current:result,
      gabli:result,
      operator:action.payload,
      number:true,
      display: state.display + " " + action.payload
         }
       }

    
      return{
    ...state,
      
      gabli:state.current,
      operator:action.payload,
      number:true,
      display: state.current + " " + action.payload
      
      }}
      console.log("initialstate.gabli")
      
      if(action.type ==="eaqul"){
        const gabli = Number(state.gabli);
        const current = Number(state.current);
        if (state.operator==="+"){
          const plus =gabli+current
          return{
            ...state,

            current:plus,
            display:String(plus)

          }
        }

        if (state.operator==="-"){
          const mines =gabli-current
          return{
            ...state,
            current:mines,
            display:String(mines)

          }
        }
        if (state.operator==="*"){
          const times =gabli*current
          return{
            ...state,
            current:times,
            display:String(times)

          }
        }
        if (state.operator==="/"){
          
          const devie =gabli/current 
          return{
            ...state,
            current:devie,
            display:String(devie)

          }
        }
      }
     


       
        
}
function App() {
  const [state,dispatch]=useReducer(reducer,initialstate);
  return (
   <div className="calculator">

      <div className="display">
        {state.display}
      </div>

      <div className="buttons">

        <button onClick={()=>dispatch({type : "number",payload: "7"})}>7</button>
        <button onClick={()=>dispatch({type : "number",payload: "8"})}>8</button>
        <button onClick={()=>dispatch({type : "number",payload: "9"})}>9</button>
        <button onClick={()=>dispatch({type : "operator",payload: "/"})}>÷</button>

        <button onClick={()=>dispatch({type : "number",payload: "4"})}>4</button>
        <button onClick={()=>dispatch({type : "number",payload: "5"})}>5</button>
        <button onClick={()=>dispatch({type : "number",payload: "6"})}>6</button>
        <button onClick={()=>dispatch({type : "operator",payload: "*"})}>×</button>

        <button onClick={()=>dispatch({type : "number",payload: "1"})}>1</button>
        <button onClick={()=>dispatch({type : "number",payload: "2"})}>2</button>
        <button onClick={()=>dispatch({type : "number",payload: "3"})}>3</button>
        <button onClick={()=>dispatch({type : "operator",payload: "-"})}>-</button>

        <button onClick={()=>dispatch({type : "number",payload: "0"})}>0</button>
        <button onClick={()=>dispatch({type : "number",payload: "."})}>.</button>
        <button onClick={()=>dispatch({type : "clear"})}>C</button>
        <button onClick={()=>dispatch({type : "operator",payload :"+"})}>+</button>

        <button onClick={()=>dispatch({type : "eaqul"})}>=</button>

      </div>

    </div>
  );
}

export default App;
