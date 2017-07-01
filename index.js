import React, { Component } from 'react';

export default class WheelNotOutSide extends Component {
  constructor(props) {
    super(props);
    this.emitWheel = this.emitWheel.bind(this);
  }

  emitWheel(e) {
    const { deltaY } = e;
    const { scrollTop, scrollHeight, offsetHeight } = this.target;

    const delta = deltaY === 0 ? deltaX : deltaY;

    if (
      (scrollTop === 0 && delta < 0) ||
      (scrollTop >= scrollHeight - offsetHeight && delta > 0)
    ) {
      e.preventDefault();
    }
  }

  render() {
    const Children = React.cloneElement(this.props.children, {
      ref: target => {
        this.target = target;
      },
      onWheel: this.emitWheel
    });

    return Children;
  }
}
