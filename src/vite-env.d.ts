/// <reference types="vite/client" />

declare module 'react-lite-youtube-embed' {
  export interface LiteYouTubeProps {
    id: string;
    title: string;
    poster?: 'default' | 'hqdefault' | 'mqdefault' | 'sddefault' | 'maxresdefault';
    noCookie?: boolean;
    activatedClass?: string;
    adNetwork?: boolean;
    aspectHeight?: number;
    aspectWidth?: number;
    iframeClass?: string;
    playerClass?: string;
    wrapperClass?: string;
    playlist?: boolean;
    playlistCoverId?: string;
    params?: string;
    announce?: string;
  }
  
  const LiteYouTubeEmbed: React.FC<LiteYouTubeProps>;
  export default LiteYouTubeEmbed;
}
