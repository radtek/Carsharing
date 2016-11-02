import React from 'react';
import { Result } from 'antd-mobile';

import  '../style/NotFound.less';


export default React.createClass({

  contextTypes: {
    router: React.PropTypes.object
  },

  render() {      
    return (<div className="other">
      <Result
        imgUrl="../images/car.jpg"
        title="您的路线已智能推送给58个司机，司机会联系您，请稍等..."
        buttonTxt="返回"
        buttonClick={() => this.context.router.goBack()}
      />
  </div>);
    },
});
