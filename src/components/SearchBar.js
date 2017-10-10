import React from 'react';

export default class SearchBar extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			search: ''
		};
	}

	handleSearchChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	render() {
		return (
			<div className="searchbar-container">
				<form className="search-form">
				<input
					type="search"
					name="search"
					value={this.state.search}
					className="search-input"
					placeholder="Search Restaurants"
					onChange = {this.handleSearchChange}
				/>
				</form>

			</div>
		)
	}
}