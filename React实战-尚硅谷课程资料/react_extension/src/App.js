import React, { Component,Fragment } from 'react'
import Index from './components/5_Context/index'
import Demo from './components/8_ErrorBoundary/Parent'

export default class App extends Component {
	render() {
		return (
			<Fragment>
        <Index />
				<Demo/>
			</Fragment>
		)
	}
}
