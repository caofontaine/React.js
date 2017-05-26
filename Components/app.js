var React = require('react');
var ReactDOM = require('react-dom');

class VacancySign extends React.Component {
  render() {
    var vacancyText = "";
    if(this.props.hasVacancy) {
      vacancyText = "Vacancy";
    }
    else {
      vacancyText = "No Vacancy";
    }
    return (
      <div>{vacancyText}</div>
    );
  }
}

// Once you create your component, render your component and try both states.
ReactDOM.render(
  <VacancySign hasVacancy={false} />,
  document.getElementById('container')
);