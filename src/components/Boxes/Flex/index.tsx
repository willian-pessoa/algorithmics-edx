import * as React from 'react';

export interface IFlexProps {
  children: React.ReactNode;
  className?: string;
}

export default function Flex({ children, className }: IFlexProps) {
  return <div className={`flex ${className}`}>{children}</div>;
}
