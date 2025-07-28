import Hero from '../components/Hero';
import WhyJoin from '../components/WhyJoin'
import TrendingThreads from '../components/TrendingThreads';
import FeaturedTools from '../components/FeaturedTools';

const Home = () => {
  return (
    <>
      <Hero />
      <WhyJoin />
      <TrendingThreads />
      <FeaturedTools />
    </>
  )
}

export default Home;