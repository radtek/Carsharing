import React from 'react';
import {Button, List ,DatePicker,Picker} from 'antd-mobile';
import moment from 'moment';
import 'moment/locale/zh-cn';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';
import  '../../style/Line.less';
import { nowLocation } from '../../common/Config';

import TravelDays from '../../data/TravelDays';
import PeopleNum from '../../data/PeopleNum';

const zhNow = moment().locale('zh-cn').utcOffset(8);
const initDate = moment('2016-11-11 +0800', 'YYYY-MM-DD Z').utcOffset(8);
const maxDate = moment('2018-12-03 +0800', 'YYYY-MM-DD Z').utcOffset(8);
const minDate = moment('1970-08-06 +0800', 'YYYY-MM-DD Z').utcOffset(8);

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

        // 获取 传递来的 参数
        const getFieldProps = this.props['getFieldProps'];
        let is_out = this.props['go-out'] ? this.props['go-out'] : false;

        // 初始化 页面值
        let addr_key1 = (is_out ? "出发城市" : "出发地点");
        let addr_key2 = (is_out ? "旅游城市" : "市区景点");
        let addr_val1 = this.props['data-addr-val1'] || "点击设置";
        let addr_val2 = this.props['data-addr-val2'] || "点击设置";
        let booking_time = this.props['data-booking-time'] || "9:45(现在)";

        // 是否 市外旅游
        let days = is_out ? (
            <Picker data={TravelDays} cols={1}
                {...getFieldProps('travelDay')}
                    className="forss"
                    title="共几天">
                <List.Item thumb="../images/icon/days.png" arrow="horizontal">
                    共几天：</List.Item>
            </Picker>

        ) : "";
        // 当前位置  所在 市
        let location = is_out ? "" : (
            <List.Item thumb="../images/icon/home_map.png" extra={<span className="init-lct">{nowLocation}</span>}>
                当前位置:
            </List.Item>
        );

        let fromURL = is_out ? "cityfrom" : "travelfrom";
        let toURL = is_out ? "scenicout" : "scenic";

        return (
            <div className="line-page">
                <List >
                    <List.Body>

                        {location}

                        <List.Item thumb="../images/icon/icon_start.png" arrow="horizontal"
                                   extra={<span className="ly-extra">{addr_val1}</span>}
                                   onClick={() =>{this.goTo(fromURL)} }>
                            {addr_key1}：
                        </List.Item>

                        <List.Item thumb="../images/icon/icon_end.png" arrow="horizontal"
                                   extra={<span className="ly-extra">{addr_val2}</span>}
                                   onClick={() =>{this.goTo(toURL)} }>
                            {addr_key2}：
                        </List.Item>
                    </List.Body>

                    <List.Body>

                        <DatePicker
                            mode="date"
                            title="出发日期"
                            {...getFieldProps('travelTime', {
                                initialValue: initDate,
                            })}
                            minDate={minDate}>
                            <List.Item thumb="../images/icon/time.png" arrow="horizontal">出发日期：</List.Item>
                        </DatePicker>

                        <Picker data={PeopleNum} cols={1}
                            {...getFieldProps('peopleNum')}
                                className="forss"
                                title="共几人">
                            <List.Item thumb="../images/icon/mans.png" arrow="horizontal">
                                共几人：</List.Item>
                        </Picker>

                        {days}

                    </List.Body>
                </List>

                <Button className="btn-setting" type="primary" onClick={() => this.goTo("doing")}>约车</Button>
            </div>);
    },

    goTo(link){
        this.context.router.push(link);
    },
});
