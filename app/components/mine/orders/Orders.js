import React from 'react';
import {Button,Icon,SegmentedControl, List, WhiteSpace, Card} from 'antd-mobile';
const Brief = List.Item.Brief;

import  '../../style/Order.less';
import {OrderList} from '../../data/OrderList';

export default React.createClass({

    contextTypes: {
        router: React.PropTypes.object
    },

    onChange(e) {
        let selectedIndex = e.nativeEvent.selectedSegmentIndex;
        let link = "find";
        if (selectedIndex > 0) {
            link = "find2";
        }
        // this.context.router.push(link);
    },
    render() {
        let all = OrderList.length,
            topay = 0,
            payok = 0,
            cancel = 0;

        for (let i = 0; i < OrderList.length; i++) {
            let card = OrderList[i];
            if (card.status === "0") {
                topay = topay + 1;
            }
            if (card.status === "1") {
                payok = payok + 1;
            }
            if (card.status === "2") {
                cancel = cancel + 1;
            }
        }

        return (

            <div className="order-div">
                <List>
                    <List.Body className="order-btn">
                        <List.Item
                            onClick={() => {this.goTo("allorder")}}
                            thumb="../../images/icon/user.png" arrow="horizontal" extra={all}>
                            全部</List.Item>
                    </List.Body>

                    <List.Body className="order-btn">
                        <List.Item
                            onClick={() => {this.goTo("topayorder")}}
                            thumb="../../images/icon/home.png" arrow="horizontal" extra={topay}>
                            待付款</List.Item>
                    </List.Body>

                    <List.Body className="order-btn">
                        <List.Item
                            onClick={() => {this.goTo("orderok")}}
                            thumb="../../images/icon/auth.png" arrow="horizontal" extra={payok}>
                            已付款</List.Item>
                    </List.Body>

                    <List.Body>
                        <List.Item
                            onClick={() => {this.goTo("ordercancel")}}
                            thumb="../images/icon/time.png" arrow="horizontal" extra={cancel}>
                            已取消</List.Item>
                    </List.Body>

                </List>

            </div>);

    },
    goTo(link){
        this.context.router.push(link);
    }
});
