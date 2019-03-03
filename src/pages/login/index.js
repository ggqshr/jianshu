import React, { PureComponent } from 'react'
import { LogWrapper, LoginBox, Input, Button } from './style'
import { connect } from 'react-redux'
import { actionCreater } from './store'
import {Redirect} from 'react-router-dom'

class Login extends PureComponent {
  render() {
    const { login } = this.props;
    if (!login) {
      return (
        <LogWrapper>
          <LoginBox>
            <Input placeholder='账号' ref={(input) => { this.account = input }} />
            <Input placeholder='密码' type='password' ref={(password) => { this.password = password }} />
            <Button onClick={() => this.props.Login(this.account, this.password)}>登陆</Button>
          </LoginBox>
        </LogWrapper>
      )
    }else{
      return (
        <Redirect to='/'/>
      )
    }

  }
}
const mapStateToProps = (state, ownProps) => ({
  login: state.getIn(['login', 'login'])
})


const mapDispatchToProps = (dis) => {
  return {
    Login: (account, password) => {
      dis(actionCreater.login(account.value, password.value))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)
