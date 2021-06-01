import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode } from '@fortawesome/free-solid-svg-icons' 

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

  handleChange = (e) => {
    this.setState({ markdown: e.target.value})
    console.log(e.target.value)
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
      <Container className="border border-info">
        <Row >
          <Col className="bg-info text-white">
            <h1 className="pt-3 mb-0" ><FontAwesomeIcon className="fa-sm" icon={faFileCode} /> Mardown Previewer</h1>
            <p className="pb-3">Start typing to preview your markup!</p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="bg-body text-dark">
            <h4 className="text-center">Markdown input</h4>
            <textarea onChange={this.handleChange} style={inputStyles} value={this.state.markdown}>
            {this.state.markdown}
            </textarea>
          </Col>
          <Col className="text-dark">
            <h4 className="text-center">Preview</h4>
            <div style={outputStyles} className="bg-light p-4">{this.state.markdown}</div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
