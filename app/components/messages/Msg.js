import React from 'react';
import {Button,Icon,SegmentedControl, List, ListView,WhiteSpace, Card} from 'antd-mobile';
import { msgDetail } from '../../actions/actions';

import { createForm } from 'rc-form';
import { connect } from 'react-redux';

import  '../style/Rent.less';

import  '../style/Msg.less';

import {MsgList} from '../data/MsgList';


let index = MsgList.length - 1;

const NUM_ROWS = 10;
let pageIndex = 0;

let Msg = React.createClass({

    contextTypes: {
        router: React.PropTypes.object
    },

    getInitialState() {
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });

        this.genData = (pIndex = 0) => {
            const dataBlob = {};
            for (let i = 0; i < NUM_ROWS; i++) {
                const ii = pIndex * NUM_ROWS + i;
                dataBlob[`${ii}`] = `row - ${ii}`;
            }
            return dataBlob;
        };
        this.rData = {};
        return {
            dataSource: dataSource.cloneWithRows(this.genData()),
            isLoading: false,
        };
    },

    onChange(e) {
        let selectedIndex = e.nativeEvent.selectedSegmentIndex;
        let link = "torent";
        if (selectedIndex > 0) {
            link = "rentto";
        }
        this.context.router.push(link);
    },

    renderCardList(){

    },

    render() {

        let link = window.location.hash.match(/(\w+)/g);

        let selected_index = 0;

        if (link && link[0] === "find2") {
            selected_index = 1;
        }

        const separator = (sectionID, rowID) => (
            <div key={`${sectionID}-${rowID}`} style={{
                    backgroundColor: '#eee',
                    height: 8,
                    borderTop: '1px solid #ECECED',
                    borderBottom: '1px solid #ECECED',
                  }}>
            </div>
        );

        const row = (rowData, sectionID, rowID) => {
            if (index < 0) {
                index = MsgList.length - 1;
            }
            const obj = MsgList[index--];

            obj['style'] = "rent-item-img msg-icon ";

            if (obj['img'] == "check-circle-o") {
                obj['style'] += " msg-icon-green";
            }
            return (
                <div key={rowID} className="rent-item">
                    <div className="rent-item-box">
                        <Icon type={obj.img} className={obj.style}/>
                        <div className="rent-info-box">
                            <p className="rent-item-tile">{obj.title}</p>
                            <div className="btn-detail" onClick={() =>{

                                const { dispatch } = this.props;
                                dispatch(msgDetail(obj));
                                this.context.router.push("msgdetail");

                            }}>查看详情</div>
                            <p className="rent-item-des">{obj.des}</p>
                        </div>
                    </div>
                </div>);
        };


        return (
            <div className="rent-page">
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={row}
                    renderSeparator={separator}
                    pageSize={4}
                    scrollRenderAheadDistance={500}
                    scrollEventThrottle={20}
                    onScroll={() => { console.log('scroll'); }}
                    useBodyScroll
                    onEndReached={this.onEndReached}
                    onEndReachedThreshold={10}/>

            </div>);
    },
    toDetail () {

    }

});

Msg = createForm()(Msg);

export default connect()(Msg);
