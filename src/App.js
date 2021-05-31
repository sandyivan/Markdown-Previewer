import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        markdown: `
        # React Markdown Previewer!
        ## This is a sub-heading...
            
        Or... wait for it... **_both!_**
          
        And feel free to go crazy ~~crossing stuff out~~.
              
        There's also [links](https://ashusingh.me), and
        > Block Quotes!

        `
      }
  }

  render() {
    const inputStyles = {
      width: '100%',
      height: '80vh'
    }

    const outputStyles = {
      width: '100%',
      height: '80vh'
    }

    return(
      <Container>
        <Row>
          <Col>
            <h1>Mardown Previewer</h1>
            <p>Start typing to preview your markup!</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Markdown input</h4>
            <textarea style={inputStyles} value={this.state.markdown}>

            </textarea>
          </Col>
          <Col >
            <h4>Preview</h4>
            <div style={outputStyles} className="bg-secondary">testing</div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
