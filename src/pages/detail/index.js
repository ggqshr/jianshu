import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    //拿到在url中传递的参数
    console.log(this.props.match.params)
    return (
      <div>
        Detail
      </div>
    )
  }
}
