import { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SoundPackCard from '../cards/SoundPackCard';

const FeaturedPacks = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredPacks = [
    {
      id: '1',
      title: 'Midnight Vibes',
      artist: 'SynthWave Pro',
      genre: 'Electronic',
      price: 29.99,
      originalPrice: 39.99,
      sampleCount: 25,
      rating: 4.8,
      reviewCount: 142,
      isNew: true,
      mood: 'Dark',
      bpm: 128
    },
    {
      id: '2',
      title: 'Urban Chronicles',
      artist: 'BeatMaster',
      genre: 'Hip Hop',
      price: 24.99,
      sampleCount: 30,
      rating: 4.9,
      reviewCount: 89,
      isNew: false,
      mood: 'Energetic',
      bpm: 95
    },
    {
      id: '3',
      title: 'Ethereal Soundscapes',
      artist: 'AtmosphericBeats',
      genre: 'Ambient',
      price: 19.99,
      originalPrice: 29.99,
      sampleCount: 20,
      rating: 4.7,
      reviewCount: 203,
      isNew: false,
      mood: 'Peaceful',
      bpm: 70
    },
    {
      id: '4',
      title: 'Jazz Café Collection',
      artist: 'JazzVibes',
      genre: 'Jazz',
      price: 34.99,
      sampleCount: 35,
      rating: 4.6,
      reviewCount: 67,
      isNew: true,
      mood: 'Smooth',
      bpm: 120
    },
    {
      id: '5',
      title: 'Future Bass Essentials',
      artist: 'EDMCrafters',
      genre: 'Electronic',
      price: 27.99,
      sampleCount: 28,
      rating: 4.8,
      reviewCount: 156,
      isNew: false,
      mood: 'Uplifting',
      bpm: 150
    },
    {
      id: '6',
      title: 'Lo-Fi Study Sessions',
      artist: 'ChillBeats',
      genre: 'Lo-Fi',
      price: 0,
      sampleCount: 15,
      rating: 4.5,
      reviewCount: 324,
      isNew: false,
      isFree: true,
      mood: 'Chill',
      bpm: 85
    }
  ];

  const itemsPerPage = 3;
  const maxSlides = Math.ceil(featuredPacks.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  const getCurrentPacks = () => {
    const start = currentSlide * itemsPerPage;
    return featuredPacks.slice(start, start + itemsPerPage);
  };

  return (
    <section className="py-20 container mx-auto px-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <Sparkles className="h-6 w-6 text-accent" />
            <h2 className="text-4xl font-display font-bold text-foreground">
              Featured <span className="text-gradient">Sound Packs</span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground">
            Hand-picked by our curators for exceptional quality
          </p>
        </div>

        {/* Navigation Controls */}
        <div className="hidden md:flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            className="border-accent/30 hover:bg-accent/10"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            className="border-accent/30 hover:bg-accent/10"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {getCurrentPacks().map((pack) => (
          <SoundPackCard key={pack.id} {...pack} />
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-center space-x-4">
        <Button
          variant="outline"
          size="sm"
          onClick={prevSlide}
          className="border-accent/30 hover:bg-accent/10"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <div className="flex space-x-2">
          {Array.from({ length: maxSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-accent' : 'bg-muted'
              }`}
            />
          ))}
        </div>
        
        <Button
          variant="outline"
          size="sm"
          onClick={nextSlide}
          className="border-accent/30 hover:bg-accent/10"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
        <Button size="lg" className="glass-button px-8 py-3 text-lg">
          View All Featured Packs
        </Button>
      </div>
    </section>
  );
};

export default FeaturedPacks;