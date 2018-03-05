import React, { Component } from 'react'
import { 
	AppContainer,
	Header, 
	MenuPanel, 
	Menu,
	Tab,
	Workspace, 
	Footer } from 'odeum-app'

/* Demo */
import RouteDemo from 'demos/RouteDemo'
import ReactComp from 'demos/ReactComp'
import { SimpleDiv } from 'demos/SimpleDiv'
import { RenderFooterLabel, handleLink } from './demos/FooterLabel'

class App extends Component {

	constructor(props) {
		super(props)

		this.state = {
			helpID: 0
		}

		Menu.defaultProps = {
			setHelpID: this.setHelpID,
			icon: 'menu' 
		}

		Tab.defaultProps = {
			setHelpID: this.setHelpID,
			label: 'Tab', 
			icon: 'tab' 
		}

		Workspace.defaultProps = {
			setHelpID: this.setHelpID
		}

	}

	setHelpID = (helpID) => {
		// console.log(helpID)
		return helpID === this.state.helpID ? null : this.setState({ helpID: helpID })
	}

	render() {
		return (
			<AppContainer>
				<Header logo={'default'}/>
				<MenuPanel>
					<Menu route={'/'} exact helpID={1}>
						<SimpleDiv />
					</Menu>
					<Menu route={'/home'} label={'Menu with no tabs'} icon={'home'}>
						<Workspace helpID={2}>
							<SimpleDiv />							
						</Workspace>
					</Menu>

					<Menu icon={'people'} route={'/child'} label={'Menu with one Tab and a Route Demo'}>
						<Tab icon={'assignment'} label={'Overflow'} helpID={3}>
							<RouteDemo />
						</Tab>
					</Menu>
					<Menu icon={'tab'} route={'/children'} label={'Menu with children'}>
						<Tab icon={'assignment'} label={'Overflow'} helpID={4}>
							<SimpleDiv />
						</Tab>
						<Tab icon={'assignment_turned_in'} label={'Lady Gaga'} route={'/react-component'} helpID={5}>
							<ReactComp helpID={6} />
						</Tab>
						<Tab icon={'visibility'} label={'Hello workspace'} route={'/workspace'} helpID={7}>
							<div>Hello Workspace ... </div>
						</Tab>
					</Menu>
					<Menu label={'Auto Generated'}>
						<Tab label={'Route'} helpID={8}>
							Auto Generated Route
						</Tab>
					</Menu>

				</MenuPanel>
				<Footer label={RenderFooterLabel} labelLink={handleLink()} helpID={this.state.helpID} />
			</AppContainer>
		)
	}
}

export default App


