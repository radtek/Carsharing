import Home from '../home/Home';
import Line from '../mine/myline/Line';

import Passenger from '../finds/Passenger';
import Driver from '../finds/Driver';

import Orders from '../mine/orders/Orders';
import AllOrder from '../mine/orders/AllOrder';
import TopayOrder from '../mine/orders/TopayOrder';
import OrderOk from '../mine/orders/OrderOk';
import OrderCancel from '../mine/orders/OrderCancel';

import Booking from '../mine/nowbooking/Booking';
import GoHome from '../home/gohome/GoHome';

import GoOffice from '../home/gooffice/GoOffice';

import Travel from '../home/gotravel/Travel';
import TravelOut from '../home/gotravel/TravelOut';
import CityFrom from '../home/gotravel/CityFrom';
import CityTo from '../home/gotravel/CityTo';
import SelectScenic from '../home/gotravel/SelectScenic';
import SelectScenicOut from '../home/gotravel/SelectScenicOut';

import ToRent from '../ToRent';
import RentTo from '../RentTo';

import Msg from '../messages/Msg';
import MsgDetail from '../messages/MsgDetail';

import Auth from '../mine/Auth';
import Cauth from '../mine/Cauth';

import Location from '../Location';
import Location2 from '../Location2';

import Mine from '../mine/Mine';
import Login from '../usermgt/Login';
import NotFound from '../common/NotFound';
import Doing from '../common/Doing';

import MapPage from '../home/MapPage';

import InfoManage from  '../usermgt/InfoManage';
import ManageDetail from '../usermgt/ManageDetail';

const Menus = [
    {title: "首页", url: "home", component: Home, icon: "home", selected: "home-blue"},
    {title: "发现", url: "passenger", component: Passenger, icon: "find", selected: "find-blue"},
    {title: "消息", url: "msg", component: Msg, icon: "msg", selected: "msg-blue"},
    {title: "我的", url: "mine", component: Mine, icon: "mine", selected: "mine-blue"},
    //{title:"", url:"login",   component:Login,  icon:"mine",  selected:"mine-blue" },

    {title: "消息详细", url: "msgdetail", component: MsgDetail},

    {title: "查找附件汽车", url: "map", component: MapPage},
    {title: "拼车路线", url: "line", component: Line},

    {title: "司机接单", url: "driver", component: Driver, icon: "find", selected: "find-blue"},

    {title: "账户订单", url: "orders", component: Orders},
    {title: "全部订单", url: "allorder", component: AllOrder},
    {title: "待付款订单", url: "topayorder", component: TopayOrder},
    {title: "已付款订单", url: "orderok", component: OrderOk},
    {title: "已取消订单", url: "ordercancel", component: OrderCancel},

    {title: "马上约车", url: "booking", component: Booking},
    {title: "实名认证", url: "cauth", component: Cauth},
    {title: "司机认证", url: "auth", component: Auth},

    {title: "个人资料", url: "infomanage", component: InfoManage},
    {title: "个人资料", url: "mgtdetail", component: ManageDetail},


    {title: "顺风旅游", url: "travel", component: Travel},
    {title: "顺风旅游", url: "travelout", component: TravelOut},
    {title: "选择出发地", url: "cityfrom", component: CityFrom},
    {title: "选择目的地", url: "cityto", component: CityTo},

    {title: "顺风旅游", url: "scenic", component: SelectScenic},
    {title: "顺风旅游", url: "scenicout", component: SelectScenicOut},

    {title: "上班约车", url: "gooffice", component: GoOffice},
    {title: "下班约车", url: "gohome", component: GoHome},
    /*
     {title:"选择地点",    url:"loc",       component:Location2  },
     {title:"选择地点",    url:"loc2",       component:Location2  },*/

    {title: "正在推送路线", url: "doing", component: Doing},
    {title: "预约确认", url: "rentto", component: RentTo},
    {title: "我要租车", url: "torent", component: ToRent},

];
const Test = [
    {title: "查找附件汽车", url: "map", component: MapPage},
];


export {Menus};