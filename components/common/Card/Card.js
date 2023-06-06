import Card from 'react-bootstrap/Card';

function TextExample(props) {
  return (
    <Card style={{ width: '20rem' , backgroundColor:'transparent' , border:'transparent' }}>
      <Card.Body>
        <Card.Title style={{color:'white' , padding:'15px' }}>{props.title}</Card.Title>
        <Card.Text style={{color:'#81AFDD' }}>
            {props.text}    
        </Card.Text>
       
      </Card.Body>
    </Card>
  );
}

export default TextExample;


