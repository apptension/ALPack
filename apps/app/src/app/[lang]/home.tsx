'use client';

import { IconBrandGraphql, IconBrandReact, IconBrandVercel, IconDatabase, IconUsers } from '@tabler/icons-react';
import { useMemo } from 'react';
import { useIntl } from 'react-intl';

import { Features, Footer, Header, Hero } from '@app/components/homepage';

export function Home() {
  const intl = useIntl();

  const { featuresData, footerData, headerData } = useMemo(
    () => ({
      headerData: [
        { link: '#', label: intl.formatMessage({ defaultMessage: 'Home', id: 'Header / Link / Home' }) },
        {
          link: `#features`,
          label: intl.formatMessage({ defaultMessage: 'Features', id: 'Header / Link / Features' }),
        },
      ],
      footerData: [
        {
          title: intl.formatMessage({ defaultMessage: 'About', id: 'Footer / About / Title ' }),
          links: [
            {
              label: intl.formatMessage({ defaultMessage: 'Bitbucket repository', id: 'Footer / About / Link' }),
              link: 'https://bitbucket.org/apptension/rnd-app-boilerplate',
            },
          ],
        },
      ],
      featuresData: {
        title: intl.formatMessage({ defaultMessage: 'Features', id: 'Features / Title ' }),
        description: intl.formatMessage({ defaultMessage: 'Awesome tech included:', id: 'Footer / Description ' }),
        data: [
          {
            title: intl.formatMessage({ defaultMessage: 'React', id: 'Features / Title / React' }),
            description: intl.formatMessage({
              defaultMessage:
                'This boilerplate offers enhanced React features like server-side rendering, static site generation, and API routes, optimizing both performance and SEO',
              id: 'Features / Data / Description / React',
            }),
            icon: IconBrandReact,
          },
          {
            title: intl.formatMessage({
              defaultMessage: 'GraphQL with Apollo',
              id: 'Features / Data / Title / GraphQL with Apollo',
            }),
            description: intl.formatMessage({
              defaultMessage:
                'Leverage the flexibility of GraphQL and Apollo Client for efficient data-fetching, state management, and seamless API integration.',
              id: 'Features / Data / Description / GraphQL with Apollo',
            }),
            icon: IconBrandGraphql,
          },
          {
            title: intl.formatMessage({
              defaultMessage: 'Postgress + TypeORM',
              id: 'Features / Data / Title / Postgress + TypeORM',
            }),
            description: intl.formatMessage({
              defaultMessage:
                'Equipped with a robust Postgres database and TypeORM, this boilerplate allows for a scalable and type-safe data layer right out of the box.',
              id: 'Features / Data / Description / Postgress + TypeORM',
            }),
            icon: IconDatabase,
          },
          {
            title: intl.formatMessage({
              defaultMessage: 'NextAuth authorization',
              id: 'Features / Data / Title / NextAuth authorization',
            }),
            description: intl.formatMessage({
              defaultMessage:
                'Secure your application effortlessly with NextAuth, which provides easy-to-implement, robust authentication and authorization.',
              id: 'Features / Data / Description / NextAuth authorization',
            }),
            icon: IconUsers,
          },
          {
            title: intl.formatMessage({
              defaultMessage: 'Ready to deploy on Vercel',
              id: 'Features / Title / Ready to deploy on Vercel',
            }),
            description: intl.formatMessage({
              defaultMessage:
                'Designed for seamless deployment on Vercel, this boilerplate ensures that your application is production-ready in no time.',
              id: 'Features / Description / Ready to deploy on Vercel',
            }),
            icon: IconBrandVercel,
          },
        ],
      },
    }),
    [intl]
  );

  return (
    <>
      <Header links={headerData} />
      <Hero />
      <Features title={featuresData.title} description={featuresData.description} data={featuresData.data} />
      <Footer data={footerData} />
    </>
  );
}
