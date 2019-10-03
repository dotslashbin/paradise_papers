import { Router } from 'express'

const router = Router()

/**
 * @param  {} '/'
 * @param  {} request
 * @param  {} response
 * 
 * Loads the index route. There's nothing here for the moment
 */
router.get('/', (request, response) => {
	response.status(200).json({ foo: 'this is the entities' })
})

export default router