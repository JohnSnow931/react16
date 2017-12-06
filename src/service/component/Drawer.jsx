import React, { Component } from 'react';
import {createPortal} from 'react-dom';
import { Form, Input, Button, Icon } from 'antd';
import PropTypes from 'prop-types';


class Drawer extends Component {
  constructor(props){
    super(props);
    // 创建div,用户渲染抽屉
    const doc = window.document;
    this.node = doc.createElement('div');
    doc.body.appendChild(this.node);
  }

  /**
   * 关闭时的回调
   * @param e
   */
  onClose = (e) => {
    if(typeof this.props.onClose === 'function'){
      this.props.onClose()
    }
  }
  /**
   * 阻止点击事件冒泡
   * @param e
   */
  preventClick = (e) => {
    // 阻止事件冒泡
    e.stopPropagation();
  }
  render(){
    const { visible, width } = this.props;
    const positionLeft = visible ? '0' : width;
    const opacity = visible ? '0.5' : '0';
    const display = visible ? 'block' : 'none';
    return createPortal(<div className="re-drawer" style={
      {
        height: '100%',
        width: '100%',
        background:`rgba(0, 0, 0, ${opacity})`,
        position:'fixed',
        top:0,
        left: 0,
        zIndex: 10000,
        transition: 'all 0.5s ease',
        overflow:'scroll',
        display
      }
    } onClick={this.onClose}>
      <div className="content" onClick={this.preventClick} style={{ backgroundColor: 'white', width: width, height:'100%', float:'right' }}>
        {this.props.children}
      </div>
    </div>, this.node)
  }
}

Drawer.propTypes = {
  visible : PropTypes.bool.isRequired, // 控制抽屉的打开/关闭
  mask: PropTypes.bool, // 是否显示遮罩
  onClose: PropTypes.func, // 关闭时的回调
  onOpen: PropTypes.func, // 打开时的回调
  width: PropTypes.number, // 宽度
  duration: PropTypes.number, // 打开/关闭时间
  maskStyle: PropTypes.any, // 给遮罩层的样式
  maskClass: PropTypes.string, // 给遮罩层的类名
  contentClass: PropTypes.string, // 给内容层的类名
  okText: PropTypes.string, // 确定按钮文字
  okButton: PropTypes.bool, // 是否显示确定按钮
  cancelButton: PropTypes.bool, // 是否显示取消按钮
  closable:PropTypes.bool, // 是都显示右上角的关闭图标
  direction: PropTypes.string, // 打开方向，默认RIGHT[LEFT/TOP/BOTTOM]
  proxyProps: PropTypes.bool, // 属性代理
  scroll: PropTypes.bool // 内容从超过容器高宽时是否显示滚动条
};

Drawer.defaultProps = {
  visible: false,
  mask: true,
  width: 600
}

export default Drawer;