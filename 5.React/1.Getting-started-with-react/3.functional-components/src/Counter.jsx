import { useState } from "react";

const Counter = () =>{
    const [count, setCount] = useState(0);
	return (
		<div>
			<button onClick={() => setCount(count + 1)}>
				Increment!
			</button>
            <button onClick={() => setCount(count - 1)}>
				Decrement!
			</button>
			<h1>{count}</h1>
		</div>
	);
};
export default Counter;