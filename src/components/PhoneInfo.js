import React, { Component } from 'react';
import {createMuiTheme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import indigo from '@material-ui/core/colors/indigo';
import {withStyles} from '@material-ui/styles';

const styles = theme => ({
  root: {

  },
  card: {
    backgroundColor: indigo[500],
    color: 'white',
    width: '30%',
    padding: 10,
    margin: 10
  }
});

class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      name: '이름',
      phone: '010-0000-0000',
      id: 0
    }
  }

  render() {
    const {classes} = this.props;
    const {name, phone, id} = this.props.info;

    return (
      <Card className={classes.card}>
        <div><b>{name}</b></div>
        <div>{phone}</div>
      </Card>
    );
  }
}

export default withStyles(styles)(PhoneInfo);