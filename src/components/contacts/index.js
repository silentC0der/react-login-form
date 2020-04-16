import React, { Component } from 'react';
import Layout from './layout'
 
class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {contacts: []};
      }
      componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {
          this.setState({ contacts: data });
          console.log('data123-----', this.state.contacts);
        })
        .catch(console.log)
      }
    render() {
      return (
        <div className="LoginPage">
          <Layout contacts={this.state.contacts} />
        </div>
      );
    }
  }
  
  export default Contacts;