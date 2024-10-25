import { useState } from "react";
import "./App.css";
import Markdown from "react-markdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons";
import remarkGfm from "remark-gfm";

const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

`;

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleChange = (e) => setMarkdown(e.target.value);

  return (
    <>
      <div className="container">
        <div className="editor-container">
          <div className="browser-header">
            <p className="browser-title">Editor</p>
            <div className="buttons"></div>
          </div>
          <textarea
            name="editor"
            id="editor"
            value={markdown}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="preview-container">
          <div className="browser-header">
            <p className="browser-title">Preview</p>
            <div className="buttons"></div>
          </div>
          <div id="preview">
            <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
