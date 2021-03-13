![](public/meta/ogimage.jpg)

# Hiroki Kobayashi Design Portfolio

Welcome to my portfolio repository.

* This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
* For css coding, [Material-ui](https://material-ui.com/) is used as a CSS-in-js modules.
* For development, no javascript files are allowed: you should write in typescript unless you have inevitable reason.
## Getting Started

In this project, yarn is utilized to manage packages.

On cloning the repository, run

```bash
yarn
```

to install dependencies into node_modules directory.

Then, for development build, run

```bash
yarn dev
```

to see the result on [http://localhost:3000](http://localhost:3000).

## Directories

- ``components`` to store definitions of component. Files should be categorized.
- ``lib`` to store custom libraries.
- ``pages`` to store page-defining tsx files.
- ``public`` to store image and typeface files. For example, you can access a file at ``public/img/example.png`` with the path ``"/img/example.png"`` in html attributes.
- ``styles`` to store global style data. Even though Material-ui is used, this website does not follow the rule of material design. Thus, some files are out of ``Theme`` provided by material-ui, such as colours data.

## How to add a work or blog:
- You can add a new work by (1) adding a new element into ``worksData`` array at ``components/works/data.ts``, (2) creating a new article file (which will be displayed at the top of individual page) in ``components-works-each`` directory, and (3) importing the article tsx file to ``components/works/each/index.ts`` and adding it to ``articleData`` object.
- You can add a new blog by (1) creating a new tsx file in ``components/blog/each`` directory to export the written content as an array of ``BlogContent``, and (2) adding the exported array to ``blogList`` object in ``components/blog/blogProvider.tsx``.

## Deployment on Vercel

This project is automatically deployed via Vercel, using Vercel extensions on GitHub. As pushed to master branch, the newest version will be deployed.
