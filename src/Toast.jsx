import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './styles/index.less'

const CLASS_NAME = 'er-toast'
const DEFAULT_CONTENT = 'HELLO TOAST'
const POS_TOP = 'top'
const POS_CENTER = 'center'
const POS_BOTTOM = 'bottom'
const VALID_POSITIONS = [POS_TOP, POS_CENTER, POS_BOTTOM]

class Toast extends Component {
  render() {
    let { position, className, style, children, ...others } = this.props
    let positionStyle = this.createPositionStyle(position)

    className = classNames(CLASS_NAME, className)
    style = style ? Object.assign(positionStyle, style) : positionStyle

    return (
      <div className={className} style={style} {...others}>
        {children}
      </div>
    )
  }

  createPositionStyle(position) {
    let style = { left: '50%' }

    switch (position) {
      case POS_TOP:
        style.top = '0'
        style.transform = 'translateX(-50%)'
        break
      case POS_CENTER:
        style.top = '50%'
        style.transform = 'translate(-50%,-50%)'
        break
      case POS_BOTTOM:
        style.bottom = '0'
        style.transform = 'translateX(-50%)'
        break
      default:
        throw new Error(`The "props.position" is invalid. valid props.position:["${VALID_POSITIONS.join('","')}"]`)
    }

    return style
  }
}

Toast.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  position: PropTypes.oneOf(VALID_POSITIONS).isRequired,
  children: PropTypes.node.isRequired
}

Toast.defaultProps = {
  position:       POS_BOTTOM,
  children:       DEFAULT_CONTENT
}

export default Toast
