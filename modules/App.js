import React from 'react'
import { NavLink } from 'react-router-dom'


// import { Grid, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'


const rowbackground = {backgroundColor: '#FFEEEE'}
const rowbackground1 = {backgroundColor: '#EEEEEE'}
const rowbackground2 = {backgroundColor: '#EEEEFF'}
// <Row className="show-grid" style ={rowbackground2}>
// export default 
class App extends React.Component{

  render() {
    console.log(this.props.children)
    return (
      <div style ={rowbackground2}>

                   <h1>wecatering</h1>
                  <ul role="nav">
                    <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                    <li><NavLink exact to="/repos" activeClassName="active">Repos</NavLink></li>
                  </ul>

              {this.props.children}
      </div>
    )
  }
}

export default connect()(App)
