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
  },
  input: {
    display: 'none',
  },
  img: {
    width: '30%',
    height: '30%',
    margin: 10
  }
});

class PhoneForm extends Component {  
  state = {
    name: '',
    phone: '',
    file: null,
    img: null,
  }

  componentDidUpdate(prevProps, prevState) {
    if ((prevState.file !== this.state.file) && this.state.file) {
      console.log('sdf');
      this.setState({
        img: URL.createObjectURL(this.state.file)
      });
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })

    console.log('뱐헷딩');
  }

  handleChangeFile = (e) => {
    this.setState({
      file: e.target.files[0],
    })
  }
  handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
      name: '',
      phone: '',
      file: null,
    })
  }
  render() {
    const {classes} = this.props;
    console.log(this.state.img);

    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <TextField className={classes.textField} variant='outlined' label='name' id='name' name='name' />
        <TextField className={classes.textField} variant='outlined' label='number' id='phone' name='phone' />
        <div>
          {this.state.img ? <img className={classes.img} name='file' src={this.state.img}/> : null}
          <input className={classes.input} accept="image/*" type="file" id="contained-file" onChange={this.handleChangeFile}/>
          <Button variant='contained' color='primary'>
            <label htmlFor="contained-file">
              이미지 업로드
            </label>
          </Button>
        </div>
        <Button className={classes.button} variant='contained' color='primary' type="submit">등록</Button>
      </form>
    ); 
  }
}

export default withStyles(styles)(PhoneForm);