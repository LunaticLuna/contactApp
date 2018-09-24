
import React, { Component } from 'react'
import ListContacts from './ListContacts'
import CreateContacts from './CreateContacts'
import { Route } from 'react-router-dom'


class App extends Component {
  state = {
    contacts: [{
       "id": "0",
       "name": "Jay Li",
       "handle": "Jay_Li",
       "avatarURL": "https://placekitten.com/200/200"
     },
     {
       "id": "1",
       "name": "Richard K",
       "handle": "richardk",
       "avatarURL": "https://placekitten.com/300/300"
     },
     {
       "id": "2",
       "name": "Tyler M",
       "handle": "tylerm",
       "avatarURL": "https://placekitten.com/250/250"
     }
     {
      "id": "3",
       "name": "jac M",
       "handle": "jacm",
       "avatarURL": "https://placekitten.com/150/150"
     }
     ],
     id : 4,
  }
  componentDidMount() {

  }
  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => {
        return c.id !== contact.id
      })
    }))

  }
  createContact = (contact) => {
  	this.setState((currentState)=>{
        contact.id = currentState.contacts.length
        return {
                  contacts:currentState.contacts.concat([contact]),
                  id : currentState.id+1
                }
        })
  }

  render() {
    return (
      <div>
        <Route exact path = '/' render={()=>(
          <ListContacts
            contacts={this.state.contacts}
            onDeleteContact={this.removeContact}
          />
          )} 
        />
        <Route exact path = '/create' render={({history})=>(
          <CreateContacts
          	onCreateContact = {(contact)=>{
          			this.createContact(contact)
          			history.push('/')
          		}} />
          )} 
        />

      </div>
    )
  }
}

export default App