const rootElement = document.getElementById('root');

const Editor = () => {
  return (
    <textarea id="editor" />
  )
}

const Preview = () => {
  return (
    <div id="preview" />
  )
}

const App = () => {
  return (
    <>
    <Editor />
    <Preview />
    </>
  )
}

ReactDOM.render(<App />, rootElement);