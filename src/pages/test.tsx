import type { NextPage } from 'next';
import Hero from '../components/Hero';

const Test: NextPage = () => {
  const MainText = 'Coming soon';
  const SubText = '現在、開発中です';
  const ButtonLink = '';

  return (
    <div>
      <Hero MainText={MainText} SubText={SubText} ButtonLink={ButtonLink} />
    </div>
  );
};

export default Test;
