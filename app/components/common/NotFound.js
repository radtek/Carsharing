import React from 'react';
import { Result } from 'antd-mobile';

import  '../style/NotFound.less';


export default React.createClass({

    contextTypes: {
        router: React.PropTypes.object
    },
    render() {
        return (
            <div className="other">
                <Result
                    imgUrl="../images/blank_img.png"
                    title="正在努力开发中, 敬请期待..."
                    buttonTxt="返回"
                    buttonClick={() => this.context.router.goBack()}
                />
            </div>);
    }
});
