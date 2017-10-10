import React from 'react';
import 'font-awesome/css/font-awesome.css'
import './SearchBar.css'

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

	handleSubmit = (event) => {
		event.preventDefault()
		this.props.updateSearchTerm(this.state.search);
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
					<button
						type="submit"
						className="search-button"
						onClick={this.handleSubmit}
					>
						<i className="search-icon fa fa-search"/>
					</button>
				</form>
			</div>
		)
	}

};

// PropTypes.PropTypes = {
// 		updateSearchTerm: PropTypes.func.isRequired
// };