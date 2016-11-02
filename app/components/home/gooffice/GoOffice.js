import React from 'react';
import { createForm } from 'rc-form';
import { connect } from 'react-redux';

import Booking from './Book';


let GoOffice = React.createClass({

    render() {
        // 家庭地址
        let h_objs = this.props.homeData;
        let h_obj = h_objs[0] ? h_objs[h_objs.length - 1].data : null;
        let h_addr = h_obj==null ? "" : h_obj.address;
        // 公司地址
        let o_objs = this.props.officeData;
        let o_obj = o_objs[0] ? o_objs[o_objs.length - 1].data : null;
        let o_addr = o_obj==null ? "" : o_obj.address;

        return (
            <Booking
                data-addr-key1="家里地址" data-addr-val1={h_addr}
                data-addr-key2="公司地址" data-addr-val2={o_addr}
                data-booking-time="明天 9:30"

            /> );
    }
});

GoOffice = createForm()(GoOffice);

function select(state) {
    return {
        homeData: (state.goOfficeHomeAddress ? state.goOfficeHomeAddress : null),
        officeData: (state.goOfficeOfficeAddress ? state.goOfficeOfficeAddress : null)
    };
}
export default connect(select)(GoOffice);