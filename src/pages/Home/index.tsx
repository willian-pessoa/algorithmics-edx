import { Link } from 'wouter';
import { MENU_ITEMS } from './const/menuItems';

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <div className="bg-fuchsia-950 text-white w-[100vw] h-[100vh]">
      <div className="flex justify-center items-center w-full py-8">
        <p className="text-2xl font-bold">Algorithmic Design and Techniques</p>
      </div>
      <div className="p-8 flex flex-wrap">
        {MENU_ITEMS.map((item) => (
          <Link href={item.toPath}>
            <div className="px-6 py-2 rounded-full bg-fuchsia-800 w-fit hover:bg-fuchsia-700">
              {item.label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
