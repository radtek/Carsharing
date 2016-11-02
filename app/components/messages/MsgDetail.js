import React from 'react';
import {Button,Icon,SegmentedControl, List, WhiteSpace, Card} from 'antd-mobile';
import { createForm } from 'rc-form';
import { connect } from 'react-redux';

import  '../style/Msg.less';
import {FindList} from '../data/OrderList';

let MsgDetail = React.createClass({

    contextTypes: {
        router: React.PropTypes.object
    },
    render() {

        let cards = this.props.message;
        if(cards == null){
            this.context.router.push("msg");
        }

        let card = cards[0] ? cards[cards.length - 1] : null;
        let message = card.message;


        return (
            <div className="find-page">
                <list>
                    <Card className="travel-card">
                        <Card.Header title={message.title}>
                        </Card.Header>

                        <Card.Body className="msg-card-body">
                            <span className="msg-des">{message.des}</span>
                        </Card.Body>

                        <Card.Footer content={<span className="msg-status">消息状态: 已确认</span>}
                                     extra={<div className="card-flag-msg" onClick={()=>{

                                                this.context.router.push("msg");

                                            }}>确认</div>}/>
                    </Card>
                </list>
            </div>);
    }
});
MsgDetail = createForm()(MsgDetail);

function select(state) {
    return {
        message: (state.message ? state.message : null)
    };
}
export default connect(select)(MsgDetail);
