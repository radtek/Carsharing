import React from 'react';
import {Button,Icon,SegmentedControl, List, WhiteSpace, Card} from 'antd-mobile';

import  '../style/Find.less';
import {FindList} from '../data/FindList';

export default React.createClass({

    contextTypes: {
        router: React.PropTypes.object
    },

    onChange(e) {
        let selectedIndex = e.nativeEvent.selectedSegmentIndex;
        let link = "passenger";
        if (selectedIndex > 0) {
            link = "driver";
        }
        this.context.router.push(link);
    },

    renderCardList(){

        let cards = [];

        let btn_driver = "";

        if (this.props['data-driver']) {
            btn_driver = ( <div className="apply-order">申请接单</div>);
        }


        for (let i = 0; i < FindList.length; i++) {
            let card = FindList[i];

            let img_url = "../images/icon/" + card.head_img + ".png";
            let extra_str = card.created + " " + card.car_type;
            let key = (i + 1) + "_card"

            cards.push(
                <Card className="travel-card" key={key}>
                    <Card.Header title={card.name}
                                 thumb={img_url}
                                 extra={<span>
                    <span className="card-date">{card.book_date}</span>
                    <span className="card-time">{card.distance}km</span>
                  </span>}>

                    </Card.Header>

                    <Card.Body>
                        <div className="card-addr card-from">
                            <Icon type="play-circle-o"/>{card.from} <span className="card-city">{card.from_zone}</span>
                        </div>
                        <div className="card-addr card-to">
                            <Icon type="check-circle-o"/>{card.to} <span className="card-city">{card.to_zone} </span>
                        </div>

                        {btn_driver}
                    </Card.Body>

                    <Card.Footer content={extra_str} extra={<div className="card-flag">{card.flag}</div>}/>
                </Card>);
        }

        return cards;
    },

    render() {

        let cards = this.renderCardList();


        let link = window.location.hash.match(/(\w+)/g);

        let selected_index = 0;

        if (link && link[0] === "driver") {
            selected_index = 1;
        }

        return (
            <div className="find-page">

                <List >
                    <List.Body>
                        <WhiteSpace size={8}/>
                        <SegmentedControl values={['我是乘客', '我是司机']} onChange={this.onChange}
                                          selectedIndex={selected_index}/>
                        <WhiteSpace size={4}/>
                    </List.Body>
                </List>

                {cards}

            </div>);
    }
});
