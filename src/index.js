import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//============================   테스트 공간   ===============================

class EventExample extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      btnEnable : true
     
    }
    
    // () => 이런 방식 대체용 bind
    //this.clcikEvent = this.clcikEvent.bind(this);
  }


  clcikEvent = () => {
    this.setState(state => ({
      btnEnable : !this.state.btnEnable
    } ))    
  }
  
  render(){
    return(
      <button onClick={this.clcikEvent}>
        {this.state.btnEnable ? 'ON' : 'OFF'}
      </button>
    )
  }
  
}


ReactDOM.render(<EventExample />,document.getElementById('root'))


//============================   테스트 공간   ===============================

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
