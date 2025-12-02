import { useEffect, useState } from 'react';

export interface IFibonacciNumberProps {}

export default function FibonacciNumber(props: IFibonacciNumberProps) {
  const [fibonacciNumber, setFibonacciNumber] = useState(20);
  const [interateNumber, setInterateNumber] = useState(0);
  const [arrPrevious, setArrPrevious] = useState([0, 1]);

  const handleChangeFibonacciNumber = (value: string) => {
    const numericValue = +value.replace(/\D/g, '');
    setFibonacciNumber(numericValue > 1000 ? 999 : numericValue);
  };

  const handleComputeFibonacciNumber = () => {
    setInterateNumber(2);
    setArrPrevious([0, 1]);
  };

  useEffect(() => {
    if (interateNumber < 2 || interateNumber > fibonacciNumber) return;

    const nextNumber =
      arrPrevious[interateNumber - 1] + arrPrevious[interateNumber - 2];

    setTimeout(() => {
      setArrPrevious((prev) => [...prev, nextNumber]);
      setInterateNumber((prev) => prev + 1);
    }, 150);
  }, [interateNumber]);

  return (
    <div className="flex flex-col bg-fuchsia-950 text-white w-screen h-screen overflow-y-auto">
      <div className="flex justify-center items-center w-full py-8">
        <p className="text-2xl font-bold">Fibonacci Number</p>
      </div>
      <div className="flex flex-col gap-4 flex-1">
        <div className="flex justify-center items-center gap-4">
          <div className="flex justify-center items-center gap-2">
            <span className="text-3xl">Fn =</span>
          </div>
          <input
            id="fibonacciNumber"
            className="
              p-2 border border-fuchsia-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500 text-center text-2xl w-20"
            onChange={(event) =>
              handleChangeFibonacciNumber(event.target.value)
            }
            value={fibonacciNumber}
          />
          <div>
            <button
              onClick={handleComputeFibonacciNumber}
              className="
                bg-fuchsia-700 
                hover:bg-fuchsia-600 
                py-2
                px-4
                rounded-lg
                cursor-pointer
              "
            >
              Calcular
            </button>
          </div>
        </div>
        <div className="flex flex-wrap border-2 p-4 border-fuchsia-700 rounded-lg m-4">
          {arrPrevious.map((value, index) => {
            const border =
              arrPrevious.length - 1 === index
                ? 'border-fuchsia-800 bg-fuchsia-900'
                : 'border-fuchsia-700';
            return (
              <div
                key={`${value}-${index}`}
                className={`${border} px-2 py-1 flex gap-2 border w-fit rounded-sm`}
              >
                <span>F{index}</span>
                <span>-</span>
                <span>{value}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
