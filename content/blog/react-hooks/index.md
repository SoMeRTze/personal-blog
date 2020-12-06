---
title: React Hooks vs class based components
date: "2020-12-05T22:12:03.284Z"
description: "React Hooks vs class based components"
---


React Hooks are a new addition in React 16.8. They allow the 

use of state without writing a class.


Example:

```
// for example, when updating state for a counter function when calling onclick()

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


```

Class based components require the use of classes, hence

they may take more time to write. 


However, it is always good to start with class components.


As developers we must not forget that we are dealing with

classes and objects.


It is always good to err on the side of more OOP than the

other way.


With class based components, as soon as we make use of

a constructor, we know that there is a class that inherits

from a super class. 




For more on React Hooks: [https://react-hooks.org/]
