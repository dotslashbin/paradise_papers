import React, { Component } from 'react'

class NodeEntity extends Component {

	componentDidMount() {
		console.log(`component mounts`)
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