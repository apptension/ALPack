import { Features, Footer, HeaderResponsive, Hero } from '@app/components/homepage';

const links = [
  { link: '#', label: 'Home' },
  { link: `#features`, label: 'Features' },
];

export function Home() {
  return (
    <>
      <HeaderResponsive links={links} />
      <Hero />
      <Features title="Features" description="Awesome tech included:" />
      <Footer data={[{ title: 'About', links: [{ label: 'GitHub', link: '#' }] }]} />
    </>
  );
}
