const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');


class App extends React.Component {

	
// //Autocomplete to get the population country or area data and match with user input
//	state = { value: '' };
//
//	  render() {
//	    return (
//	      <div style = {{ marginTop: 40, marginLeft: 50 }}>
//	        <Autocomplete
//	          value={ this.state.value }
//	          inputProps={{ id: 'states-autocomplete' }}
//	          wrapperStyle={{ position: 'relative', display: 'inline-block' }}
//	          items={ getStocks() }
//	          getItemValue={ item => item.name }
//	          shouldItemRender={ matchStocks }
//	          onChange={(event, value) => this.setState({ value }) }
//	          onSelect={ value => this.setState({ value }) }
//	          renderMenu={ children => (
//	            <div className = "menu">
//	              { children }
//	            </div>
//	          )}
//	          renderItem={ (item, isHighlighted) => (
//	            <div
//	              className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
//	              key={ item.abbr } >
//	              { item.name }
//	            </div>
//	          )}
//	        />
//	      </div>
//	      );
//	    }
	}


	ReactDOM.render(<App />, document.getElementById('react'));