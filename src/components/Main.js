require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

//获取图片相关的数据
/*let imageDatas = require('../data/imageDatas.json');

//将图片名信息转换成图片URL路径信息
imageDatas = imageDatas.map((item)=>{
	item.imageURL = '../images/' + item.fileName;
	return item;
})*/

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">
        </section>
        <nav className="controller-nav">
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
