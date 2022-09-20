import React, { PropsWithChildren } from 'react';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({ children, onClick, ...restProps }: PropsWithChildren<ButtonProps>) {
    return (
        <button {...restProps} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
