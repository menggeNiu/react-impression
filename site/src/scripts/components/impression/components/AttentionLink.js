import classnames from 'classnames';
import React, { PropTypes } from 'react';

/**
 * AttentionLink 组件
 */
const propTypes = {
    //自定义样式
    className: PropTypes.string,
    //超链接
    href: PropTypes.string
};

function AttentionLink({ href, className, children, ...others }) {
    return (
        <a
            {...others}
            href={href}
            className={classnames('attention-link', className)}
        >
            {children}
        </a>
    );
}

AttentionLink.propTypes = propTypes;

export default AttentionLink;
