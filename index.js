import React, {
	Component,
	PropTypes,
} from 'react'
import ReactWinJS from 'react-winjs'
import OtherPage from './OtherPage'
import WordTranslation from './WordTranslation'


class App extends Component {
	// 构造
	constructor(props) {
		super(props);
		// 初始状态
		this.state = {
			paneOpened: false,
			location: 'word'
		};
	}

	handleCommandInvoked(location){
		console.log(location)
		this.setState({
			paneOpened: false,
			location
		})
	}

	handleTogglePane(){
		this.setState({
			paneOpened: !this.paneOpened,
		})

	}
	handleAfterClose(){
		this.setState({
			paneOpened: false
		})
	}


	renderOther(){
		return <OtherPage location={'word'}></OtherPage>
	}

	renderContent(){
		//console.log(this.state)
		if (this.state.location === 'word'){
			return (
				<WordTranslation />
			)
		}
	}



	render(){
		const splitViewId = "rootSplitView"
		const paneComponent = (
			<div style={{height: "100%"}}>
				<ReactWinJS.SplitView.Command
					label="单词翻译"
					icon="flag"
					onInvoked={this.handleCommandInvoked.bind(this,'word')} />
				<ReactWinJS.SplitView.Command
					label="句子翻译"
					icon="comment"
					onInvoked={this.handleCommandInvoked.bind(this)} />
				<ReactWinJS.SplitView.Command
					label="生词本"
					icon="library"
					onInvoked={this.handleCommandInvoked.bind(this)} />

				<ReactWinJS.SplitView.Command
					style={{position: "absolute", bottom: 0, width: "100%"}}
					label="设置"
					icon="settings"
					onInvoked={this.handleCommandInvoked.bind(this)} />
			</div>
		);

		var contentComponent = this.renderContent()

		return (
			<div style={{height: "100%"}}>
				<div style={{height: 48, backgroundColor: "rgb(1, 121, 216)"}} className="win-ui-dark">
					<ReactWinJS.SplitViewPaneToggle
						aria-controls={splitViewId}
						style={{display:'inline-block'}}
						paneOpened={this.state.paneOpened}
						onInvoked={this.handleTogglePane.bind(this)} />
					<h3 className="win-h3" style={{display: "inline-block", marginLeft: 5}}>在线翻译App</h3>
				</div>
				<ReactWinJS.SplitView
					id={splitViewId}
					style={{height: "calc(100% - 48px)"}}
					paneComponent={paneComponent}
					contentComponent={contentComponent}
					onAfterClose={this.handleAfterClose.bind(this)}
					paneOpened={this.state.paneOpened}
					openedDisplayMode={"overlay"}
					closedDisplayMode={"inline"}
				/>
			</div>
		)
	}
}

App.propTypes = {
}

React.render(<App style={{}}/>, document.getElementById('app'))