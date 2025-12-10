import * as React from 'react';

export interface IFlexColProps {
  children: React.ReactNode;
  className?: string;
}

export default function FlexCol({ children, className }: IFlexColProps) {
  return <div className={`flex flex-col ${className}`}>{children}</div>;
}
