// constants

const rootElement = document.getElementById('root');

const initialMarkdown = "# This is main heading\n## This is sub-heading\n[This is a link](URL)\n`this is inline code`\n```\nthis is code block\n```\n> this is blockquote\n\n![here goes sr-text](here/goes/the/path 'here goes text for mouseOver')\n**and, finally, this is fat and bolded text**\n* this is list item";

// child components

const Header = () => {
  return (
    <header id='header' className='container mt-4 mb-3'>
      <div className='row justify-content-center'>
        <div className='col-8'>
          <h2 className='text-center text-uppercase'>Markdown Previewer</h2>
        </div>        
      </div>
    </header>
  )
}

const Editor = ({defaultValue, changeHandler}) => {
  return (
    <div className='row justify-content-center mb-2'> 
      <textarea id="editor" className='form-control col-9' defaultValue={defaultValue} onInput={changeHandler}/>
    </div>  
  )
}

const Preview = ({text}) => {
  return (
    <div className='row justify-content-center mb-1'>
      <div id="preview" className='col-10' dangerouslySetInnerHTML={{__html: text}}/>
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
  const [previewContent, setPreviewContent] = React.useState(marked.parse(initialMarkdown));
  const handleChange = (event) => {    
    setPreviewContent(marked.parse(event.target.value));
  }
  return (
    <>
    <Header />
    <main className="container mt-2 mb-2">     
      <Editor 
        defaultValue={initialMarkdown}
        changeHandler={handleChange}
      />
      <Preview text={previewContent}/>
    </main>
    <Footer />
    </>
  )
}

ReactDOM.render(<App />, rootElement);