import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

 class Detail extends Component {
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

export default withRouter(Detail)
