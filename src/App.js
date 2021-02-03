import logo from './logo.svg';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Customer from './component/Customer';
import {withStyles} from '@material-ui/core/styles';
import { Component } from 'react';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overfolwX : 'auto'
  },
  table:{
    minWidth:1080
  }
})

const customers = [
  {
   id : 1,
   profile_img : 'https://placeimg.com/64/64/1',
   name : '홍길동',
   privacy_num : '961222',
   sex : '남자',
   job : '대학생'
  },
  {
    id : 2,
    profile_img : 'https://placeimg.com/64/64/2',
    name : '김평강',
    privacy_num : '930829',
    sex : '남자',
    job : '개발자'
   },
   {
    id : 3,
    profile_img : 'https://placeimg.com/64/64/3',
    name : '이순신',
    privacy_num : '943020',
    sex : '남자',
    job : '디자이너'
   }

]


class App extends Component{  
  render() {
    const {classes} = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableHead>
          <TableBody>
            {customers.map(c => { return ( <Customer  id={c.id} profile_img={c.profile_img} name={c.name} privacy_num={c.privacy_num}  sex={c.sex} job={c.job} />);  })}
          </TableBody>
        </Table>
      </Paper>
     );
  }
}

export default withStyles(styles)(App);
