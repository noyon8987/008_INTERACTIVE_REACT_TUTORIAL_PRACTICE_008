import { useCallback, useMemo, useState } from "react";
import CounterTitle from "./CounterTitle";
import ShowCount from "./ShowCount";
import CounterButton from "./CounterButton";

export default function Counter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const handleIncrementBy1 = useCallback(() => {
    setCount1((prevCount) => prevCount + 1);
  }, []);

  const handleIncrementBy2 = useCallback(() => {
    setCount2((prevCount) => prevCount + 5);
  }, []);

  const handleIncrementBy3 = useCallback(() => {
    setCount3((prevCount) => prevCount + 3);
  }, []);

//! Importent part of this components

const isEven = useMemo(() => {
    let i = 0;
    while (i <= 1000000000) {
        i++;
    }
    return count1 % 2 == 0;
}, [count1]);

//! Importent part of this components

  return (
    <div>
      <CounterTitle />
      <ShowCount count={count1} title="Counter 1" />
      <CounterButton handleClick={handleIncrementBy1}>
        increment by one
      </CounterButton>

      <span>{isEven ? "Counter one is Even" : "Counter one is Odd"}</span>

      <ShowCount count={count2} title="Counter 2" />
      <CounterButton handleClick={handleIncrementBy2}>
        increment by five
      </CounterButton>

      <ShowCount count={count3} title="Counter 3" />
      <CounterButton handleClick={handleIncrementBy3}>
        increment by Three
      </CounterButton>
    </div>
  );
}
