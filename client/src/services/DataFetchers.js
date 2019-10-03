import axios from 'axios'
import { API_URL } from '../common/config'

export const DataFetchers = {
	
	/**
	 * Calls api to fetch for Node Entity Data
	 */
	getNodeEntities:() => {
		return axios.get(`${API_URL}/entities`)
			.then((result) => {
				console.log(`the result:`, result)
			})
			.catch(error => {
				console.error(`There was a problem calling ${API_URL}/entities`, error)
			})
	}
}