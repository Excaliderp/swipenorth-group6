-----------------------------------------------
GIT-RUTIN:

Create branch and first branch commit:---------

$ git checkout -b BRANCHNAME  //[creates and change to new branch]
[write some code]
$ git add .
$ git commit -m "COMMIT MESSAGE"
$ git push --set-upstream origin BRANCHNAME 

List all branches and see current:---------
$ git branch

Change branch:---------
$ git checkout BRANCHNAME

(denna behöver uppdateras, osäker på i vilket steg vi använder den)
$ git pull —rebase 

Vid felmeddelanden i samband med push:-----------

Ej hantera just nu
$ git rebase —abort (för att inte hantera konflikten just nu) 

Om konflikt hanterats 
$ git add . 
$ git commit -m “fix conflicts with header”
$ git rebase —continue

Om push succesful
Kontrollera med $ git log

Om ej succesful 
Gör om ovan steg

git push (när allt är hanterat och OK) Meddela teamet att dom kan köra en git pull så att dom slipper hantera samma konflikt. 

-----------------------------------------------
G
Se alla commits (för att kunna restore. Kan göras i ny branch. ):
$ git reflog show 




This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
