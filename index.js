// constants

const rootElement = document.getElementById('root');

const initialMarkdown = "for now it will be random stuff";

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

const App = () => {
  const [previewContent, setPreviewContent] = React.useState(initialMarkdown);
  const handleChange = (e) => {    
    setPreviewContent(e.target.value);
  }
  return (
    <>
    <Editor 
      defaultValue={initialMarkdown}
      changeHandler={handleChange}
    />
    <Preview text={previewContent}/>
    </>
  )
}

ReactDOM.render(<App />, rootElement);