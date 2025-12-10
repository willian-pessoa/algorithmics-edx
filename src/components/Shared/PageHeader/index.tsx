import { Link } from 'wouter';

import FlexCenter from '../../Boxes/FlexCenter';

export interface IPageHeaderProps {
  title: string;
}

export default function PageHeader(props: IPageHeaderProps) {
  return (
    <FlexCenter className="w-full py-6 border-b border-fuchsia-900 mb-4">
      <Link
        href="/"
        className="absolute top-2 left-2 px-3 py-1 rounded-full bg-fuchsia-900"
      >
        Home
      </Link>
      <p className="text-2xl font-bold">{props.title}</p>
    </FlexCenter>
  );
}
