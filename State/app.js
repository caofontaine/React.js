var React = require('react');
var ReactDOM = require('react-dom');

class Board extends React.Component {
  render() {
    var className = "board";
    if (this.props.selected) {
      className += " selected";
    }
    return (
      <div className={className}>
        {this.props.index + 1}
      </div>
    );
  }
}

class BoardSwitcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
  }
  
  onToggleClick(evt) {
    // Here's the meat of the problem. Notice how we can use this.props here (and anywhere else in the component).
    // When this is called, React updates the state and updates the UI to reflect the new render output.
    this.setState({
      selectedIndex: (this.state.selectedIndex + 1) % this.props.numBoards
    });
  }
  
  render() {
    var boards = [];
    for (var ii = 0; ii < this.props.numBoards; ii++) {
      var isSelected = ii === this.state.selectedIndex;
      boards.push(
        <Board index={ii} selected={isSelected} key={ii} />
      );
    }
    
    return (
      <div>
        <div className="boards">{boards}</div>
        <button onClick={this.onToggleClick.bind(this)}>Toggle</button>
        //Class methods are not bound by default. So bind() is necessary to use 'this' properly.
      </div>
    );
  }
}

ReactDOM.render(
  <BoardSwitcher numBoards={3} />,
  document.getElementById('container')
);