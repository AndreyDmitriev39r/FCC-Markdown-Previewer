// constants

const rootElement = document.getElementById('root');

const initialMarkdown = "for now it will be random stuff";


// child components

const Header = () => {
  return (
    <header className='container mt-4 mb-3'>
      <div className='row justify-content-center'>
        <div className='col-8'>
          <h2 className='text-center'>Markdown Previewer</h2>
        </div>        
      </div>
    </header>
  )
}

const Editor = ({defaultValue, changeHandler}) => {
  return (
    <textarea id="editor" defaultValue={defaultValue} onChange={changeHandler}/>
  )
}

const Preview = ({text}) => {
  return (
    <div id="preview" children={text}/>
  )
}

const Footer = () => {
  const date = new Date();
  return (
    <footer className='container mt-3 mb-1'>
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
  const handleChange = (e) => {    
    setPreviewContent(e.target.value);
  }
  return (
    <>
    <Header />
    <Editor 
      defaultValue={initialMarkdown}
      changeHandler={handleChange}
    />
    <Preview text={previewContent}/>
    <Footer />
    </>
  )
}

ReactDOM.render(<App />, rootElement);