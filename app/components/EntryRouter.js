import React from 'react';
import { DatePicker, List } from 'antd-mobile';
import {Router, Route, IndexRedirect, Redirect, Link, hashHistory} from 'react-router';
import App from './App';
import Home from './home/Home';
import Line from './mine/myline/Line';
import MapPage from './home/MapPage';
import Location2 from './Location2';
import NotFound from './common/NotFound';
import  Login from './usermgt/Login';
import  Register from './usermgt/Register';
import  {Menus} from './data/Menu';
// 上班约车
import MapHome from './home/gooffice/MapHome';
import MapOffice from './home/gooffice/MapOffice';
// 下班约车
import HomeMap from './home/gohome/HomeMap';
import OfficeMap from './home/gohome/OfficeMap';
// 马上约车
import MapFrom from './mine/nowbooking/MapFrom';
import MapTo from './mine/nowbooking/MapTo';
// 我的路线
import MyLineHomeMap from './mine/myline/MyLineHomeMap';
import MyLineOfficeMap from './mine/myline/MyLineOfficeMap';

export default React.createClass({

    RoutesFromMenu(){

        let routers = [];
        for (let i = 0; i < Menus.length; i++) {
            let m = Menus[i];
            routers.push(<Route path={m.url} key={m.url+"_route"} component={m.component}/>);
        }
        return routers;
    },

    render() {

        let routers_from_menu = this.RoutesFromMenu();
        return (
            <Router history={hashHistory} key="main">

                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/mappage" component={MapPage}/>
                <Route path="/loc" component={Location2}/>
                <Route path="/loc2" component={Location2}/>

                <Route path="/mapoffice" component={MapOffice}/>
                <Route path="/maphome" component={MapHome}/>

                <Route path="/officemap" component={OfficeMap}/>
                <Route path="/homemap" component={HomeMap}/>

                <Route path="/mylinehome" component={MyLineHomeMap}/>
                <Route path="/mylineoffice" component={MyLineOfficeMap}/>

                <Route path="/mapfrom" component={MapFrom}/>
                <Route path="/mapto" component={MapTo}/>

                <Route path="/" component={App}>
                    <IndexRedirect to="login"/>

                    {routers_from_menu}

                    <Route path="/notfount" component={NotFound}/>
                    <Route path="/*" component={NotFound}>
                        <Redirect from="/*" to="/notfount"/>
                    </Route>
                </Route>


            </Router>);
    }
})

/*
 EntryApp = createForm()(EntryApp);
 export default EntryApp*/
