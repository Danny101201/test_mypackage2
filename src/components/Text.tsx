import React, { PropsWithChildren } from 'react';

interface TextProps extends React.HTMLAttributes<HTMLHeadingElement> {}

function Text({ children, ...props }: PropsWithChildren<TextProps>) {
    return <h1 {...props}>{children}</h1>;
}

export default Text;
