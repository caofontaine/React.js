var React = require('react');
var ReactDOM = require('react-dom');

class ChildComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="prompt">Add a click handler to this button so that when clicked, performMagic is called in the parent component.</div>
        <button onClick={this.props.onPerformMagicClick}>Do Magic</button>
      </div>
    );
  }
}

class ParentComponent extends React.Component {
  performMagic() {
    alert('TAADAH!');
  }

  render() {
    return (
      <div>
        <ChildComponent onPerformMagicClick={this.performMagic} />
      </div>
    );
  }
}

ReactDOM.render(
  <ParentComponent />,
  document.getElementById('container')
);