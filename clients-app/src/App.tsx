import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { Header, Icon, List} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

interface Value{
  id: string,
  name: string
}

class App extends Component{
  state = {
    values: []
  }
  componentDidMount(){
    axios.get('http://localhost:5000/api/values').then((response) => {
      
      this.setState({ values: response.data as Value[]})
    })
  }
  
  render(){
      return (
        <div>
            <Header as='h2'>
              <Icon name='users' />
              <Header.Content>Reactivities</Header.Content>
            </Header>
            <List>
              {this.state.values.map((value: Value) =>(<List.Item key={value.id}>{value.name}</List.Item>))}
            </List>

        </div>
      );
      }
  
}

export default App;
