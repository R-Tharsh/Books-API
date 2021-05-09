import React from "react"
import { Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component {
    render() {
        const title = "Book Recommender"
        return(
            <Navbar bg="dark" variant="dark" >
             <Navbar.Brand href="#home">
      {' '}
        <h2 style={{marginLeft:"40px"}}>API Book Store</h2>
    </Navbar.Brand>
  </Navbar>
        )
    }

}

export default Header