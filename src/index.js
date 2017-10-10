import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import SearchBar from './components/SearchBar'

const App = () => {

	this.updateSearchTerm = (searchTerm) => {
		console.log(`We are searching for ${searchTerm}`)

		this.getSearchData(searchTerm).then((data) => {
			console.log(data);
		})
	}

	this.getSearchData = async (searchTerm) => {
		let response, data;
		try {
			response = await fetch(`https://data.cityofchicago.org/resource/cwig-ma7x.json?$query=SELECT * where Contains(upper(dba_name), upper("${searchTerm}")) or Contains(upper(aka_name), upper("${searchTerm}"))`)
			data = await response.json();
		} catch (e) {
			console.log(e)
		}
		return data
	};

	return (
		<div>
			<div style={{
				display: "flex",
				justifyContent: "center"
			}}>
			<h1>Restaurant Search</h1>
			</div>
			<SearchBar
				updateSearchTerm={this.updateSearchTerm}
			/>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
