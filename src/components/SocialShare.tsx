import React, { useState } from 'react';
import { Share2, Copy, Check, Send, Mail, X, Sparkles, Smartphone, Heart } from 'lucide-react';
import { SupportedLanguage } from '../types';

interface SocialShareProps {
  currentLang: SupportedLanguage;
  variant?: 'inline' | 'compact' | 'footer' | 'card';
  customUrl?: string;
  customTitle?: string;
  onOpenModal?: () => void;
}

export const SHARE_TEXTS: Record<SupportedLanguage, { title: string; subtitle: string; copied: string; native: string; sharePrompt: string }> = {
  pt: {
    title: 'Partilhe o Lisbon Made Easy',
    subtitle: 'Ajude amigos e viajantes a descobrir o melhor de Lisboa com roteiros, miradouros e dicas autênticas!',
    copied: 'Ligação copiada para a área de transferência!',
    native: 'Partilhar no Telemóvel',
    sharePrompt: 'Lisbon Made Easy – O guia local gratuito de Lisboa: monumentos, miradouros, fado e dicas práticas:',
  },
  en: {
    title: 'Share Lisbon Made Easy',
    subtitle: 'Help friends and travellers discover the best of Lisbon with curated spots, viewpoints, and local tips!',
    copied: 'Link copied to clipboard!',
    native: 'Share via Mobile',
    sharePrompt: 'Lisbon Made Easy – Free local guide to Lisbon: monuments, viewpoints, local food, and practical tips:',
  },
  es: {
    title: 'Comparte Lisbon Made Easy',
    subtitle: '¡Ayuda a amigos y viajeros a descubrir lo mejor de Lisboa con miradores, gastronomía y consejos locales!',
    copied: '¡Enlace copiado al portapapeles!',
    native: 'Compartir en Móvil',
    sharePrompt: 'Lisbon Made Easy – Guía local gratuita de Lisboa: monumentos, miradores y consejos prácticos:',
  },
  fr: {
    title: 'Partagez Lisbon Made Easy',
    subtitle: 'Aidez vos amis et voyageurs à découvrir le meilleur de Lisbonne avec des vues panoramiques et astuces locales !',
    copied: 'Lien copié dans le presse-papier !',
    native: 'Partager sur Mobile',
    sharePrompt: 'Lisbon Made Easy – Guide local gratuit de Lisbonne: monuments, belvédères et conseils pratiques:',
  },
  de: {
    title: 'Lisbon Made Easy teilen',
    subtitle: 'Helfen Sie Freunden und Reisenden, das Beste von Lissabon mit Aussichtspunkten und lokalen Tipps zu entdecken!',
    copied: 'Link in die Zwischenablage kopiert!',
    native: 'Auf dem Smartphone teilen',
    sharePrompt: 'Lisbon Made Easy – Kostenloser lokaler Reiseführer für Lissabon mit praktischen Tipps:',
  },
  it: {
    title: 'Condividi Lisbon Made Easy',
    subtitle: 'Aiuta amici e viaggiatori a scoprire il meglio di Lisbona con punti panoramici e consigli autentici!',
    copied: 'Link copiato negli appunti!',
    native: 'Condividi su Smartphone',
    sharePrompt: 'Lisbon Made Easy – Guida locale gratuita di Lisbona con monumenti e consigli pratici:',
  },
};

interface SocialNetwork {
  id: string;
  name: string;
  color: string;
  hoverColor: string;
  textColor: string;
  getUrl: (url: string, text: string) => string;
  icon: (className?: string) => React.ReactNode;
}

export const SOCIAL_NETWORKS: SocialNetwork[] = [
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    color: 'bg-[#25D366]',
    hoverColor: 'hover:bg-[#1EBE5D]',
    textColor: 'text-white',
    getUrl: (url, text) => `https://api.whatsapp.com/send?text=${encodeURIComponent(`${text}\n${url}`)}`,
    icon: (cls = 'w-4 h-4') => (
      <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
      </svg>
    ),
  },
  {
    id: 'facebook',
    name: 'Facebook',
    color: 'bg-[#1877F2]',
    hoverColor: 'hover:bg-[#166FE5]',
    textColor: 'text-white',
    getUrl: (url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    icon: (cls = 'w-4 h-4') => (
      <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    id: 'twitter',
    name: 'X (Twitter)',
    color: 'bg-black',
    hoverColor: 'hover:bg-stone-800',
    textColor: 'text-white',
    getUrl: (url, text) => `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}&hashtags=Lisbon,Lisboa,VisitPortugal`,
    icon: (cls = 'w-4 h-4') => (
      <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    color: 'bg-[#0A66C2]',
    hoverColor: 'hover:bg-[#095196]',
    textColor: 'text-white',
    getUrl: (url) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    icon: (cls = 'w-4 h-4') => (
      <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
  {
    id: 'telegram',
    name: 'Telegram',
    color: 'bg-[#229ED9]',
    hoverColor: 'hover:bg-[#1E88BE]',
    textColor: 'text-white',
    getUrl: (url, text) => `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
    icon: (cls = 'w-4 h-4') => (
      <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.536-.196 1.006.128.832.942z"/>
      </svg>
    ),
  },
  {
    id: 'pinterest',
    name: 'Pinterest',
    color: 'bg-[#BD081C]',
    hoverColor: 'hover:bg-[#9B0717]',
    textColor: 'text-white',
    getUrl: (url, text) => `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1513581166391-887a96ddeafd%3Fw%3D1200&description=${encodeURIComponent(text)}`,
    icon: (cls = 'w-4 h-4') => (
      <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.334 1.357-.056.23-.194.279-.447.168-1.667-.776-2.709-3.212-2.709-5.171 0-4.21 3.059-8.077 8.819-8.077 4.629 0 8.227 3.299 8.227 7.708 0 4.599-2.899 8.3-6.924 8.3-1.352 0-2.624-.703-3.059-1.534l-.832 3.169c-.302 1.157-1.121 2.607-1.669 3.499 1.258.388 2.597.599 3.985.599 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    id: 'email',
    name: 'Email',
    color: 'bg-stone-700',
    hoverColor: 'hover:bg-stone-800',
    textColor: 'text-white',
    getUrl: (url, text) => `mailto:?subject=${encodeURIComponent('Lisbon Made Easy – Guia de Lisboa')}&body=${encodeURIComponent(`${text}\n\n${url}`)}`,
    icon: (cls = 'w-4 h-4') => <Mail className={cls} />,
  },
];

export const SocialShare: React.FC<SocialShareProps> = ({
  currentLang,
  variant = 'inline',
  customUrl,
  customTitle,
}) => {
  const [copied, setCopied] = useState(false);
  const langConfig = SHARE_TEXTS[currentLang] || SHARE_TEXTS.pt;
  
  const shareUrl = customUrl || (typeof window !== 'undefined' ? window.location.href : 'https://lisbonmadeeasy.pt');
  const shareTitle = customTitle || langConfig.sharePrompt;

  const handleCopyLink = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = shareUrl;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: 'Lisbon Made Easy',
          text: shareTitle,
          url: shareUrl,
        });
      } catch {
        // User cancelled or failed; ignore
      }
    } else {
      handleCopyLink();
    }
  };

  const handleOpenNetwork = (network: SocialNetwork) => {
    const targetUrl = network.getUrl(shareUrl, shareTitle);
    window.open(targetUrl, '_blank', 'noopener,noreferrer,width=600,height=500');
  };

  // Compact Variant (e.g., inside header, hero chip, spot card)
  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-1.5 flex-wrap">
        {SOCIAL_NETWORKS.slice(0, 4).map((net) => (
          <button
            key={net.id}
            type="button"
            onClick={() => handleOpenNetwork(net)}
            title={`Partilhar no ${net.name}`}
            className={`w-8 h-8 rounded-full ${net.color} ${net.hoverColor} ${net.textColor} flex items-center justify-center shadow-xs hover:scale-110 active:scale-95 transition-all cursor-pointer`}
          >
            {net.icon('w-3.5 h-3.5')}
          </button>
        ))}
        <button
          type="button"
          onClick={handleCopyLink}
          title={copied ? langConfig.copied : 'Copiar ligação'}
          className={`h-8 px-2.5 rounded-full flex items-center gap-1.5 text-xs font-semibold border transition-all cursor-pointer ${
            copied
              ? 'bg-emerald-500 text-white border-emerald-600 shadow-sm'
              : 'bg-white hover:bg-stone-50 text-stone-700 border-stone-200 shadow-2xs'
          }`}
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5 text-stone-500" />}
          <span className="hidden sm:inline">{copied ? 'Copiado!' : 'Copiar'}</span>
        </button>
      </div>
    );
  }

  // Footer Variant (Dark mode tailored for deep navy background)
  if (variant === 'footer') {
    return (
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Share2 className="w-4 h-4 text-amber-400" />
          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
            {currentLang === 'pt' ? 'Partilhar nas Redes Sociais' : 'Share on Social Media'}
          </h4>
        </div>
        <p className="text-xs text-stone-300">
          {langConfig.subtitle}
        </p>

        <div className="flex items-center gap-2 flex-wrap pt-1">
          {SOCIAL_NETWORKS.map((net) => (
            <button
              key={net.id}
              type="button"
              onClick={() => handleOpenNetwork(net)}
              title={`Partilhar no ${net.name}`}
              className={`w-9 h-9 rounded-xl ${net.color} ${net.hoverColor} ${net.textColor} flex items-center justify-center shadow-sm hover:scale-108 active:scale-95 transition-all cursor-pointer`}
              aria-label={`Partilhar no ${net.name}`}
            >
              {net.icon('w-4 h-4')}
            </button>
          ))}

          <button
            type="button"
            onClick={handleCopyLink}
            title={copied ? langConfig.copied : 'Copiar ligação'}
            className={`h-9 px-3 rounded-xl flex items-center gap-1.5 text-xs font-semibold border transition-all cursor-pointer ${
              copied
                ? 'bg-emerald-500 text-white border-emerald-400'
                : 'bg-stone-800 hover:bg-stone-700 text-stone-200 border-stone-700'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-white animate-bounce" />
                <span>{currentLang === 'pt' ? 'Copiado!' : 'Copied!'}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-amber-400" />
                <span>{currentLang === 'pt' ? 'Copiar Link' : 'Copy Link'}</span>
              </>
            )}
          </button>
        </div>

        {copied && (
          <p className="text-[11px] text-emerald-400 font-medium animate-in fade-in duration-200">
            ✓ {langConfig.copied}
          </p>
        )}
      </div>
    );
  }

  // Full / Inline / Card Variant (for dedicated sections or hero)
  return (
    <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-amber-900/10 p-5 sm:p-6 shadow-sm hover:shadow-md transition-all">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-stone-100">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold mb-1.5">
            <Share2 className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>{currentLang === 'pt' ? 'Partilha Fácil' : 'Easy Sharing'}</span>
          </div>
          <h3 className="font-display font-bold text-lg sm:text-xl text-[#0B192C]">
            {langConfig.title}
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
            {langConfig.subtitle}
          </p>
        </div>

        {/* Native Mobile Share Button if supported */}
        {typeof navigator !== 'undefined' && 'share' in navigator && (
          <button
            type="button"
            onClick={handleNativeShare}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0B192C] text-white hover:bg-[#1E3E62] text-xs font-semibold shadow-xs transition-all cursor-pointer self-start md:self-center"
          >
            <Smartphone className="w-4 h-4 text-amber-400" />
            <span>{langConfig.native}</span>
          </button>
        )}
      </div>

      {/* Buttons Grid */}
      <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
        {SOCIAL_NETWORKS.map((net) => (
          <button
            key={net.id}
            type="button"
            onClick={() => handleOpenNetwork(net)}
            className={`flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl border border-stone-100 bg-stone-50/70 hover:bg-white hover:border-amber-300 hover:shadow-md transition-all group cursor-pointer select-none`}
          >
            <div className={`w-10 h-10 rounded-full ${net.color} ${net.textColor} flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs`}>
              {net.icon('w-5 h-5')}
            </div>
            <span className="text-[11px] font-semibold text-stone-700 group-hover:text-stone-900 tracking-tight">
              {net.name}
            </span>
          </button>
        ))}

        {/* Copy Link Tile */}
        <button
          type="button"
          onClick={handleCopyLink}
          className={`flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl border transition-all cursor-pointer select-none ${
            copied
              ? 'bg-emerald-50 border-emerald-400 text-emerald-800 shadow-sm'
              : 'border-stone-100 bg-stone-50/70 hover:bg-white hover:border-amber-300 hover:shadow-md'
          }`}
        >
          <div className={`w-10 h-10 rounded-full ${copied ? 'bg-emerald-500 text-white' : 'bg-amber-100 text-amber-900'} flex items-center justify-center transition-transform shadow-xs`}>
            {copied ? <Check className="w-5 h-5 animate-scale" /> : <Copy className="w-5 h-5" />}
          </div>
          <span className="text-[11px] font-semibold text-stone-700">
            {copied ? (currentLang === 'pt' ? 'Copiado!' : 'Copied!') : (currentLang === 'pt' ? 'Copiar Link' : 'Copy Link')}
          </span>
        </button>
      </div>

      {copied && (
        <div className="mt-3.5 px-3 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium flex items-center gap-2 animate-in fade-in duration-150">
          <Check className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{langConfig.copied}</span>
        </div>
      )}
    </div>
  );
};

// Modal Component for Header or Anywhere Click
export const SocialShareModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  currentLang: SupportedLanguage;
}> = ({ isOpen, onClose, currentLang }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#FAF7F2] rounded-3xl shadow-2xl border border-amber-900/15 p-6 overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-9 h-9 rounded-xl bg-amber-400 text-[#0B192C] flex items-center justify-center shadow-xs font-bold">
            <Share2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-[#0B192C]">
              {SHARE_TEXTS[currentLang]?.title || 'Partilhe o Lisbon Made Easy'}
            </h3>
            <span className="text-[11px] text-amber-900 font-semibold uppercase tracking-wider">
              Lisbon Tourism & Local Guide
            </span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-stone-600 mb-5 leading-relaxed">
          {SHARE_TEXTS[currentLang]?.subtitle || 'Ajude amigos e viajantes a descobrir o melhor de Lisboa com roteiros autênticos!'}
        </p>

        <SocialShare currentLang={currentLang} variant="card" />

        <div className="mt-5 pt-4 border-t border-stone-200/80 flex items-center justify-between text-xs text-stone-500">
          <span className="flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 text-[#C85A32] fill-current" />
            <span>Obrigado por apoiar o turismo em Lisboa!</span>
          </span>
          <button
            type="button"
            onClick={onClose}
            className="font-semibold text-slate-800 hover:text-black underline cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
