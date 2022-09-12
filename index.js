// constants

const rootElement = document.getElementById('root');

const initialMarkdown = "for now it will be random stuff";


// child components

const MainHeading = () => {
  return (
    <h2>Markdown previewer</h2>
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
  return (
    <footer>here goes current year</footer>
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
    <MainHeading />
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