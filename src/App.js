import React, { Component } from 'react';
import NavBar from './components/navbar.jsx';
import './App.css';
import Counters from './components/counters';
// import { render } from '@testing-library/react';


class App extends Component {

  state = { 
        counters : [
            { id: 1, value: 4},
            { id: 2, value: 0},
            { id: 3, value: 0},
            { id: 4, value: 0},
        ]
     };

     // lifecycle hooks
     constructor(props) {
       super(props);
       console.log('app-constructor');
     }

     componentDidMount(){
       // make Ajax call because component is mounted
       console.log('app-mounted');
     }

     handleIncrement = counter => {
         const counters = [...this.state.counters];
         const index = counters.indexOf(counter);
         counters[index] = {...counter};
         counters[index].value++;
         console.log(this.state.counters[index]);
         this.setState({ counters });

     }

     handleDelete = (counterId) => {
         const counters = this.state.counters.filter(c => c.id!== counterId);
         this.setState({ counters }); //since key and value are same,we write counters: counters as only counters
     };

     handleReset = () => {
         const counters = this.state.counters.map(c => {
             c.value = 0;
             return c;
         });
         this.setState({ counters });
     };

     render() {  
       console.log('app-rendered');
        return (
          <React.Fragment>
            <NavBar totalCounters={this.state.counters.filter(c => c.value>0).length} />
            <main className="container">
              <Counters
              counters = {this.state.counters} 
              onReset={this.handleReset} 
              onIncrement={this.handleIncrement} 
              onDelete={this.handleDelete}/>
            </main>
          </React.Fragment>
        );
      }
}

export default App;
