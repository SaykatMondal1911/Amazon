
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className='d-flex flex-column site-container' >
        <header >
          <Navbar bg="dark" varient="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>E-bazar</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
          
        </header>
        
        <main>
          <Container>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />}></Route>
              <Route path="/" element={<HomeScreen />}></Route>
            </Routes>
          </Container>
        </main >
        <footer>
          <div className='text-center'>All rights reserved</div>
        </footer>
      </div >
    </BrowserRouter >
  );
}

export default App;
