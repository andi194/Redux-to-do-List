import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Add from './Add'
import Links from './Links'
import VisibleItemList from './VisibleItemList'

class App extends React.Component {
  
  render() {
    return (
      <>
        <Navbar bg="success" variant="dark">
          <Navbar.Brand>
            React To Do List
          </Navbar.Brand>
        </Navbar>
        <Container>
          <Add />
          <Links />
          <VisibleItemList />
        </Container>
      </>
    );
  }
}

export default App;
