'use client';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, fetchJoke } from './api/store';

export default function Home() {

  const count = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const joke = useSelector(state => state.joke.value);
  const jokeStatus = useSelector(state => state.joke.status);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div style={{ textAlign: 'center', marginTop:'2rem'}}>
          <h1> Functional Redux Counter </h1>
          <h2>{count}</h2>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
        <div>
          <h2> Joke Generator </h2>
          <button onClick={() => dispatch(fetchJoke())}>{jokeStatus === 'loading' ? 'Loading...' : 'Fetch a Joke'}</button>
          { joke && <p style={{ marginTop: '1rem'}}>{joke}</p>}
        </div>
      </main>
    </div>
  );
}
