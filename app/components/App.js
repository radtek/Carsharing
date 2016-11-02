import React from 'react';
import { createForm } from 'rc-form';

import {TabBar, Icon, WhiteSpace, NavBar} from 'antd-mobile';

import  './style/App.less';
import  { Menus } from './data/Menu';

let App = React.createClass({

    contextTypes: {
        router: React.PropTypes.object
    },
    getInitialState() {
        return {
            selectedTab: 'home',
            notifCount: 10,
            hidden: false,
        };
    },
    renderContent() {
        return (
            <div className="App-body">
                {this.props.children}
            </div>
        );
    },
    renderMenu() {
        let menus = [];

        for (let i = 0; i < 4; i++) {
            let m = Menus[i];

            // App底部Tab显示形式 及 选中状态
            let selected_flg = (this.state.selectedTab === m.url)
            || (m.url === "passenger" && this.state.selectedTab === "driver")
            || (m.url === "msg" && this.state.selectedTab === "msgdetail") ? true : false;

            if (m.url == "msg") { // 选中消息,badge显示消息个数
                menus.push(
                    <TabBar.Item title={m.title} key={m.url} selected={selected_flg}
                                 icon={{uri:'../images/tabbar/'+m.icon+'.png'}}
                                 selectedIcon={{ uri: '../images/tabbar/'+m.selected+'.png' }}
                                 onPress={() => {this.onGoto(m.url)}}
                                 badge={this.state.notifCount>0?this.state.notifCount:undefined}>
                        {this.renderContent()}
                    </TabBar.Item>);

            } else {
                menus.push(
                    <TabBar.Item title={m.title} key={m.url} selected={selected_flg}
                                 icon={{uri:'../images/tabbar/'+m.icon+'.png'}}
                                 selectedIcon={{ uri: '../images/tabbar/'+m.selected+'.png' }}
                                 onPress={() => {this.onGoto(m.url)}}>
                        {this.renderContent()}
                    </TabBar.Item>);
            }
        }
        return menus;
    },
    render() {
        let curLink = this.getCurrentLink();
        this.state.selectedTab = curLink;

        //console.log(currlink);
        let PageTitle = "与沃通行";
        let needReturn = true;

        let curMenu = this.getMenu(curLink);
        if (curMenu) {
            if (curMenu.url !== "home")
                PageTitle = curMenu.title;

            if (curMenu.icon) {
                needReturn = false;
            }
        }
        let menus = this.renderMenu();

        return (
            <div>
                <NavBar className="App-header" mode="light"
                        iconName={needReturn?"left":false}
                        leftContent={<span className="select-back">{needReturn?"返回":""}</span>}
                        onLeftClick={this.onGoBack}>

                    <span className="select-back">{PageTitle}</span>
                </NavBar>

                <TabBar unselectedTintColor="#949494" barTintColor="#efefef" tintColor="#33A3F4"  hidden={this.state.hidden}>

                    {menus}

                </TabBar>
            </div>);
    },
    onGoBack(){
        this.context.router.goBack();
    },
    onGoto(link){
        this.context.router.push(link);
    },
    getCurrentLink(){
        let links = window.location.hash.match(/(\w+)/g);

        if (!links)
            return null;

        return links[0].toLowerCase();
    },
    getMenu(link){

        for (let i = 0; i < Menus.length; i++) {
            let m = Menus[i];

            if (link === m.url) {
                return m;
            }
        }
        return null;
    }
})

App = createForm()(App);
export default App;

//function select(state) {
//    return {
//        visibleTodos: state,
//        visibilityFilter: state.visibilityFilter
//    };
//}
//
//export default connect(select)(App);
