var React = require('react');
var ReactDOM = require('react-dom');

var ipsumText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.';

class Impl extends React.Component {
  render() {
    return (
      <div>
        <a href="#" className="button">Button</a>
        <div>{ipsumText}</div>
      </div>
    );
  }
}

ReactDOM.render(
  <Impl />,
  document.getElementById('impl')
);