import { makeAugmentedSchema } from 'neo4j-graphql-js'
import { v1 as neo4j } from 'neo4j-driver';
import { neo4jgraphql } from 'neo4j-graphql-js';

const typeDefs = `
	type Movie {
		title: String
		tagline: String
		released: Int
	}
`;

const schema = makeAugmentedSchema({ typeDefs });

const driver = neo4j.driver(
	'bolt://10.5.0.3:7687',
	neo4j.auth.basic('neo4j', 'pass1234')
  );


var session = driver.session()

const EntititesService = {
	/** 
	 * Returns a stuctured data for an entity graph
	*/
	getEntitiesGraphData: () => {
		session.run('MATCH (n) RETURN n LIMIT 25')
			.then(result => {
				result.records.forEach(record => {m
					console.log(record._fields[0].properties)
					// console.log(record._fields[0].properties)
				})
			})
			.catch(error => {
				console.error(`Problem on query : `, error)
			})

		// TODO: Implement this
		// return {
		// 	datasets: [{
		// 		data: [10, 20, 30]
		// 	}],
		
		// 	// These labels appear in the legend and in the tooltips when hovering different arcs
		// 	labels: [
		// 		'Red',
		// 		'Yellow',
		// 		'Blue'
		// 	]
		// };
	}
}

export default EntititesService