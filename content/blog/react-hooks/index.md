---
title: React Hooks VS class based components
date: "2020-12-05T22:12:03.284Z"
description: "React Hooks VS class based components"
---


```

Hooks are a new addition in React 16.8. They allow the 

use of state without writing a class.


Example:
`
import React, { useState } from 'react';

function Counter() {

  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p> {counter} times</p>
      <button onClick={() => setCounter(counter + 1)}>
        Press
      </button>
    </div>
  );
}

`

[https://react-hooks.org/]
