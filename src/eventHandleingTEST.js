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