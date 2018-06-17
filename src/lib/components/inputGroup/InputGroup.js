import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

/**
 * InputGroup组件.
 */
const InputGroup = ({ size, className, children, ...others }) => {
  let sizeClass = size ? `input-group-${size}` : null

  return (
    <div
      {...others}
      className={classnames('input-group', sizeClass, className)}
    >
      {children}
    </div>
  )
}

InputGroup.propTypes = {
  size: PropTypes.oneOf(['sm', 'lg']),
  className: PropTypes.string,
  children: PropTypes.any,
}

export default InputGroup
