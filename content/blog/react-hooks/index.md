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

Class based components reqiure the use of classes, hence

they may take more time to define. However, it is

always good to start with class components, i find,


As developers we must not forget that we are dealing with OOP.

It is always good to err on the side of more OOP than the

other way.






[https://react-hooks.org/]
