import axios from 'axios'
import API_URL from '../common/config'

export const DataFetchers = {
	
	/**
	 * Calls api to fetch for Node Entity Data
	 */
	getNodeEntities:() => {
		return axios.get()
	}
}