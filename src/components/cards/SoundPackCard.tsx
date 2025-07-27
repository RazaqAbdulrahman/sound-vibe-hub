import { useState } from 'react';
import { Heart, ShoppingCart, Play, Download, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AudioPlayer from '../audio/AudioPlayer';
import producerAvatar from '@/assets/producer-avatar.jpg';
import soundWaveBg from '@/assets/sound-wave-bg.jpg';

interface SoundPackCardProps {
  id: string;
  title: string;
  artist: string;
  genre: string;
  price: number;
  originalPrice?: number;
  sampleCount: number;
  rating: number;
  reviewCount: number;
  coverImage?: string;
  audioPreview?: string;
  isLiked?: boolean;
  isNew?: boolean;
  isFree?: boolean;
  mood?: string;
  bpm?: number;
  compact?: boolean;
}

const SoundPackCard = ({
  id,
  title,
  artist,
  genre,
  price,
  originalPrice,
  sampleCount,
  rating,
  reviewCount,
  coverImage,
  audioPreview,
  isLiked = false,
  isNew = false,
  isFree = false,
  mood,
  bpm,
  compact = false
}: SoundPackCardProps) => {
  const [liked, setLiked] = useState(isLiked);
  const [showPlayer, setShowPlayer] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLiked(!liked);
  };

  const handlePreview = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowPlayer(!showPlayer);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Add to cart logic
  };

  if (compact) {
    return (
      <div className="glass-card p-4 hover-lift group cursor-pointer">
        <div className="flex items-center space-x-3">
          <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
            <img 
              src={coverImage || soundWaveBg} 
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={handlePreview}
                className="text-white hover:text-accent"
              >
                <Play className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-foreground truncate">{title}</h3>
            <p className="text-sm text-muted-foreground truncate">{artist}</p>
            <div className="flex items-center space-x-2 mt-1">
              <Badge variant="secondary" className="text-xs">{genre}</Badge>
              <span className="text-sm font-medium text-accent">
                {isFree ? 'Free' : `$${price}`}
              </span>
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={handleLike}
            className={`flex-shrink-0 ${liked ? 'text-destructive' : 'text-muted-foreground'}`}
          >
            <Heart className={`h-4 w-4 ${liked ? 'fill-current' : ''}`} />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card hover-lift group cursor-pointer overflow-hidden">
      {/* Cover Image */}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={coverImage || soundWaveBg} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={handlePreview}
              className="text-white hover:text-accent glass-button"
            >
              <Play className="h-5 w-5" />
            </Button>
            
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLike}
                className={`text-white hover:text-accent ${liked ? 'text-destructive' : ''}`}
              >
                <Heart className={`h-5 w-5 ${liked ? 'fill-current' : ''}`} />
              </Button>
              
              {!isFree && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleAddToCart}
                  className="text-white hover:text-accent"
                >
                  <ShoppingCart className="h-5 w-5" />
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-1">
          {isNew && <Badge className="bg-success text-success-foreground">New</Badge>}
          {isFree && <Badge className="bg-warning text-warning-foreground">Free</Badge>}
          {originalPrice && (
            <Badge variant="destructive" className="text-xs">
              {Math.round((1 - price / originalPrice) * 100)}% OFF
            </Badge>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Title and Artist */}
        <div>
          <h3 className="font-medium text-foreground truncate group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground truncate">{artist}</p>
        </div>

        {/* Details */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <Badge variant="secondary">{genre}</Badge>
            {mood && <Badge variant="outline" className="text-xs">{mood}</Badge>}
          </div>
          
          <div className="flex items-center space-x-1">
            <Star className="h-3 w-3 fill-warning text-warning" />
            <span className="text-muted-foreground">{rating}</span>
            <span className="text-muted-foreground">({reviewCount})</span>
          </div>
        </div>

        {/* Additional Info */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{sampleCount} samples</span>
          {bpm && <span>{bpm} BPM</span>}
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="flex items-center space-x-2">
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice}
              </span>
            )}
            <span className="text-lg font-semibold text-accent">
              {isFree ? 'Free' : `$${price}`}
            </span>
          </div>
          
          <Button
            size="sm"
            onClick={handleAddToCart}
            className="glass-button"
          >
            {isFree ? (
              <>
                <Download className="h-4 w-4 mr-1" />
                Download
              </>
            ) : (
              <>
                <ShoppingCart className="h-4 w-4 mr-1" />
                Add to Cart
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Audio Player */}
      {showPlayer && audioPreview && (
        <div className="border-t border-border">
          <AudioPlayer
            src={audioPreview}
            title={title}
            artist={artist}
            compact
            className="p-3"
          />
        </div>
      )}
    </div>
  );
};

export default SoundPackCard;