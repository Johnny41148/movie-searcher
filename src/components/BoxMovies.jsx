import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BoxMovies({ Title, Year, Poster }) {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src={Poster} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>{Year}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BoxMovies;
