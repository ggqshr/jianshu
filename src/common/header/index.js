import React from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreater } from './store'


const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                <NavItem className='right'>登陆</NavItem>
                <NavItem className='right'>
                    <i className='iconfont'>&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={props.focused}
                        timeout={200}
                        classNames='slide'
                    >
                        <NavSearch
                            className={props.focused ? 'focused' : ''}
                            onFocus={() => props.handleFocus()}
                            onBlur={() => props.handleBlur()
                            }
                        ></NavSearch>
                    </CSSTransition>
                    <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe62d;</i>

                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className='writting'>
                    <i className='iconfont'>&#xe602;</i>
                    写文章
                    </Button>
                <Button className='reg'>注册</Button>
            </Addition>
        </HeaderWrapper>
    )
}


const mapStateToProps = (state, ownProps) => ({
    focused: state.getIn(['header','focused'])
})

const mapDispatchToProps = (dis) => {
    return {
        handleFocus: () => dis(actionCreater.handleFocusAction()),
        handleBlur: () => dis(actionCreater.handleBlurAction())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Header)