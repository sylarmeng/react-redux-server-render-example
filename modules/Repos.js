import React from 'react'
// import NavLink from './NavLink'
import { NavLink } from 'react-router-dom'
import Repo from './Repo'
import { Route } from 'react-router-dom'


export default class Repos extends React.Component{
  contextTypes: {
    router: React.PropTypes.object
  }

  handleSubmit(event) {
    event.preventDefault()
    const userName = event.target.elements[0].value
    const repo = event.target.elements[1].value
    const path = `/repos/${userName}/${repo}`
    // console.log(this)
    // console.log(this.context)
    // this.context.router.history.push(path)
    this.props.history.push(path)
  }

  //it's necessary to bind this with onSubmit
  render() {
    return (
      <div>
        <h2>Repos</h2>
        <ul>
          <li><NavLink to="/repos/reactjs/react-router" activeClassName="active">React Router</NavLink></li>
          <li><NavLink to="/repos/facebook/react" activeClassName="active">React</NavLink></li>
          <li>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <input type="text" placeholder="userName"/> / {' '}
              <input type="text" placeholder="repo"/>{' '}

              <button type="submit">Go</button>

            </form>
          </li>
        </ul>
        {this.props.children}
        <Route path={`${this.props.match.url}/:userName/:repoName`} component={Repo}/>
      </div>
    )
  }
}
