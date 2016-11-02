import React from 'react';
import {Button, InputItem, Radio,NavBar, List,SearchBar,Modal} from 'antd-mobile';

import { fromAddress } from '../../../actions/actions';
import { center,radius,keywords,key } from '../../common/Config';
import { createForm } from 'rc-form';
import { connect } from 'react-redux';

import MapView  from '../../MapView/MapView2';
import  { Address } from '../../data/Address';

import  '../../style/Location.less';

const RadioItem = Radio.RadioItem;
const alert = Modal.alert;

let MapHome = React.createClass({
    contextTypes: {
        router: React.PropTypes.object
    },
    getInitialState() {
        window.removeEventListener("message", this.getMSG);
        return {
            value: 5,
        };
    },
    render()
    {
        const { getFieldProps } = this.props.form;

        // 高德地图 选址组件调用 URL
        let mapURl = 'https://m.amap.com/picker/?'
            + 'center=' + center
            + '&radius=' + radius
            + '&keywords=' + keywords
            + '&key=' + key;

        // console.log(mapURl);

        return (
            <div>
                <NavBar className="App-header" mode="light"
                        iconName="left" leftContent={<span className="select-back">返回</span>}
                        rightContent=""
                        onLeftClick={this.onGoBack}>
                    <span className="top-text">选择地点</span>
                </NavBar>

                <div className="loc-page">

                    <iframe id="map-iframe-id" className="iframe-map" src={mapURl} onLoad={this.searchClickOK}>
                    </iframe>
                </div>
            </div>);
    }
    ,
    onGoBack()
    {
        /**
         * 移除 对地图iframe 的监听
         */
        window.removeEventListener("message", this.getMSG);
        this.context.router.goBack();

    },
    searchClickOK()
    {
        /**
         *  添加 对地图iframe 的监听
         */
        let iframe = document.getElementById('map-iframe-id').contentWindow;
        iframe.postMessage('getAddress', 'https://m.amap.com/picker/');
        window.addEventListener("message", this.getMSG, false);
    },
    getMSG (e) {

        // console.log(e.data);

        this.showConfirm(e.data)
    },
    showConfirm(data) {

        const { dispatch } = this.props;
        let addr = data.address + " " + data.name

        alert('选中地址:', addr,
            [
                {text: '取消', onPress: () => console.log('cancel')},
                {
                    text: '确定', onPress: () => {

                        dispatch(fromAddress(data));
                        window.removeEventListener("message", this.getMSG);
                        this.context.router.goBack();
                    }
                }
            ]);
    }

});


MapHome = createForm()(MapHome);
export default connect()(MapHome);