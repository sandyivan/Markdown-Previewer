import React from 'react';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import sanitizeHtml from 'sanitize-html';
import marked from 'marked';

import defaultText from './defaultText';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode } from '@fortawesome/free-solid-svg-icons' 

class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        editor: defaultText,
        //preview: marked(defaultText)
      }
  }




  inputChange = (event) => {
    //convert user input to markdown
    let dirtyMarkdown = marked(event.target.value)

    //sanitize the user input then injecting into our preview state
    let cleanMarkdown = sanitizeHtml(dirtyMarkdown)  

    //updating our state
    this.setState({
      editor: event.target.value,
      //preview: cleanMarkdown
    });
    
  }

  createMarkup = () => {
    marked.setOptions({
      breaks: true
    })
    
    let rawMarkup = marked(this.state.editor);
    return {__html: rawMarkup};
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
            <textarea id="editor" onChange={this.inputChange} style={inputStyles} value={this.state.editor}>
            {this.state.editor}
            </textarea>
          </Col>
          <Col  className="text-dark">
            <h4 className="text-center text-dark">Preview</h4>
            <div 
              id="preview" 
              style={outputStyles} 
              className="bg-light p-4"
              dangerouslySetInnerHTML={this.createMarkup()}
            ></div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
