'use client';

import YouTube, { YouTubeProps, YouTubePlayer } from 'react-youtube';
import { useState } from 'react';
import { Loader2, AlertCircle } from 'lucide-react';

interface YouTubePlayerWrapperProps {
    videoId: string;
    onReady?: (player: YouTubePlayer) => void;
    className?: string;
}

export function YouTubePlayerWrapper({ videoId, onReady, className }: YouTubePlayerWrapperProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        setIsLoading(false);
        if (onReady) {
            onReady(event.target);
        }
    };

    const onPlayerError: YouTubeProps['onError'] = (event) => {
        setIsLoading(false);
        console.error('YouTube Player Error:', event.data);
        setError('Failed to load video. Please try again later.');
    };

    const onPlayerStateChange: YouTubeProps['onStateChange'] = (event) => {
        // 3 = buffering
        if (event.data === 3) {
            setIsLoading(true);
        } else {
            setIsLoading(false);
        }
    }

    if (error) {
        return (
            <div className={`flex flex-col items-center justify-center bg-black/90 text-white ${className}`}>
                <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
                <p className="text-lg font-semibold">{error}</p>
            </div>
        );
    }

    return (
        <div className={`relative ${className}`}>
            <YouTube
                videoId={videoId}
                className="w-full h-full"
                iframeClassName="w-full h-full"
                onReady={onPlayerReady}
                onError={onPlayerError}
                onStateChange={onPlayerStateChange}
                opts={{
                    width: '100%',
                    height: '100%',
                    playerVars: {
                        autoplay: 0,
                        modestbranding: 1,
                        rel: 0,
                    },
                }}
            />
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-10 pointer-events-none">
                    <Loader2 className="h-10 w-10 animate-spin text-white" />
                </div>
            )}
        </div>
    );
}
