import React from 'react';
import { createForm } from 'rc-form';
import { connect } from 'react-redux';
import {Button, List,DatePicker,Picker} from 'antd-mobile';

import moment from 'moment';
import 'moment/locale/zh-cn';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';
import  '../../style/Line.less';

import PeopleNum from '../../data/PeopleNum';

const zhNow = moment().locale('zh-cn').utcOffset(8);
const maxDate = moment('2018-12-03 +0800', 'YYYY-MM-DD Z').utcOffset(8);
const minDate = moment('2015-08-06 +0800', 'YYYY-MM-DD Z').utcOffset(8);

const maxTime = moment('22:00 +0800', 'HH:mm Z').utcOffset(8);
const minTime = moment('00:30 +0800', 'HH:mm Z').utcOffset(8);

const gmtNow = moment().utcOffset(0);


let Line = React.createClass({

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
        const { getFieldProps } = this.props.form;
        // 家庭地址
        let h_objs = this.props.homeData;
        let h_obj = h_objs[0] ? h_objs[h_objs.length - 1].data : null;
        let h_addr = h_obj == null ? "" : h_obj.address;
        // 公司地址
        let o_objs = this.props.officeData;
        let o_obj = o_objs[0] ? o_objs[o_objs.length - 1].data : null;
        let o_addr = o_obj == null ? "" : o_obj.address;

        return (
            <div className="line-page">
                <List >
                    <List.Body>
                        <List.Item
                            thumb="../images/icon/home_map.png"
                            arrow="horizontal"
                            onClick={() =>{this.goTo("mylinehome")} }
                            extra={h_addr}>

                            家庭地址</List.Item>
                        <List.Item thumb="../images/icon/end.png"
                                   arrow="horizontal"
                                   onClick={() =>{this.goTo("mylineoffice")} }
                                   extra={o_addr}>

                            公司地址</List.Item>
                    </List.Body>
                </List>


                <List >
                    <List.Body>

                        <DatePicker title="上班时间"
                                    mode="time"
                            {...getFieldProps('timeStart', {
                                initialValue: zhNow,
                            })}
                                    minDate={minTime}
                                    maxDate={maxTime}>
                            <List.Item thumb="../images/icon/icon_start.png" arrow="horizontal">
                                上班时间:</List.Item>
                        </DatePicker>

                        <DatePicker title="下班时间"
                                    mode="time"
                            {...getFieldProps('timeEnd', {
                                initialValue: zhNow,
                            })}
                                    minDate={minTime}
                                    maxDate={maxTime}>
                            <List.Item thumb="../images/icon/icon_end.png" arrow="horizontal">
                                下班时间:</List.Item>
                        </DatePicker>

                    </List.Body>
                </List>

                <List >
                    <List.Body>
                        <Picker data={PeopleNum} cols={1}
                            {...getFieldProps('number')}
                                className="forss" title="共几人">
                            <List.Item thumb="../images/icon/mans.png" arrow="horizontal" extra="1人">
                                共几人：</List.Item>
                        </Picker>
                    </List.Body>
                </List>

                <Button className="btn-setting" type="primary">设置</Button>
            </div>);
    },

    goTo(link){
        this.context.router.push(link);
    },
});

Line = createForm()(Line);

function select(state) {
    return {
        homeData: (state.myLineHomeAddress ? state.myLineHomeAddress : null),
        officeData: (state.myLineOfficeAddress ? state.myLineOfficeAddress : null)
    };
}
export default connect(select)(Line);
