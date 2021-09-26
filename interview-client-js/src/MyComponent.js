import React, { Component } from "react";
import axios from 'axios';

export default class MyComponent extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: []
  };

  componentDidMount() {
	axios.get('http://localhost:6000/todo', 
	{ headers: { 'Accept': '*',
	'Content-Type': 'application/json',
	'Accept-Control-Allow-Remote': '*', }
	})
	.then(result => {
        this.setState({
          isLoaded: true,
          items: result.data
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      error => {
        this.setState({
          isLoaded: true,
          error
        });
	console.error(error)
      }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.id}: {item.content}
            </li>
          ))}
        </ul>
      );
    }
  }
}