import React from 'react';
import { Carousel, Accordion} from 'antd-mobile';
import { Flex,  Button, WingBlank, WhiteSpace } from 'antd-mobile';
import { List} from 'antd-mobile';

import FunGrid from '../FunGrid';

import { createForm } from 'rc-form';
import { connect } from 'react-redux';

import "../style/Home.less";

let Home = React.createClass({

    contextTypes: {
        router: React.PropTypes.object
    },
    render() {
        return (
            <div>
                <div className="Home-ad">
                    <img src="../images/banner.jpg" alt=""/>
                </div>

                <FunGrid />

                <List className="home-shortcut-list">
                    <List.Body>

                        <List.Item
                            thumb="../images/icon/line.png" arrow="horizontal" onClick={() =>{this.goTo("line")} }>
                            我的线路</List.Item>

                        <List.Item thumb="../images/icon/click.png" arrow="horizontal"
                                   onClick={() =>{this.goTo("booking")} }>
                            马上约车</List.Item>

                        <List.Item thumb="../images/icon/account.png" arrow="horizontal"
                                   onClick={() =>{this.goTo("orders")} }>
                            账户订单</List.Item>
                        <List.Item>

                        </List.Item>
                    </List.Body>
                </List>

            </div>);
    },
    onMoreClick(){
        //this.context.router.push(link);
    },
    goTo(link){
        this.context.router.push(link);
    },
})

Home = createForm()(Home);
function select(state) {
    return {
        loginUser: state.login
    };
}
export default connect(select)(Home);
