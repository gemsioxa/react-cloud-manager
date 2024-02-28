import React, { Fragment } from 'react';

export const baseProps = {
    xmlns  : 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    width  : 24,
    height : 24,
};

export default (children, optionsProps) => {
    return (props = {}) => {
        return (
            <Fragment>
                <svg {...baseProps} {...optionsProps} {...props}>
                    {children(props)}
                </svg>
            </Fragment>
        );
    };
};
