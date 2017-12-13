import React, { Component } from 'react';
import {createPortal} from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Form, Input, Button, Icon } from 'antd';
import PropTypes from 'prop-types';
import './Drawer.scss' ;


class Drawer extends Component {
  constructor(props){
    super(props);
    // 创建div,用户渲染抽屉
    const doc = window.document;
    this.node = doc.createElement('div');
    this.node.id = 'react-amazing-drawer';
    doc.body.appendChild(this.node);
  }

  /**
   * 关闭时的回调
   * @param e
   */
  onClose = (e) => {
    console.log('close');
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
    const { visible, width, duration, direction } = this.props;
    return createPortal(
      <ReactCSSTransitionGroup
        transitionName="react-amazing-drawer"
        component="div"
        transitionEnterTimeout={duration}
        transitionLeaveTimeout={duration}
        transitionAppear={true}
        transitionAppearTimeout={duration}
      >
        {
          visible ? <div
            onClick={this.onClose}
            key="react-amazing-drawer"
            className="react-amazing-drawer-mask"
          >
            <div className={`content ${direction.toLowerCase()}`} onClick={this.preventClick}>
              {this.props.children}
            </div>
          </div> : ''
        }
      </ReactCSSTransitionGroup>
      , this.node)
  }
}

Drawer.propTypes = {
  visible : PropTypes.bool.isRequired, // 控制抽屉的打开/关闭😀
  mask: PropTypes.bool, // 是否显示遮罩
  onClose: PropTypes.func, // 关闭时的回调😀
  onOpen: PropTypes.func, // 打开时的回调
  width: PropTypes.number, // 宽度
  duration: PropTypes.number, // 打开/关闭时间 🌀
  maskStyle: PropTypes.any, // 给遮罩层的样式
  maskClass: PropTypes.string, // 给遮罩层的类名
  contentClass: PropTypes.string, // 给内容层的类名
  okText: PropTypes.string, // 确定按钮文字
  okButton: PropTypes.bool, // 是否显示确定按钮
  cancelButton: PropTypes.bool, // 是否显示取消按钮
  closable:PropTypes.bool, // 是都显示右上角的关闭图标
  direction: PropTypes.string, // 打开方向，默认RIGHT[LEFT/TOP/BOTTOM] 😀
  proxyProps: PropTypes.bool, // 属性代理【暂时不用】
  scroll: PropTypes.bool // 内容从超过容器高宽时是否显示滚动条
};

Drawer.defaultProps = {
  visible: false,
  mask: true,
  width: 600,
  duration: 500,
  direction: 'RIGHT'
}

export default Drawer;