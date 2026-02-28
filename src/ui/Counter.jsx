import { useEffect, useState } from "react";

const Counter = ({ end, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center">
      <h3 className="text-4xl font-bold text-purple-400">{count}+</h3>
      <p className="text-zinc-400 mt-2">{label}</p>
    </div>
  );
};

export default Counter;