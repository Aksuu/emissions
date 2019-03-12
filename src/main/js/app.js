const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

class App extends React.Component {

	handleSubmit(event) {

	    //here the file will be opened
	    //submit pressed

		const rawFile = new XMLHttpRequest();

		rawFile.onreadystatechange = () => {
		  if (rawFile.readyState === 4 && (rawFile.status === 200 || rawFile.status === 0)) {
		    const parser = new DOMParser();
		    const xml = parser.parseFromString(rawFile.response, 'text/xml');

		    // Do your querying here.
		    // xml will can now be queried like DOM
		    // e.g. xml.querySelector('ST_TIMERANGE').getAttribute('Weeks') // returns 2.
		  }
		};

		rawFile.open('GET', this.App.files[0], false);
		rawFile.send();	

class population extends React.Component{
	render() {
		return (
				<form onSubmit={this.handleSubmit}>
		        <label>
		          Upload file:
		          <input
		            type="file"
		            ref={input => {
		              this.App = input;
		            }}
		          />
		        </label>
		        <br />
		        <button type="submit">Search</button>
		      </form>		
		)
	}
}
}
}

ReactDOM.render(<App />, document.getElementById('react'));