const EntititesService = {
	/** 
	 * Returns a stuctured data for an entity graph
	*/
	getEntitiesGraphData: () => {
		// TODO: Implement this
		return {
			datasets: [{
				data: [10, 20, 30]
			}],
		
			// These labels appear in the legend and in the tooltips when hovering different arcs
			labels: [
				'Red',
				'Yellow',
				'Blue'
			]
		};
	}
}

export default EntititesService