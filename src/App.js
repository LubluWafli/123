import './App.css';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  const[offset, setOffset] = useState(0);
  const[limit, setLimit] = useState(16);
  const[data, setData] = useState([]);
  const[isLoading, setIsLoading] = useState(false);
  
function CreateCard(title)
{
  return(
    <Card style={{ width: '15rem' }}>
      <Card.Body>
        <Card.Title>{title.title.name}</Card.Title>
        <Card.Link href={title.title.url}>Link</Card.Link>
      </Card.Body>
    </Card>
    )
}

    const check = async() =>
  {
    try
      {
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/?name=&limit=${limit}&offset=${offset}`).then((res) => res.json());
        setData(res.results);
      }
    catch(error)
      {
        console.error('Error fetch API data');
      }
    finally
      {
        setIsLoading(true);
      }
  }

  if(!data)
    {
      setIsLoading(true)
    }  
  if(!isLoading)
    {
      check();
    }
  console.log(data)

  const incOffset = () =>
    {
      setOffset(offset+5);
      check();
    }


  const decOffset = () =>
    {
      if(offset === 0)
      {
        return
      }
      setOffset(offset-5);
      check();

    }
  
  console.log(offset)
  return (
    <div>
      <Container>
        <Row xl = {4} md sm = {5} xs = {1}>
            {
              data.map((item, index) =>
                (
                  <Col key={index}>
                    <CreateCard title={item}/>
                  </Col>
                )
              )
            }
        </Row>
      
      </Container>
      <button id='back' onClick={decOffset}>Previous</button>
      <button id='next' onClick={incOffset}>Next</button>
      <div id='pagin'>Page:{offset / 5 + 1}</div>

    </div>

  );
}

export default App;
