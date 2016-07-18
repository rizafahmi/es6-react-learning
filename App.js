import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      text: "this is state text",
      cat: 0
    }
  }
  update(e) {
    this.setState({text: e.target.value})
  }
  render() {
    return (
      <div>
        <Widget text={this.state.text} update={this.update.bind(this)} />
        <Widget text={this.state.text} update={this.update.bind(this)} />
        <Widget text={this.state.text} update={this.update.bind(this)} />
        <Widget text={this.state.text} update={this.update.bind(this)} />
      </div>
    )
  }
}

const Widget = (props) => {
  return (
    <div>
      <input type="text"
        onChange={props.update} />
      <h1>{props.text}</h1>
    </div>
  )
}

App.propTypes = {
  text: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  text: "This is default text"
}

ReactDOM.render(
  <App cat={50} />,
  document.getElementById('app')
)

// Stateless React
// const App = () => {
//   return <h1>Hello eggheads</h1>
// }


export default App
