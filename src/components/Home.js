
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Home.css";
const Home = () => {
  return (
    <div className="home">
      <Jumbotron className="jumbotron">
        <Container fluid>
          <Row>
            <Col xs={{span: 12, order: 2 }} md={{span: 12, order: 2 }} lg={{span: 7, order: 1 }} xl= {{span: 7, order: 1 }}>
              <p>
                Your only <span className="green-text">destination</span> for
                everything related to Cycling.
              </p>
            </Col>
            <Col  xs={{span: 12, order: 1}} md={{span: 12, order: 1}} lg={{span: 5, order: 2 }} xl= {{span: 5, order: 2 }}>
              <img className="first-illustration" src="pic1.svg" />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <div className="second-jumbotron">
        <Container fluid>
          <Row>
            <Col xs={{span: 12, order: 2 }} md={{span: 12, order: 2 }} lg={5 } xl= {{span: 7, order: 1 }}>
              <p>skrrrr</p>
            </Col>
            <Col xs={{span: 12, order: 1}} md={{span: 12, order: 1}} lg={7} xl= {{span: 5, order: 2 }}>
              <img className="second-illustration" src="pic1.svg" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
