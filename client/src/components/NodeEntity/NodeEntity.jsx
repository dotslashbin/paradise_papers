import React, { Component } from 'react'
import { DataFetchers  } from '../../services/DataFetchers'

class NodeEntity extends Component {

	componentDidMount() {
		DataFetchers.getNodeEntities()
	}

	render() {
		return (
			<div>
				this is where the data comes out
			</div>
		)
	}
}

export default NodeEntity