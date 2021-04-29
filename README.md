# use-scoped

[![npm version](https://img.shields.io/npm/v/use-scoped?style=flat-square)](https://www.npmjs.com/package/use-scoped) [![npm bundle size](https://img.shields.io/bundlephobia/minzip/use-scoped?style=flat-square)](https://bundlephobia.com/result?p=use-scoped) [![build status](https://img.shields.io/github/workflow/status/betula/use-scoped/Tests?style=flat-square)](https://github.com/betula/use-scoped/actions?workflow=Tests) [![code coverage](https://img.shields.io/coveralls/github/betula/use-scoped?style=flat-square)](https://coveralls.io/github/betula/use-scoped) [![typescript supported](https://img.shields.io/npm/types/typescript?style=flat-square)](https://github.com/betula/use-scoped)

Easy hooks scoping for React

```javascript
import React, { useState, useCallback } from 'react';
import { useScoped, Scope } from 'use-scoped';

const useCounter = (initial = 0) => {
  const [count, setCount] = useState(initial);
  useEffect(() => setCount(initial), [initial]);

  const inc = useCallback(() => setCount(c => c + 1), []);
  const dec = useCallback(() => setCount(c => c - 1), []);
  return {
    count,
    inc,
    dec
  };
};

const useScopedCounter = () => useScoped(useCounter);

const Count = () => {
  const { count } = useScopedCounter();
  return <p>{count}</p>;
};

const Buttons = () => {
  const { inc, dec } = useScopedCounter();
  return (
    <>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </>
  );
};

const App = () => (
  <Scope initial={0}>
    <Count />
    <Buttons />
    <Count />
    <Buttons />
  </Scope>
);

const Root = () => (
  <>
    <App />
    <App />
  </>
)

export default Root;
```

If you found some bug or want to propose improvement please [make an Issue](https://github.com/betula/use-scoped/issues/new). I would be happy for your help to make It better! :wink:

### Install

```bash
npm install use-scoped
# or
yarn add use-scoped
```

Enjoy and happy coding!
