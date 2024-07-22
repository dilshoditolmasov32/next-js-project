import Hero from './components/hero'
import Trending from './components/cards/trend-card'
import CreatorCard from "./components/cards/creator-card";
import CategoryCard from './components/cards/category-card'
import DiscoverCard from './components/cards/discover-card'
import WorksCard from './components/cards/works-card'
import Box from './components/box'
import Footer from './components/footer'
const Home = () => {
  return (
    <main className="bg-[#2B2B2B]">
      <Hero/>
      <Trending/>
      <CreatorCard />
      <CategoryCard/>
      <DiscoverCard/>
      <WorksCard/>  
      <Box/>
      <Footer/>
    </main>
  );
};

export default Home;
