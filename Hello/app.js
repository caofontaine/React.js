var React = require('react');
var ReactDOM = require('react-dom');

class Hello extends React.Component {
  render() {
    return (
      <div>Bonjour!</div>
    );
  }
}

ReactDOM.render(
  <Hello />,
  document.getElementById('app')
);