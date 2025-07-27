import { useState } from 'react';
import { Play, TrendingUp, Users, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AudioPlayer from '../audio/AudioPlayer';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const stats = [
    { label: 'Sound Packs', value: '50K+', icon: Download },
    { label: 'Creators', value: '5K+', icon: Users },
    { label: 'Downloads', value: '2M+', icon: TrendingUp },
  ];

  const featuredTracks = [
    { title: 'Ethereal Dreams', artist: 'SynthMaster', genre: 'Ambient' },
    { title: 'Urban Beats', artist: 'BeatCrafters', genre: 'Hip Hop' },
    { title: 'Electric Pulse', artist: 'DigitalSound', genre: 'Electronic' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Sound Kit Marketplace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-accent/20 text-accent border-accent/30">
                🎵 Premium Sound Marketplace
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
                <span className="text-gradient">Discover</span>
                <br />
                <span className="text-foreground">Premium</span>
                <br />
                <span className="text-accent">Sound Kits</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Explore thousands of high-quality sound packs, beats, and samples 
                from top producers worldwide. Transform your music production with 
                professional-grade audio content.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="glass-button text-lg px-8 py-4">
                <Play className="h-5 w-5 mr-2" />
                Explore Packs
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 border-accent/30 hover:bg-accent/10"
              >
                Start Creating
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <stat.icon className="h-5 w-5 text-accent mr-2" />
                    <span className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Featured Audio */}
          <div className="space-y-6">
            <div className="glass-card p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-foreground">
                  🔥 Trending Now
                </h3>
                <Badge variant="secondary">Live</Badge>
              </div>

              {/* Featured Tracks List */}
              <div className="space-y-3">
                {featuredTracks.map((track, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/30 transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                        <Play className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                          {track.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {track.artist}
                        </p>
                      </div>
                    </div>
                    
                    <Badge variant="outline" className="text-xs">
                      {track.genre}
                    </Badge>
                  </div>
                ))}
              </div>

              {/* Audio Player */}
              <div className="pt-4 border-t border-border">
                <AudioPlayer
                  title="Ethereal Dreams - Preview"
                  artist="SynthMaster"
                  showWaveform={true}
                  className="bg-transparent border-0 p-0"
                />
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4 text-center hover-lift cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-success/20 flex items-center justify-center mx-auto mb-3">
                  <Download className="h-6 w-6 text-success" />
                </div>
                <h4 className="font-medium text-foreground mb-1">Free Packs</h4>
                <p className="text-sm text-muted-foreground">Get started today</p>
              </div>
              
              <div className="glass-card p-4 text-center hover-lift cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-warning/20 flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-warning" />
                </div>
                <h4 className="font-medium text-foreground mb-1">Top Creators</h4>
                <p className="text-sm text-muted-foreground">Follow the best</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-accent/10 blur-3xl animate-pulse hidden lg:block" />
      <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-primary/20 blur-2xl animate-pulse hidden lg:block" />
    </section>
  );
};

export default HeroSection;