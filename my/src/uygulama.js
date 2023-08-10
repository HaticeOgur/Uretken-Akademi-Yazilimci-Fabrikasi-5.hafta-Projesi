import React,{Component}from "react";
import {Container,Col,Row,Button} from "reactstrap";
import Celcius from "./Celcius";
import Kelvin from "./Kelvin";
import Fahrenheit from "./Fahrenheit";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sıcaklık:0
    };
  }

  sıcaklıkarttır =() => {
    this.setState({
      sıcaklık:this.state.sıcaklık+1

    });
  };

  sıcaklıkazalt =() => {
    this.setState({
      sıcaklık: this.state.sıcaklık-1

    });
  };

  render() {
    return (
      <Container>
        <Row>
          <h1>Hava Nasıl?</h1>
        </Row>
        <Row>
          <h2>Şu an sıcaklık:{this.state.sıcaklık} Derece </h2>
        </Row>
        <Row>
          <h1>Sıcaklık Ölçümü</h1>
        </Row>
        <Row>
          <Button color="purple"onClick={this.sıcaklıkarttır}>
            Sıcaklık Arttır
          </Button>
          <Button color="yellow" onClick={this.sıcaklıkazalt}>
            Sıcaklık Azalt
          </Button>
        </Row>
        <Row>
          <Col xs="4">
            <Celcius sıcaklık={this.state.sıcaklık}/>
          </Col>
          <Col xs="4">
            <Kelvin sıcaklık={this.state.sıcaklık}/>
          </Col>
          <Col xs="4">
            <Fahrenheit sıcaklık={this.state.sıcaklık}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;



