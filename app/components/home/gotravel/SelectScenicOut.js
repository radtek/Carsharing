import React from 'react';
import {Button,Icon,SegmentedControl, List, WhiteSpace, Card,WingBlank,Flex} from 'antd-mobile';
import { createForm } from 'rc-form';
import { connect } from 'react-redux';
import { travelTo } from '../../../actions/actions';
import  '../../style/Home.less';
import { nowLocation } from '../../common/Config';
import {Pictures} from '../../data/ScenicPic';
import Init from './Init';


let SelectScenic = React.createClass({

    contextTypes: {
        router: React.PropTypes.object
    },
    onChange(e) {
        let selectedIndex = e.nativeEvent.selectedSegmentIndex;
        let link = "scenic";
        if (selectedIndex > 0) {
            link = "scenicout";
        }
        this.context.router.push(link);
    },
    render() {

        const { getFieldProps } = this.props.form;

        // 设置市内旅游 还是市内旅游
        let link = window.location.hash.match(/(\w+)/g);
        let selected_index = (link && link[0] === "scenicout") ? 1 : 0;
        // 获取图片信息
        let rowData1 = [],
            rowData2 = [],
            rowData3 = [],
            rowData4 = [],
            rowData5 = [];
        for (let i = Pictures.length; i > 0; i--) {
            let pic = Pictures[i - 1];
            let one = (
                <Flex.Item key={pic.number}>
                    <img src={"../images/scenic/" + pic.picture}/>
                    <div className="img-text" onClick={()=>this.goToTravel(pic.value)}>
                        {pic.value}
                    </div>
                </Flex.Item>
            );
            if (i > 27) {
                rowData1.push(one);
            } else if (i > 24) {
                rowData2.push(one);
            } else if (i > 21) {
                rowData3.push(one);
            } else if (i > 18) {
                rowData4.push(one);
            } else if (i > 15) {
                rowData5.push(one);
            }
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


                    <div className="flex-container">
                        <div className="scenic-loc-hd">
                            热门旅游城市
                        </div>
                        <WingBlank size="lg">
                            <Flex>
                                {rowData1}
                            </Flex>
                            <Flex>
                                {rowData2}
                            </Flex>
                            <Flex>
                                {rowData3}
                            </Flex>
                            <Flex>
                                {rowData4}
                            </Flex>
                            <Flex>
                                {rowData5}
                            </Flex>
                        </WingBlank>
                    </div>
                </list>
                <div className="line-page">
                    <List >
                        <List.Body>
                            <List.Item arrow="horizontal"
                                       onClick={() =>{this.goTo("cityto")}}>
                                <span className="scenic-else">其他旅游城市</span>
                            </List.Item>
                        </List.Body>
                        <div className="scenic-loc-hd"></div>
                    </List>
                </div>
            </div>);
    },
    goToTravel(data){

        const { dispatch } = this.props;
        dispatch(travelTo({address: data, location: "", name: ""}));
        this.context.router.push("travelout");
    },
    goTo(link){
        this.context.router.push(link);
    },
});

SelectScenic = createForm()(SelectScenic);

export default connect()(SelectScenic);