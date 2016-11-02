import React from "react"
import ReactDOM from "react-dom"
import Core from "./core.js"
import Map from "./Map.js"
import Maker from "./Maker.js"


//更加经纬度设置定位点
class MapDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: 121.425725,
            lat: 31.184557,
            address: ""
        }
    }

    componentWillReceiveProps(next) {
        const {plugin, service} = next;
        // if (Object.getOwnPropertyNames(this.props.plugin).length === 0) {
        //     this.getLocation(plugin.Geolocation);
        // }
        //if (Object.getOwnPropertyNames(this.props.service).length === 0) {
        //this.getAddress(service.Geocoder);
        //}
    }

    render() {
        const {lng, lat, address} = this.state;
        const {plugin} = this.props;
        const makers = [
            {
                position: [lng, lat]
            },
            {
                position: [lng - 0.001, lat + 0.001]
            },
            {
                position: [lng + 0.001, lat - 0.0006]
            },
            {
                position: [lng - 0.0005, lat - 0.001]
            },

            {
                position: [lng - 0.0005, lat + 0.0015]
            },

            {
                position: [lng + 0.0005, lat + 0.0015]
            }
            , {
                position: [lng, lat + 0.001]
            }
        ]
        const cfg = {
            zoom: 17,
            resizeEnable: true,
            center: [lng, lat],
            islabel: true,
            maker: makers
        }
        return (
            <div id="demo_1">

                <Map
                    {...cfg}/>
            </div>
        )
    }

    onChangeLong() {
        this.setState({
            lng: Number(this.refs.d1_long.value)
        })
    }

    onChangeLat() {
        this.setState({
            lat: Number(this.refs.d1_lat.value)
        })
    }

    getLocation(geo) {
        geo.getCurrentPosition();
        window.AMap.event.addListener(geo, 'complete', (info) => {
            console.log("定位结果：", info);
            this.setState({
                lng: info.position.lng,
                lat: info.position.lat
            })
        });//返回定位信息
        window.AMap.event.addListener(geo, 'error', (info) => {
            console.error(info);
        });//返回定位出错信息
    }

}


//注册插件
MapDemo = Map.plugin([
    {
        name: "Geolocation",
        cfg: {
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            timeout: 10000,          //超过10秒后停止定位，默认：无穷大
            maximumAge: 0,           //定位结果缓存0毫秒，默认：0
            convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
            showButton: true,        //显示定位按钮，默认：true
            buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
            showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
            showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
            panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
            zoomToAccuracy: true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        }
    }
])(MapDemo);


// //注册服务
// MapDemo = Map.service([
//     {
//         name: "Geocoder",
//         cfg: {
//             radius: 1000,
//             extensions: "all"
//         }
//     }
// ])(MapDemo);

export default class MapView extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
                <MapDemo />
            </div>
        )
    }
}
