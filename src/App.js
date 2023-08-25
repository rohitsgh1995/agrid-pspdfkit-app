import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AgGridComponent from './components/aggrid';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <AgGridComponent />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default App;
