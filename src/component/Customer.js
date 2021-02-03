import React from 'react';




class Customer extends React.Component{
    

    render(){
        return(
            <div>
                <CustomProfile profile_img={this.props.profile_img} id={this.props.id} name={this.props.name}  />
                <CustomInfo privacy_num={this.props.privacy_num} sex={this.props.sex} job={this.props.job} />
            </div>
            
        )
    }
}


class CustomProfile extends React.Component{

    render(){
        return(
            <div>
                <img src={this.props.profile_img} alt="profile" />
                <h2>{this.props.name}({this.props.id})</h2>
                
            </div>
        )
    }

}


class CustomInfo extends React.Component{

    render(){
        return(
            <div>
                <p>{this.props.privacy_num}</p>
                <p>{this.props.sex}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }

}

export default Customer 