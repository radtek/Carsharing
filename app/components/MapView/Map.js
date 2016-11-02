import React, {PropTypes} from "react"
import ReactDOM from "react-dom"
import Core from "./core.js"

import Maker from "./Maker.js"


const KEY = "2b40aa093de0a6e73f1e13b46baa69ac";
//38dbfac589d262c87bd3aaba70038538
class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            map_id: `amap_${Core.getRandom()}`,
            map: null,
            maker: []
        }
        //加载amap sdk
        Core.insert({
            name: "amap",
            src: "http://webapi.amap.com/maps?v=1.3&key={KEY}&callback=init"
        });

    }

    componentWillReceiveProps(nextProps) {


        /* //todo 合并、校验cfg
         const {map_id, maker} = this.state;
         //初始化地图
         console.log("initMap" , map_id, nextProps);
         const map = this.initMap(map_id, nextProps);
         console.log("initMap end");
         //重置定位点
         maker.map(m => {
         this.removeMaker(m);
         });
         this.initMaker(map, nextProps.maker);*/
    }

    componentDidMount() {
        window.init = () => {

            //初始化amap
            if (!window.AMap) {
                console.error("AMap is required");
                return;
            }

            const {map_id} = this.state;
            const {pluginCb, serviceCb} = this.context;

            //初始化地图
            const map = this.initMap(map_id, this.props);

            //初始化定位点
            const maker = this.initMaker(map, this.props.maker);

            var circle = new window.AMap.Circle({
                map: map,
                center: this.props.center,          //设置线覆盖物路径
                radius: 120,
                strokeColor: "#108ee9", //边框线颜色
                strokeOpacity: 0.3,       //边框线透明度
                strokeWeight: 3,        //边框线宽
                fillColor: "#108ee9", //填充色
                fillOpacity: 0.35//填充透明度
            });


            console.log(this.props.center);
            //初始化插件
            pluginCb.call(this, map);
            //初始化服务
            serviceCb.call(this, map);


        };
    }

    componentWillUnmount() {
        //卸载sdk
        Core.remove("amap");
        window.AMap = null;
    }

    render() {

        const {map_id} = this.state;
        const {width, height, maker} = this.props;
        //样式
        const styles = {
            style: {
                width,
                height
            }
        }

        return (
            <div
                id={map_id}
                {...styles}></div>
        )
    }

    //初始化地图
    initMap(id, cfg) {

        let _cfg = {};
        //获取纯cfg
        Object.getOwnPropertyNames(cfg).map(name => {
            if (Map.defaultProps[name] !== undefined) {
                _cfg[name] = cfg[name]
            }
        });
        const map = new AMap.Map(id, _cfg);
        this.setState({
            map: map
        });

        return map;
    }

    //初始化定位点
    initMaker(map, cfg) {
        //设置maker
        const maker = cfg.map(m => {
            const maker = new AMap.Marker(m);

            if (this.props.islabel) {
                maker.setLabel({
                    offset: new AMap.Pixel(-25, 35),
                    content: "沃尔沃租车点"
                });
            }

            maker.setMap(map);

            maker.on('click', function () {
                window.location.href = "/#/rentto";
            });

            return maker;
        });
        this.setState({
            maker: maker
        });
        return maker;
    }

    //删除定位点
    removeMaker(maker) {
        if (maker) {
            maker.setMap(null);
            maker = null;
        }
    }

}

Map.contextTypes = {
    pluginCb: PropTypes.func,
    serviceCb: PropTypes.func
}


Map.plugin = (plugins) => {
    return (Component) => React.createClass({
        getInitialState() {
            return {
                ist: {}
            }
        },
        propTypes: {
            pluginCb: PropTypes.func
        },
        childContextTypes: {
            pluginCb: PropTypes.func
        },
        getChildContext() {
            return {
                pluginCb: this._getPlugins
            }
        },
        render() {
            return <Component
                {...this.props}
                plugin={this.state.ist}/>
        },
        //获取已注册组件的实例
        _getPlugins(map) {
            const istObj = {};
            plugins.map(plugin => {
                map.plugin(`AMap.${plugin.name}`, () => {
                    const p = new window.AMap[plugin.name](plugin.cfg);
                    istObj[plugin.name] = p;
                })
            });
            this.setState({
                ist: istObj
            });
        }
    });
}

Map.service = (services) => {
    return (Component) => React.createClass({
        getInitialState() {
            return {
                ist: {}
            }
        },
        propTypes: {
            serviceCb: PropTypes.func
        },
        childContextTypes: {
            serviceCb: PropTypes.func
        },
        getChildContext() {
            return {
                serviceCb: this._getService
            }
        },
        render() {
            return <Component
                {...this.props}
                service={this.state.ist}/>
        },
        //获取已注册服务的实例
        _getService(map) {
            const istObj = {};
            var a = services.map(service => {
                window.AMap.service([`AMap.${service.name}`], () => {
                    const s = new window.AMap[service.name](service.cfg);
                    istObj[service.name] = s;
                })
            });
            this.setState({
                ist: istObj
            });
        }
    });
}


Map.defaultProps = {
    width: 424,
    height: 736,
    //缩放比例
    zoom: 17,
    islabel: false,
    //中心点
    center: [116.473188, 39.993253],
    //...
    maker: []
}


export default Map;