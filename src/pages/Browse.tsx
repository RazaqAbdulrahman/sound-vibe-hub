import { useState } from 'react';
import { Search, Filter, Grid, List, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/layout/Navigation';
import SoundPackCard from '@/components/cards/SoundPackCard';

const Browse = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  // Sample data - in real app this would come from API
  const soundPacks = [
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
      isFree: true,
      mood: 'Chill',
      bpm: 85
    }
  ];

  const genres = ['All', 'Hip Hop', 'Electronic', 'Jazz', 'Ambient', 'Lo-Fi', 'Rock'];
  const activeFilters = ['New Releases', 'Under $30'];

  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold text-foreground mb-2">
            Browse Sound Packs
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover thousands of professional sound packs
          </p>
        </div>

        {/* Search and Filters */}
        <div className="glass-card p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search sound packs, artists, genres..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-secondary/50 border-border focus:border-accent"
              />
            </div>

            {/* Genre Filter */}
            <Select value={selectedGenre} onValueChange={setSelectedGenre}>
              <SelectTrigger className="w-full lg:w-48 bg-secondary/50">
                <SelectValue placeholder="Select Genre" />
              </SelectTrigger>
              <SelectContent>
                {genres.map((genre) => (
                  <SelectItem key={genre} value={genre.toLowerCase()}>
                    {genre}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort By */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full lg:w-48 bg-secondary/50">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>

            {/* Advanced Filters */}
            <Button variant="outline" className="border-accent/30 hover:bg-accent/10">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Active Filters */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm text-muted-foreground">Active filters:</span>
            {activeFilters.map((filter) => (
              <Badge key={filter} variant="secondary" className="text-xs">
                {filter}
                <button className="ml-1 hover:text-destructive">×</button>
              </Badge>
            ))}
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-muted-foreground">
            Showing <span className="text-foreground font-medium">1-6</span> of{' '}
            <span className="text-foreground font-medium">2,456</span> results
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className={viewMode === 'grid' ? 'glass-button' : 'border-accent/30'}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
              className={viewMode === 'list' ? 'glass-button' : 'border-accent/30'}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Results Grid */}
        <div className={`${
          viewMode === 'grid' 
            ? 'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' 
            : 'space-y-4'
        }`}>
          {soundPacks.map((pack) => (
            <SoundPackCard 
              key={pack.id} 
              {...pack} 
              compact={viewMode === 'list'}
            />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button size="lg" className="glass-button px-8 py-3">
            Load More Packs
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Browse;