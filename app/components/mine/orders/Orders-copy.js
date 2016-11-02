import React from 'react';
import {Button,Icon,SegmentedControl, List, WhiteSpace, Card} from 'antd-mobile';

import  '../../style/Order.less';
import {FindList} from '../../data/OrderList';

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

        for (let i = 0; i < FindList.length; i++) {
            let card = FindList[i];

            if (card.status === "1") {
                card.statusStr = (<div className="apply-ok">已结算</div>);
            } else {
                card.statusStr = (<div className="apply-no">未结算</div>);
            }

            let img_url = "../images/icon/" + card.head_img + ".png";
            let extra_str = card.created + " " + card.car_type;
            let key = (i + 1) + "_card"

            cards.push(
                <Card className="travel-card" key={key}>
                    <Card.Header title={card.name}
                                 thumb={img_url}
                                 extra={<span className="card-date">{card.book_date}</span>}>
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
                            <span>距离:&nbsp;{card.distance}&nbsp;km</span>
                            <span className="card-price">金额:&nbsp;{card.money}&nbsp;元</span>
                        </div>

                        {card.statusStr}
                    </Card.Body>

                    <Card.Footer content={extra_str} extra={<div className="card-flag">{card.flag}</div>}/>
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
