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

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

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

## Note：
1. 使用next-auth 向 Next.js 应用程序添加身份验证；文档链接https://next-auth.js.org/getting-started/example
2. 使用headless ui 

## Lessons
1. Introduction
2. Install tools
3. Create Next App
4. Publish to GitHub

## List products
1. add data.js
2. add images
3. render products

## Create Product Details
1. create product page
2. create 3 columns
3. show image in first column
4. show product info in second column
5. show add to cart action on third column
6. add styles

## cart page
1. create cart.js
2. use context to get cart items
3. list items in cart items
4. redirect to cart screen after add to cart

## handle changing cart items
1. add select box for quantity
2. handle select box change

## Save cart items (保存购物车列表)
1. install js-cookie package（npm install js-cookie）
2. sava and retrieve cart items in cookies

## create Login Form
1. install react hook form
2. create input boxes
3. add login button

## connect to mongoDB
1. install mongoose
2. install mongodb or use mongodb atlas
3. save connection url in .env file
4. create db utils file
5. create sample users


## create Login Api
1. install next-auth
2. create nextauth.js
3. implement signin
4. use signin in login form

## Add User Menu
1. check user authentication
2. install headlessui
3. show user menu