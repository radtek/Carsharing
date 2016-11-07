import React from 'react';

import provinceData from '../../data/Cities';
import { travelFrom } from '../../../actions/actions';
import { ListView, List, SearchBar } from 'antd-mobile';
import { createForm } from 'rc-form';
import { connect } from 'react-redux';

import  '../../style/Home.less';

const { Item } = List;

let From = React.createClass({
    contextTypes: {
        router: React.PropTypes.object
    },
    getInitialState() {
        const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
        const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

        const dataSource = new ListView.DataSource({
            getRowData,
            getSectionHeaderData: getSectionData,
            rowHasChanged: (row1, row2) => row1 !== row2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        });

        this.createDs = (ds, province) => {
            const dataBlob = {};
            const sectionIDs = [];
            const rowIDs = [];
            Object.keys(province).forEach((item, index) => {
                sectionIDs.push(item);
                dataBlob[item] = item;
                rowIDs[index] = [];

                province[item].forEach(jj => {
                    rowIDs[index].push(jj.value);
                    dataBlob[jj.value] = jj.label;
                });
            });
            return ds.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs);
        };
        return {
            inputValue: '',
            dataSource: this.createDs(dataSource, provinceData),
            headerPressCount: 0,
        };
    },
    onSearch(val) {
        const pd = {...provinceData};
        Object.keys(pd).forEach((item) => {
            pd[item] = pd[item].filter(jj => jj.spell.toLocaleLowerCase().indexOf(val) > -1);
        });
        this.setState({
            inputValue: val,
            dataSource: this.createDs(this.state.dataSource, pd),
        });
    },

    render() {

        let  now_location = "上海";

        return (
            <div className="city-div">
                <div>
                    <SearchBar
                        value={this.state.inputValue}
                        placeholder="搜索"
                        onChange={this.onSearch}
                        onClear={() => { console.log('onClear'); }}
                        onCancel={() => { console.log('onCancel'); }}
                    />
                </div>
                <ListView.IndexedList
                    dataSource={this.state.dataSource}
                    renderHeader={() =>
                     <div>
                        <div className="from-loc-hd">
                            定位城市
                        </div>
                        <div className="from-loc-ct">
                            当前位置:&nbsp;&nbsp;<span onClick={()=>this.selectOneCity(now_location)}>{now_location}</span>
                        </div>
                     </div>
                    }
                    renderFooter={() => {}}
                    renderSectionHeader={(sectionData) => (<div>{sectionData}</div>)}
                    renderRow={(rowData) => (<Item onClick={()=>this.selectOneCity(rowData)}>{rowData}</Item>)}
                    className="fortest"
                    stickyHeader
                    stickyProps={{
                              stickyStyle: { zIndex: 999 },
                            }}
                    quickSearchBarStyle={{
                                      top: 85,
                                    }}
                    delayTime={10}
                    delayActivityIndicator={<div style={{ padding: 25, textAlign: 'center' }}>加载城市中...</div>}
                />
            </div>);
    },
    selectOneCity(data){
        const { dispatch } = this.props;
        console.log("-------选择城市-------");
        console.log(data);
        dispatch(travelFrom({address:data,location:"121.425908,31.183765",name:"city"}));
        console.log(this.context.router);
        this.context.router.goBack();
    }
});

From = createForm()(From);

export default connect()(From);