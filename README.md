<p align="center">
  <img src="./.github/images/alpack-logo.png" alt="ALPack" width="400">
</p>

<h1 align="left">🚀 ALPack</h1>

> aka Apptension Light Pack ;)

<h2 align="center">Welcome to our all-in-one solution for building efficient web applications using some of the hottest technologies right now!</h2>

<p align="center">
  <a href="https://github.com/apptension/alpack">
    <img src="https://img.shields.io/github/v/release/apptension/alpack?style=for-the-badge" alt="Version">
  </a>

  <a href="https://github.com/apptension/alpack">
    <img src="https://img.shields.io/github/license/apptension/alpack?style=for-the-badge" alt="License">
  </a>

  <a href="https://twitter.com/apptension">
    <img src="https://img.shields.io/twitter/follow/apptension?style=for-the-badge&logo=twitter" alt="Follow Us on Twitter">
  </a>

  <a href="https://discord.apptension.com">
    <img src="https://img.shields.io/discord/1122849885335597088?style=for-the-badge&logo=discord" alt="Chat with us on Discord">
  </a>
</p>

## 🌟 **Features**

- **GraphQL API**: Cutting-edge data query and manipulation.
- **Authentication and Authorization**: Ensure your app's security.
- **Emails with React**: Dynamic email generation has never been easier.
- **Mantine UI**: A modern, responsive user interface built with Mantine.

## 🔧 **Tech Stack**

We've handpicked the following stack for optimal performance, scalability, and developer experience:

- **Frontend**: [React](https://github.com/facebook/react), [Next.js](https://nextjs.org/),
  [Apollo Client](https://github.com/apollographql/apollo-client), [Storybook](https://github.com/storybookjs/storybook),
  [Mantine](https://mantine.dev/), [React Email](https://react.email/)
- **Backend**: [Node.js](https://nodejs.org/), [TypeScript](https://www.typescriptlang.org/),
  [GraphQL](https://graphql.org/), [Apollo Server](https://github.com/apollographql/apollo-server),
  [TypeORM](https://typeorm.io/), [TypeGraphQL](https://typegraphql.com/), [NextAuth.js](https://next-auth.js.org/)
- **Database**: Postgres
- **Other tools**: [jest](https://github.com/jestjs/jest), [NX](https://github.com/nrwl/nx), [pnpm](https://pnpm.io/)

## 🏗 **Infrastructure**

- Seamless **Vercel Deployment**
- Streamlined CI/CD with **GitHub Actions** or **Bitbucket Pipelines**
- **Docker** integration for development environment

## 🚀 **Getting Started**

1. **Clone** the repository.
2. Generate **Google OAuth** credentials (default correct authorized URL should be set to: `http://localhost:3000/api/auth/callback/google`).
3. Prepare `.env` and `apps/app/.env` files based on the `.env.shared` examples. Fill them with Google OAuth credentials.
4. Install dependencies: `pnpm install`
5. Launch Docker: `docker compose up -d`
6. Fire up the Next.js app: `pnpm nx run app:serve`
7. Dive in! Visit `https://localhost:3000` and start coding.

## 📂 **Project Structure**

```
.
├── ...
├── apps                    # Primary directory for Next.js apps
│   └── app                 # Main Next.js web application - landing page & application
├── packages                # Directory for shared packages
│   ├── api-client          # Apollo Client and FE schema configuration
│   ├── core                # Core components and providers
│   ├── emails              # React-email components
│   ├── graphql-api         # ORM models and GraphQL API schema
│   └── internal            # Internal packages directory
└── ...
```

## ⚙️ **Commands**

- **Run Locally**:
  - Start Docker: `docker compose up -d`
  - Start Next.js app: `pnpm nx run app:serve`
- **Storybooks**: `pnpm nx run app:storybook`
- **Tests**: Check `test` and `test:watch` scripts in `package.json`.

- 🗂 **Migrations**:
  - Create new empty migration: `packages/schema > pnpm run db:createmigration src/migrations/[migration_name]`
  - Generate new migration based on the db changes: `packages/schema > pnpm run db:makemigrations src/migrations/[migration_name]`
  - Execute migrations: `packages/schema > pnpm run db:migrate`
  - Create initial migration:: `packages/schema > pnpm run typeorm migration:generate -d ./src/data-source.ts src/migrations/init`

## 💌 **Emails**

Run [local development server](https://react.email/docs/cli#email-dev)

> :warning: Be aware that command below might fail for a first time in your pnpm workspace according to the
> [react-email GitHub issue](https://github.com/resendlabs/react-email/issues/881).
> To solve it you might need to run `yarn install` in the `packages/emails/.react-email` directory.

```bash
packages/emails > pnpm dev
```

## 🚀 **Deployment**

1. Go to [Vercel](https://vercel.com/) and create a team
2. Create a Postgres Database storage. Make sure to use `POSTGRES` environment variables prefix.
3. Create a project with:
   - Root directory set to: `apps/app`
   - `Next.js` set up as `Framework preset`
4. Create a Google OAuth credentials with the correct redirect url (`https://{VERCEL_DOMAIN}/api/auth/callback/google`)
5. Add environment variables to in the app `Settings` tab
6. Assign the postgres storage to the project

## 🔗 **Useful Documentation**

- [NEXT.js docs](https://nextjs.org/docs)
- [NextAuth.js docs](https://next-auth.js.org/getting-started/introduction)
- [TypeORM docs](https://typeorm.io/)
- [TypeGraphQL docs](https://typegraphql.com/docs/getting-started.html)

---

## 🌍 **Who are we?**

We're [Apptension](https://apptension.com?utm_source=readme-file&utm_medium=referral&utm_campaign=ALPack&utm_term=ALPack), a team that turns ideas into world-class software using expertise in technology, design, and product management. We work with founders, investors, and creative agencies to help them bring uncommon ideas to the market.

Our partners value our outside-the-box thinking, clear and honest communication, and reliability – even in the most dynamic and time-compressed projects. Among our clients – plenty of early-stage startups, as well as international tech behemoths like Netflix and Uber. We live and breathe tech – and we're darn good at it.

To bring even more value to our partners, we create bespoke tools (like [SaaS Boilerplate](https://github.com/apptension/saas-boilerplate) and ALPack), allowing us to shorten time-to-market while avoiding technical debt.

## License

ALPack is licensed under the [MIT License](./LICENSE).

## Contributing to ALPack project

We welcome contributions from anyone interested in improving ALPack. Please keep in mind that this project follows a [Code of Conduct](./CODE_OF_CONDUCT.md) to ensure a welcoming community for all.

For more detailed information on how to contribute to this project, please refer to our [Contributing Guide](./CONTRIBUTING.md).

If you have any questions about contributing, please join our [Discord server](https://discord.apptension.com) - we are happy to help you!

Thank you for considering contributing to ALPack!
