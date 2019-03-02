import React, { Component } from 'react'
import { TopicsWrapper, TopicItem } from '../style'
import { connect } from 'react-redux'


class Topics extends Component {
    render() {
        const { list } = this.props;
        return (
            <TopicsWrapper>
                {
                    list.map((item, index) => {
                        return (
                            <TopicItem
                                key={item.get('id')}>
                                <img
                                    className='topic-pic'
                                    src={item.get('imgUrl')} />
                                {item.get('title')}
                            </TopicItem>
                        )
                    })
                }
            </TopicsWrapper>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    list: state.getIn(['home', 'topicList']),
})



export default connect(mapStateToProps, null)(Topics)

