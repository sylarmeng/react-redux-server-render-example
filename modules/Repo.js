import React from 'react'

export default class Repo extends React.Component{
  render() {
    const { userName, repoName } = this.props.match.params
    return (
      <div>
        <h2>{userName} / {repoName}</h2>
      </div>
    )
  }
}
