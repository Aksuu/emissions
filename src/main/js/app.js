const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {populations: []};
	}

	componentDidMount() {
		client({method: 'GET', path: '/api/populations'}).done(response => {
			this.setState({populations: response.entity._embedded.employees});
		});
	}

	render() {
		return (
			<PopulationList populations={this.state.populations}/>
		)
	}
}

class PopulationList extends React.Component{
	render() {
		const populations = this.props.populations.map(employee =>
			<Population key={population._links.self.href} population={population}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Description</th>
					</tr>
					{populations}
				</tbody>
			</table>
		)
	}
}

class population extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.population.countryOrArea}</td>
				<td>{this.props.population.year}</td>
				<td>{this.props.population.value}</td>
			</tr>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('react')
)