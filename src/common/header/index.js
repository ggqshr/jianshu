import React, { Component } from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style'
import { CSSTransition } from 'react-transition-group'

export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            focused: false,

        }
    }

    render() {
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
                            in={this.state.focused}
                            timeout={200}
                            classNames='slide'
                        >
                            <NavSearch
                                className={this.state.focused ? 'focused' : ''}
                                onFocus={() => this.handleFocus()}
                                onBlur={() => this.handleBlur()
                                }
                            ></NavSearch>
                        </CSSTransition>
                        <i className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe62d;</i>

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
    handleFocus() {
        this.setState(() => {
            return {
                focused: true,
            }
        })
    }
    handleBlur() {
        this.setState(() => {
            return {
                focused: false,
            }
        })
    }
}
