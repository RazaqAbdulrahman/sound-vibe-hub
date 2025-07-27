import { Music, Headphones, Radio, Mic, Guitar, Piano } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const GenresSection = () => {
  const genres = [
    {
      name: 'Hip Hop',
      icon: Mic,
      color: 'from-red-500/20 to-orange-500/20',
      borderColor: 'border-red-500/30',
      count: '12.5K',
      trending: true
    },
    {
      name: 'Electronic',
      icon: Headphones,
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30',
      count: '8.9K',
      trending: false
    },
    {
      name: 'Lo-Fi',
      icon: Radio,
      color: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/30',
      count: '6.2K',
      trending: true
    },
    {
      name: 'Jazz',
      icon: Piano,
      color: 'from-yellow-500/20 to-amber-500/20',
      borderColor: 'border-yellow-500/30',
      count: '4.1K',
      trending: false
    },
    {
      name: 'Rock',
      icon: Guitar,
      color: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/30',
      count: '5.8K',
      trending: false
    },
    {
      name: 'Ambient',
      icon: Music,
      color: 'from-indigo-500/20 to-violet-500/20',
      borderColor: 'border-indigo-500/30',
      count: '3.7K',
      trending: true
    }
  ];

  return (
    <section className="py-20 container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-display font-bold text-foreground mb-4">
          Explore by <span className="text-gradient">Genre</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover the perfect sound for your next project across all music genres
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {genres.map((genre) => (
          <div
            key={genre.name}
            className={`relative glass-card hover-lift cursor-pointer p-6 text-center group ${genre.borderColor}`}
          >
            {/* Trending Badge */}
            {genre.trending && (
              <Badge 
                className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-xs"
              >
                🔥 Hot
              </Badge>
            )}

            {/* Icon */}
            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${genre.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <genre.icon className="h-8 w-8 text-foreground" />
            </div>

            {/* Content */}
            <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
              {genre.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {genre.count} packs
            </p>

            {/* Hover Effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
          </div>
        ))}
      </div>

      {/* Browse All Button */}
      <div className="text-center mt-12">
        <button className="glass-button px-8 py-3 text-lg font-medium">
          Browse All Genres
        </button>
      </div>
    </section>
  );
};

export default GenresSection;