import Navigation from '@/components/layout/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import GenresSection from '@/components/sections/GenresSection';
import FeaturedPacks from '@/components/sections/FeaturedPacks';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navigation />
      <main>
        <HeroSection />
        <GenresSection />
        <FeaturedPacks />
      </main>
    </div>
  );
};

export default Index;
