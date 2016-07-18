import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  render() {
    let txt = this.props.text
    return (
      <div>
        <h1>{txt}</h1>
        <h2>{this.props.cat}</h2>
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
  <App cat="50" />,
  document.getElementById('app')
)

// Stateless React
// const App = () => {
//   return <h1>Hello eggheads</h1>
// }


export default App
