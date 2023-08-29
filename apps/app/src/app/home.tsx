import { Features, Footer, Header, Hero } from '@app/components/homepage';

const links = [
  { link: '#', label: 'Home' },
  { link: `#features`, label: 'Features' },
];

export function Home() {
  return (
    <>
      <Header links={links} />
      <Hero />
      <Features title="Features" description="Awesome tech included:" />
      <Footer data={[{ title: 'About', links: [{ label: 'GitHub', link: '#' }] }]} />
    </>
  );
}
