import React, {PropTypes } from 'react'

// import { Grid, Row, Col } from 'react-bootstrap'

const rowbackground = {backgroundColor: '#F16E10'}


import { connect } from 'react-redux'
import { fetchList } from '../actions/index'

//export default 
class Home extends React.Component{

    handleClick(e) {
    console.log('click-------------')
    // this.props.onAddClick()
  }

  render() {
    console.log('get home----------')
  	// console.log(this)
    return (
    	<div>
        home


        <p onClick={this.handleClick.bind(this)}>end</p>

    	</div>
    	)
  }
}

function mapStateToProps(state) {
  return {menu: state.menu }
}

export default connect(mapStateToProps)(Home)






