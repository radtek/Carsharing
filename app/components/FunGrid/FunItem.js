import React from 'react';
import { Flex, Link} from 'antd-mobile';

import  './grid.less';

export default React.createClass({

    contextTypes: {
        router: React.PropTypes.object
    },

    render() {

      let img_url = this.props['data-image'];
      let title = this.props.children;

      if(!title)
        title="";

      return(<Flex.Item>
            <div className="Fun-item" onClick={this.onLinkTo}>
              <img src={img_url}/>
              <h2>{title}</h2>
            </div>
        </Flex.Item>);
    },

    onLinkTo(){
        let to_url = this.props['data-to'];
        //console.log(to_url);
        this.context.router.push(to_url);
    }

    
});