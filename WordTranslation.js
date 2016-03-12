/**
 * Created by jason on 3/12/16.
 */
import React,{Component,PropTypes} from 'react'
import ReactWinJS from 'react-winjs'
import {fetchWord} from './utils'

class WordTranslation extends Component {
	// 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
	    isFetching: false
    };
  }

	handleInputChange(e){
		if (e.keyCode === 13) {
			// 确定按钮键入
			fetchWord(e.target.value).then(json => console.log(json))
		}
	}

	render(){
		return (
			<div style={{height: '100%', width: '100%'}}>
				<div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
					<span style={{color: 'rgb(1, 121, 216)'}}>输入单词:</span>
					<input style={{marginLeft: '10px', border: '1px solid lightgray', borderRadius: '5px'}} name="haha" onKeyUp={this.handleInputChange} />
				</div>
				<div style={{marginTop: 20,marginLeft: 10, marginRight: 10,height: 1,backgroundColor: 'black'}}>

				</div>
			</div>
		)
	}
}


WordTranslation.propTypes = {

}

export default WordTranslation