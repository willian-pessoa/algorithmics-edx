import * as React from 'react';

export interface IFlexCenterProps {
  children: React.ReactNode;
  className?: string;
}

export default function FlexCenter({ children, className }: IFlexCenterProps) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      {children}
    </div>
  );
}
