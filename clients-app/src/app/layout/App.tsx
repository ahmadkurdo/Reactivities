import React, {Component, useState, useEffect} from 'react';
import logo from './logo.svg';
import axios from 'axios'
import { Header, Icon, List} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import {IActivity} from '../models/activity'



const  App = () => {
  const [activities, setActivities] = useState<IActivity[]>([])
  useEffect(() =>{
    axios.get<IActivity[]>('http://localhost:5000/api/activities/').then((response) => {      
      setActivities(response.data)
    })

    console.log(activities)
  }, [])

  return (
    <div>
        <Header as='h2'>
          <Icon name='users' />
          <Header.Content>Reactivities</Header.Content>
        </Header>
        <List>
          {activities.map((activity: IActivity) => (<List.Item key={activity.id}> {activity.title} </List.Item>))}
        </List>

    </div>
  );
}

export default App;
