import React from 'react';
import {Button, List ,DatePicker} from 'antd-mobile';
import moment from 'moment';
import 'moment/locale/zh-cn';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';
import  '../../style/Line.less';

const zhNow = moment().locale('zh-cn').utcOffset(8);

export default React.createClass({

    contextTypes: {
        router: React.PropTypes.object
    },
    getInitialState() {
        return {
            date: zhNow,
        };
    },
    onChange(date) {
        // console.log('onChange', date);
        this.setState({
            date,
        });
    },

    render() {

        let addr_key1 = this.props['data-addr-key1'] || "出发地";
        let addr_key2 = this.props['data-addr-key2'] || "目的地";

        let addr_val1 = this.props['data-addr-val1'] || "点击设置";
        let addr_val2 = this.props['data-addr-val2'] || "点击设置";

        let booking_time = this.props['data-booking-time'] || "9:45(现在)";

        return (
            <div className="line-page">
                <List >
                    <List.Body>
                        <List.Item thumb="../images/icon/icon_start.png" arrow="horizontal" extra={addr_val1}
                                   onClick={() =>{this.goTo("maphome")} }>
                            {addr_key1}：
                        </List.Item>

                        <List.Item thumb="../images/icon/icon_end.png" arrow="horizontal" extra={addr_val2}
                                   onClick={() =>{this.goTo("mapoffice")} }>
                            {addr_key2}：
                        </List.Item>
                    </List.Body>
                </List>


                <List >
                    <List.Body>
                        <DatePicker className="forss"
                                    mode="datetime"
                                    title="出发时间"
                                    onChange={this.onChange}
                                    value={this.state.date}>
                            <List.Item thumb="../images/icon/time.png" arrow="horizontal">
                                出发时间：
                            </List.Item>
                        </DatePicker>


                    </List.Body>
                </List>

                <Button className="btn-setting" type="primary" onClick={() => this.goTo("doing")}>约车</Button>
            </div>);
    },

    goTo(link){
        this.context.router.push(link);
    },
});
