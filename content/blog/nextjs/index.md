---
title: NextJs
date: "2020-12-12T22:12:03.284Z"
description: "NextJs is a React framework that allows for both static & server side rendering, has TypeScript support, smart bundling, route pre-fetching, and more.
"
---



To scaffold a NextJs app, Type:

**npx create-next-app**


or


Manual setup, Type:

**Install next, react and react-dom** 

in your project folder:


Open package.json and add the following scripts:

```
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start"
}

```

Create a pages directory inside your project.

Populate ./pages/index.js with the following contents:

```
function HomePage() {
  return <div>Welcome to Next.js!</div>
}

export default HomePage

```

To start developing your application run npm run dev

Visit http://localhost:3000 to view your application.




source: https://nextjs.org/