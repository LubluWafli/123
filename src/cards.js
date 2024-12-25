import Card from 'react-bootstrap/Card';

function CreateCard()
    {
      return(
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Link href="#">Card Link</Card.Link>
          </Card.Body>
        </Card>
        )
    }

function RenderCards(jsonData)
{
    return(
    <div id='cards'>
    <CreateCard/>
    <CreateCard/>
    <CreateCard/>
    <CreateCard/>
    <CreateCard/>
    </div>
    )
}
export default RenderCards;