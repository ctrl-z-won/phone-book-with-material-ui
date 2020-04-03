// file: src/components/PhoneForm.js
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/styles';

const styles = theme => ({
  root: {

  },
  textField: {
    margin: 10
  },
  button: {
    margin: 15
  }
});

class PhoneForm extends Component {  
  state = {
    name: '',
    phone: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log('뱐헷딩');
  }
  handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
      name: '',
      phone: ''
    })
  }
  render() {
    const {classes} = this.props;

    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <TextField className={classes.textField} variant='outlined' label='name' id='name' name='name' />
        <TextField className={classes.textField} variant='outlined' label='number' id='phone' name='phone' />
        <Button className={classes.button} variant='contained' color='primary' type="submit">등록</Button>
      </form>
    );
  }
}

export default withStyles(styles)(PhoneForm);