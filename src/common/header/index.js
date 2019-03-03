import React, { Component } from 'react'
import { SearchInfoList, SearchInfoItem, SearchInfoSwitch, HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo, SearchInfoTitle } from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreater } from './store'
import {Link} from 'react-router-dom'
import {actionCreater as loginActionCreater} from '../../pages/login/store'


class Header extends Component {

    render() {
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    {
                        this.props.login?
                        <NavItem className='right' onClick={this.props.logOut}>退出</NavItem>:
                        <Link to='/login'><NavItem className='right'>登陆</NavItem></Link>
                    }
                    
                    <NavItem className='right'>
                        <i className='iconfont'>&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={this.props.focused}
                            timeout={200}
                            classNames='slide'
                        >
                            <NavSearch
                                className={this.props.focused ? 'focused' : ''}
                                onFocus={() => this.props.handleFocus(this.props.list)}
                                onBlur={() => this.props.handleBlur()
                                }
                            ></NavSearch>
                        </CSSTransition>
                        <i className={this.props.focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe62d;</i>
                        {this.getListArea()}
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
    getListArea = () => {
        const jsList = this.props.list.toJS()
        const dataList = []
        for (let i = (this.props.page - 1) * 2; i < this.props.page * 2; i++) {
            dataList.push(
                <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
            )
        }
        if (this.props.focused||this.props.mouseIn) {
            return (
                <SearchInfo onMouseEnter={this.props.handleMouseEnter}
                onMouseLeave={this.props.handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                                    <SearchInfoSwitch onClick={()=>this.props.handleSwitch(this.spinIcnon)}>
                                    <i ref={(icon)=>{this.spinIcnon = icon}} className='iconfont spin'>&#xe851;</i>
                                    换一换</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            dataList
                        }
                    </SearchInfoList>
                </SearchInfo>
            )
        }
        else {
            return null;
        }
    }
}


const mapStateToProps = (state, ownProps) => ({
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn:state.getIn(['header','mouseIn']),
    login:state.getIn(['login','login']),
})

const mapDispatchToProps = (dis) => {
    return {
        handleFocus: (list) => {
            if(!list.size){
                dis(actionCreater.getList())
            }
            dis(actionCreater.handleFocusAction())
        },
        handleBlur: () => dis(actionCreater.handleBlurAction()),
        handleMouseEnter:()=>dis(actionCreater.handleMouseEnter()),
        handleMouseLeave:()=>dis(actionCreater.handleMouseLeaveAction()),
        handleSwitch:(spin)=>{
            let originAg = spin.style.transform.replace(/[^0-9]/ig,'')
            if (originAg){
                originAg = parseInt(originAg,10)
            }else{
                originAg=0;
            }
            spin.style.transform = 'rotate('+(originAg+360)+'deg)'
            
            dis(actionCreater.handleSwitchAction())
        },
        logOut:()=>{
            dis(loginActionCreater.logoutAction())
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Header)