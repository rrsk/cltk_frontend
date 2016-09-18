SearchResultsList = React.createClass({

	propTypes: {
		works: React.PropTypes.array.isRequired,
	},

	renderWorks() {
		return this.props.works.map((work) => (
			<WorkTeaser
				key={work._id}
				work={work}
			/>
		));
	},

	render() {
		return (
			<div className="works-list search-results-list">
				{this.renderWorks()}
			</div>
		);
	},
});