import React from 'react';
import {Button,Icon,SegmentedControl, List, WhiteSpace, Card} from 'antd-mobile';
import { createForm } from 'rc-form';
import { connect } from 'react-redux';
import  '../../style/Home.less';
import Init from './Init';
import { nowLocation } from '../../common/Config';


let Travel = React.createClass({

    contextTypes: {
        router: React.PropTypes.object
    },
    onChange(e) {
        let selectedIndex = e.nativeEvent.selectedSegmentIndex;
        let link = "travel";
        if (selectedIndex > 0) {
            link = "travelout";
        }
        this.context.router.push(link);
    },
    render() {

        const { getFieldProps } = this.props.form;

        // 是否 是 市外 旅游
        let is_out = this.props['go-out'] ? this.props['go-out'] : false;

        // 出发地
        let h_objs = this.props.fromData;
        let h_obj = h_objs[0] ? h_objs[h_objs.length - 1].data : null;
        let h_addr = h_obj == null ? "" : h_obj.address;

        // 目的地
        let o_objs = this.props.toData;
        // console.log(o_objs);
        let o_obj = o_objs[0] ? o_objs[o_objs.length - 1].data : null;
        let o_addr = o_obj == null ? "" : o_obj.address;

        // 设置市内旅游 还是市内旅游
        let link = window.location.hash.match(/(\w+)/g);
        let selected_index = 0;

        if (link && link[0] === "travelout") {
            selected_index = 1;
        }
        return (
            <div className="travel-find-page">
                <list>
                    <List.Body>
                        <WhiteSpace size={8}/>
                        <SegmentedControl values={['市内游玩', '市外旅游']} onChange={this.onChange}
                                          selectedIndex={selected_index}/>
                        <WhiteSpace size={4}/>
                    </List.Body>


                    <Init
                        data-addr-key1="出发地" data-addr-val1={h_addr}
                        data-addr-key2="目的地" data-addr-val2={o_addr}
                        data-booking-time="2016-11-11 9:30"
                        getFieldProps={getFieldProps}
                        go-out={is_out}
                    />
                </list>
            </div>);
    }
});

Travel = createForm()(Travel);

function select(state) {
    return {
        fromData: (state.travelFrom ? state.travelFrom : null),
        toData: (state.travelTo ? state.travelTo : null)
    };
}
export default connect(select)(Travel);