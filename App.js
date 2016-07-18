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
    let txt = this.props.text
    return (
      <div>
        <input type="text" onChange={this.update.bind(this)} />
        <h1>{this.state.text}</h1>
      </div>
    )
  }
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
