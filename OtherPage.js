/**
 * Created by jason on 3/12/16.
 */
import React, {Component, PropTypes} from 'react'

const urlContent = {
	word: "this is a word page",
	sentence: "this is a sentence page",
	note: "this is a note page",
	other: "other page"
}

class OtherPage extends React.Component {
	render(){

		const title = urlContent[this.props.location] || 'other'
		return (
			<h2 class="win-h2" style={{marginLeft: "10px"}}>{title}</h2>
		)
	}
}


OtherPage.propTypes = {
	location: PropTypes.string.isRequired
}


export default OtherPage