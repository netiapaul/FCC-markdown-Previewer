import React from 'react';
import Editor from './components/editor/editor';
import Preview from './components/preview/preview';
import './App.css';

const initialMd = `# Greetings Earthlings! 
## This is a sub-heading...
### And here's some other cool stuff:

And if you want to get really crazy, even tables:

Front End Libraries Projects
- Random Quote Machine
- Markdown Previewer
- Drum Machine
- Javascript Calculator
- Pomodoro Clock
this is a **bold** text, an _emphasis_ , a _**combined emphasis**_ , and a ~~strikethrough~~
Head 1 | Head 2 | Head 3
------ |--------| ------
item1 | item2 | item3
item4 | item5 | item6
item7 | item8 | item9
> example of blockquote
Inline \`code\`
\`\`\`

\`\`\`diff
// code block
- function sum (x, y) {
@@ return x + y; @@
@@ } @@
\`\`\`

\`\`\`
![Random Animals](https://loremflickr.com/320/240)
`;

class App extends React.Component {

  constructor(props){
    super(props);
    this.state= {
      markdonwValue:initialMd
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    e.preventDefault();
    this.setState({
      markdonwValue:e.target.value
    })
  }

 render(){

  const {markdonwValue} = this.state;

    return (
    <div className="App mt-5">

      <div className="card mx-auto" style={{maxWidth:"50rem"}}>
        <div className="card-header p-1">
         <span> Markdown-Editor <button type="button" className="btn btn-danger btn-sm float-right">
         <span aria-hidden="true">&times;</span>
           </button></span> 
        </div>
        <div className="card-body">
          <Editor makrdownValue = {markdonwValue} handleChange = {this.handleChange}/>
        </div>
      </div>

      <div className="card mx-auto mt-5" style={{maxWidth:"80rem"}}>
        <div className="card-header p-1">
         <span>Markdown-Previewer <button type="button" className="btn btn-danger btn-sm float-right">
         <span aria-hidden="true">&times;</span>
           </button></span> 
        </div>
        <div className="card-body">
          <Preview makrdownValue = {markdonwValue}/>
        </div>
      </div>
    </div>
  )};
}

export default App;
