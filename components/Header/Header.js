
import { Navbar, Nav, Container,InputGroup,Form } from 'react-bootstrap'
import MainBtn from '../common/MainBtn/MainBtn';
import styles from './Header.module.css'


export default function Header() {
    return (
      <>
        <Navbar bg="dark" variant="dark" className={styles['my-navbar']}>
    <Container>
      <Navbar.Brand href="#home">GPT-3</Navbar.Brand>

      <Nav className="ml-auto justify-content-center">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">What is GPT?</Nav.Link>
        <Nav.Link href="#pricing">OpenAI</Nav.Link>
        <Nav.Link href="#pricing">Case Studies</Nav.Link>
        <Nav.Link href="#pricing">Library</Nav.Link>
      </Nav>
      <Nav className="ml-auto justify-content-end">
        <MainBtn value='Sign Up' />
        <MainBtn value='LogIn'  />
        
      </Nav>
     
    </Container>
  </Navbar>

<div className='container'>
<div className={styles['d-flex']}>

  <div className={styles['child1']}>
    <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
    <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

    <InputGroup className="mb-3">
  <Form.Control
    placeholder="Your Email Address"
    aria-label="Your Email Address"
    aria-describedby="basic-addon2"
  />
  <MainBtn value="Get Started" />
</InputGroup>
  
  </div>
  <div className={styles['child2']}>
    
  </div>
</div>
</div>
</>

    )
}

