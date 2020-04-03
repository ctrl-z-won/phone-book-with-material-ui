import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import indigo from '@material-ui/core/colors/indigo';
import {withStyles} from '@material-ui/styles';
import DefaultImg from '../assets/noProfileImg.png';

const styles = theme => ({
  root: {

  },
  card: {
    backgroundColor: indigo[500],
    color: 'white',
    width: '30%',
    padding: 10,
    margin: 10
  },
  media: {
    height: 140,
  },
});

class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      name: '이름',
      phone: '010-0000-0000',
      id: 0,
      img: DefaultImg
    }
  }

  render() {
    const {classes} = this.props;
    const {name, phone, id, img} = this.props.info;

    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={img ? img: DefaultImg}
          title="Minchul Profile"
        />
        <div><b>{name}</b></div>
        <div>{phone}</div>
      </Card>
    );
  }
}

export default withStyles(styles)(PhoneInfo);