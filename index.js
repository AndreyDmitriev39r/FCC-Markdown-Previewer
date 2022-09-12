// constants

const rootElement = document.getElementById('root');

const initialMarkdown = "for now it will be random stuff";


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
      <textarea id="editor" className='form-control col-9' defaultValue={defaultValue} onChange={changeHandler}/>
    </div>  
  )
}

const Preview = ({text}) => {
  return (
    <div className='row justify-content-center mb-1'>
      <div id="preview" className='col-10' children={text}/>
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
  const [previewContent, setPreviewContent] = React.useState(initialMarkdown);
  const handleChange = (event) => {    
    setPreviewContent(event.target.value);
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