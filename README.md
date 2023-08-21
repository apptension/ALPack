# Apptension App Boilerplate

> aka light boilerplate ;)

## Features

* GraphQL API
* Authentication and authorization

## Tech stack

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [React](https://github.com/facebook/react)
- [Next.js](https://nextjs.org/)
- [GraphQL](https://graphql.org/)
- [Apollo Client](https://github.com/apollographql/apollo-client)
- [jest](https://github.com/jestjs/jest)
- [Storybook](https://github.com/storybookjs/storybook)
- [Mantine](https://mantine.dev/)
- [TypeORM](https://typeorm.io/)
- [Apollo Server](https://github.com/apollographql/apollo-server)
- [TypeGraphQL](https://typegraphql.com/)
- [NextAuth.js](https://next-auth.js.org/)
- [NX](https://github.com/nrwl/nx)
- [pnpm](https://pnpm.io/)
- Postgres

Infrastructure:

- [Vercel](https://vercel.com/) deployment
- Bitbucket Pipelines
- Docker (for development only)

## Project structure

```
.
├── ...
├── apps                    # Main directory containing Next.js apps
│   └── app                 # Main Next.js web application with the landing page and application
├── packages                # Directory for all shared packages
│   ├── api-client          # Package with the Apollo Client and schema for FE configuration
│   ├── core                # Package with core components and providers
│   ├── internal            # Directory for internal packages
│   └── schema              # Package containing ORM models and GraphQL API schema
└── ...
```

## Getting started

> TODO

## Commands

### Run the app locally
Start docker containers
```bash
docker compose up -d
```

Start the Next.js app
```bash
pnpm nx run app:serve
```

Run storybooks
```bash
pnpm nx run app:storybook
```

### Run tests
> todo

### Migrations
Create new migration
```bash
packages/schema > pnpm run db:createmigration migrations/[migration_name]
```

Generate new migration based on the db changes
```bash
packages/schema > pnpm run db:makemigrations migrations/[migration_name]
```

Call migrations
```bash
packages/schema > pnpm run db:migrate
```

## Deployment instructions

> TODO