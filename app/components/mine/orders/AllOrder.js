import React from 'react';
import {Button,Icon,SegmentedControl, List, WhiteSpace, Card} from 'antd-mobile';

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
        this.context.router.push(link);
    },
    renderCardList(){

        let cards = [];

        for (let i = 0; i < OrderList.length; i++) {
            let card = OrderList[i];

            let strSts = "";
            // 待付款的订单
            if (card.status === "0") {
                strSts = "待付款";

                card.statusStr = (<span>
                                      <span className="to-pay">去付款</span>
                                      <span className="cancel-order">取消订单</span>
                                  </span>);
            }
            // 已付款的订单
            if (card.status === "1") {
                strSts = "已付款";

                card.statusStr = (<span className="del-order">删除订单</span>);
            }
            // 已取消的订单
            if (card.status === "2") {
                strSts = "已取消";

                card.statusStr = (<span>
                                      <span className="order-again">再来订单</span>
                                      <span className="del-cel-order">删除订单</span>
                                  </span>);
            }

            let extra_str = card.created + " " + card.car_type;
            let key = (i + 1) + "_card"

            cards.push(
                <Card className="all-order-card" key={key}>
                    <Card.Header title={<span className="card-date">订单号:&nbsp;{card.no}</span>}

                                 extra={<span className="card-date">下单时间:&nbsp;{card.book_date}</span>}>
                    </Card.Header>

                    <Card.Body>
                        <div className="card-addr card-from">
                            <Icon type="play-circle-o"/>{card.from}
                            <span className="card-city">{card.from_zone}</span>
                        </div>
                        <div className="card-addr card-to">
                            <Icon type="check-circle-o"/>{card.to}
                            <span className="card-city">{card.to_zone} </span>
                        </div>
                        <div className="card-addr card-to">
                            <span>距离:&nbsp;<span className="order-warn">{card.distance}</span>&nbsp;km</span>
                            <div className="card-flg">{card.flag}</div>
                        </div>
                        <div className="card-addr card-to">
                            <span>金额:&nbsp;<span className="order-warn">{card.money}</span>&nbsp;元</span>
                        </div>
                    </Card.Body>

                    <Card.Footer content={ <div className="card-warning">{strSts}</div>}
                                 extra={card.statusStr}/>
                </Card>);
        }

        return cards;
    },

    render() {

        let cards = this.renderCardList();

        return (
            <div className="find-page">
                <list>
                    {cards}
                </list>
            </div>);
    }
});
