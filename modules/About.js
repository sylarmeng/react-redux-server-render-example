import React from 'react'
import { connect } from 'react-redux'

// export default 
class About extends React.Component{
  render() {
  	console.log('get about----------')
    return <div>
    	about
    </div>
  }
}
export default connect()(About)
