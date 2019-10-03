import { Router } from 'express'

// Common
import ReturnStatements from '../../common/ReturnStatements'

// Services
import EntitiesServices from '../../services/EntitiesService'

const router = Router()

/**
 * @param  {} '/'
 * @param  {} request
 * @param  {} response
 * 
 * Loads the index route. There's nothing here for the moment
 */
router.get('/', (request, response) => {

	const data = EntitiesServices.getEntitiesGraphData()

	let returnObject;

	if (data) {
		returnObject = ReturnStatements.success;
		returnObject.data = data
	}

	response.status(200).json(returnObject)
})

export default router