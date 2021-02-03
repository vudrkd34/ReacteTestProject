import React from 'react';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'



class Customer extends React.Component{
    

    render(){
        return(
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.profile_img} alt="prfile_img" /></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.privacy_num}</TableCell>
                <TableCell>{this.props.sex}</TableCell>
                <TableCell>{this.props.job}</TableCell>
            </TableRow>
            
        )
    }
}




export default Customer 