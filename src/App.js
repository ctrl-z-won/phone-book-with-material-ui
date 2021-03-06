import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';
import ImgA from './assets/minchul.png';

class App extends Component {
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: '강민철',
        phone: '010-0000-0000',
        img: ImgA
      },
      {
        id: 1,
        name: '홍길동',
        phone: '010-0000-0001'
      }
    ]
  }
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }
  handleDelete = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.splice(id, 1)
    });
  }
  render() {
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />
        <PhoneInfoList data={this.state.information}/>
      </div>
    );
  }
}

export default App;