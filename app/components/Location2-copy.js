import React from 'react';
import {Button, InputItem, Radio,NavBar, List,SearchBar} from 'antd-mobile';
import { createForm } from 'rc-form';
import MapView  from './MapView/MapView2';
import  './style/Location.less';
import  { Address } from './data/Address';

const RadioItem = Radio.RadioItem;


let Location2 = React.createClass({
    contextTypes: {
        router: React.PropTypes.object
    },
    getInitialState() {
        return {
            value: 5,
        };
    },
    handleChange(e)
    {
        if (e.target.checked) {
            this.setState({
                value: 1,
            });
        }
        this.props.form.setFieldsValue({
            addr: '沃尔沃汽车技术公司',
        });
    },
    handleChange2(e)
    {
        if (e.target.checked) {
            this.setState({
                value: 2,
            });
        }
        this.props.form.setFieldsValue({
            addr: '沃尔沃销售(上海)有限公司',
        });
    },
    render()
    {
        var addrs = [];
        const { getFieldProps } = this.props.form;

        Address.forEach(function (value, key) {
            addrs.push(
                <RadioItem key={key} data-seed="logId">
                    {value.name}
                </RadioItem>);
        });

        return (
            <div>
                <NavBar className="App-header" mode="light"
                        iconName="left" leftContent="返回"
                        onLeftClick={this.onGoBack}>
                    选择地点
                </NavBar>

                <div className="loc-page">

                    <List>
                        <List.Body>
                            <InputItem {...getFieldProps('addr', {initialValue: '沃尔沃'})}

                                placeholder="输入地点" clear
                                extra={<span className="top-search" onClick={this.searchClick}>搜索</span>}>
                            </InputItem>

                            <List>
                                {addrs}
                            </List>

                            <MapView />


                        </List.Body>
                    </List>
                </div>
            </div>);
    }
    ,
    onGoBack()
    {
        this.context.router.goBack();
    },
    searchClick()
    {
        //let str = this.props.form.getFieldValue("addr");
        //window.location.href = "http://m.amap.com/around/?locations=121.425908,31.183765&keywords=" +
        //    str +
        //    "&defaultIndex=1&defaultView=map&searchRadius=5000&key=38dbfac589d262c87bd3aaba70038538";
    }
});


Location2 = createForm()(Location2);

export default Location2;