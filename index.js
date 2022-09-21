// constants

const rootElement = document.getElementById('root');

const markdownDict = [
  "# This is main heading",
  "## This is sub-heading",
  "[This is a link to freeCodeCamp forum](https://forum.freecodecamp.org/)",
  "`this is inline code: let react='rocks'`",
  "```\n\\\\this is multi-line code block\nlet stuff = 'someStuff'\nlet someArray = [1, 'and even MORE stuff']\n```",  
  "> this is just blockquote\n",  
  "![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg 'hover on it to see this text')",
  "**this is fat and bolded text**",
  "*and this \- some italic text*",  
  "~~and this is crossed out text~~",  
  "* and finally - this is list item\n"
]

// child components

const Header = () => {
  return (
    <header id='header' className='container mt-4 mb-3'>
      <div className='row justify-content-center'>
        <div className='col-8'>
          <h2 id="main-heading" className='text-center text-uppercase'>Markdown Previewer</h2>
        </div>        
      </div>
    </header>
  )
}

const Editor = ({defaultValue, changeHandler}) => {
  return (
    <div className='row justify-content-center mb-2'>
      <div className="col-9 subheading-container border border-dark rounded-lg">
        <h3 className="text-center subheading mt-2">Type markdown stuff here:</h3>
      </div>
      <textarea
        id="editor"
        rows = {defaultValue.split('\n').length}
        className="form-control col-9 border border-dark rounded-lg"
        defaultValue={defaultValue}
        onInput={changeHandler}
      />
    </div>  
  )
}

const Preview = ({text}) => {
  return (    
    <div className='row justify-content-center mb-1'>
      <div className="col-10 subheading-container border border-dark rounded-lg">
        <h3 className="text-center subheading mt-2">...and see how HTML looks here:</h3>
      </div>
      <div
        id="preview"
        className="col-10 border border-dark rounded-lg"
        dangerouslySetInnerHTML={{__html: text}}
      />
    </div>
  )
}

const Footer = () => {
  const date = new Date();
  return (
    <footer id='footer' className='container mt-3 mb-1'>
      <div className='row justify-content-center'>
        <div className='col-8'>
          <p className='text-center'>Markdown Previewer - {date.getFullYear()}</p>
        </div>        
      </div>
    </footer>
  )
}

// main component

const App = () => {

  // state  

  const [editorContent, setEditorContent] = React.useState(window.localStorage.getItem('editorContent') || markdownDict.join('\n'));

  const [previewContent, setPreviewContent] = React.useState(window.localStorage.getItem('previewContent') || marked.parse(editorContent));

  // effects
  
  React.useEffect(() => {
    window.localStorage.setItem('previewContent', previewContent);
    window.localStorage.setItem('editorContent', editorContent)
  }, [editorContent, previewContent])

  // functions
  const handleChange = (event) => {
    setEditorContent(event.target.value);
    setPreviewContent(marked.parse(event.target.value));    
  }

  return (
    <>
    <Header />
    <main className="container mt-2 mb-2">     
      <Editor 
        defaultValue={editorContent}
        changeHandler={handleChange}
      />
      <Preview text={previewContent}/>
    </main>
    <Footer />
    </>
  )
}

ReactDOM.render(<App />, rootElement);