import React, { useState } from 'react';
import { marked } from 'marked';

function App() {
  const initialText = `
  # Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:

  Heres some code, \`<div></div>\`, between 2 backticks.

  \`\`\`
  \/\/ this is multi-line code:

  function anotherExample\(firstLine, lastLine\) \{
    if \(firstLine \=\= \'\`\`\`\' \&\& lastLine \=\= \'\`\`\`\'\) \{
      return multiLineCode\;
    \}
  \}
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

  const [text, setText] = useState(initialText);

  const markdown = marked(text, { breaks: true });

  return (
    <div className='w-screen h-screen flex overflow-x-hidden'>
      <div className='w-2/4 h-full'>
        <textarea
          name='editor'
          value={text}
          id='editor'
          className='w-full h-full bg-slate-600 p-3'
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div
        id='preview'
        className='w-2/4 rounded-md bg-blue-dark border-2 border-blue-darker p-3'
        dangerouslySetInnerHTML={{ __html: markdown }}
      ></div>
    </div>
  );
}

export default App;
