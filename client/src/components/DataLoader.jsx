import React, { useState } from 'react'

export default function DataLoader() {

	const [values, setValues] = useState({
		foo: 'bar'
	})

	return (
		<div>
			Testing { values.foo }
		</div>
	)
}
