import React, { useState } from 'react';
import { X, Send, Phone, MessageSquare, Sparkles, CheckCheck } from 'lucide-react';
import { UnknownTravelsLogo } from './BrandLogos';

interface WhatsAppChatBoxProps {
  phoneNumber?: string;
  displayNumber?: string;
}

export const WhatsAppChatBox: React.FC<WhatsAppChatBoxProps> = ({
  phoneNumber = '94778084913',
  displayNumber = '+94 77 808 4913',
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);

  // Pre-configured quick questions for luxury travelers & filmmakers in Sri Lanka
  const quickPrompts = [
    'Sigiriya Rock Citadel & Ancient Kingdoms Private Survey',
    'Ceylon Highlands & Ella Nine Arches Heritage Rail',
    'Yala Leopard Safari & Southern Coast Helicopter Flight',
    'Book Unknown Studio for 8K Cinema & Drone Production in Sri Lanka',
  ];

  const handleSelectPrompt = (prompt: string) => {
    setMessage(prompt);
  };

  const currentMessageText = message.trim() || 'Hello Unknown Concierge, I would like to inquire about a bespoke private expedition across Sri Lanka.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(currentMessageText)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end select-none">
      
      {/* Floating Chat Box Window */}
      {isOpen && (
        <div className="mb-4 w-[360px] max-w-[calc(100vw-2rem)] glass-level-3 border border-[#c9a84c]/40 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-5">
          
          {/* WhatsApp & Concierge Header */}
          <div className="bg-gradient-to-r from-[#0d1f14] via-[#102a1b] to-[#0b1710] p-4 border-b border-[#c9a84c]/20 relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-11 h-11 rounded-full bg-[#050505] border border-[#c9a84c] flex items-center justify-center p-1 overflow-hidden">
                    <UnknownTravelsLogo size={36} />
                  </div>
                  {/* Glowing online indicator */}
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] rounded-full border-2 border-[#050505]" />
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-serif text-sm font-medium text-[#f5f5f5]">
                      Unknown Concierge
                    </h3>
                    <span className="text-[10px] font-mono text-[#25D366] bg-[#25D366]/10 px-1.5 py-0.5 border border-[#25D366]/30">
                      LIVE
                    </span>
                  </div>
                  <p className="text-[11px] font-mono text-[#c9a84c] tracking-wider">
                    {displayNumber}
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-[#9e9e9e] hover:text-[#f5f5f5] hover:bg-white/10 rounded-sm transition-colors"
                title="Close chat box"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-2 text-[10px] text-[#a3b899] flex items-center justify-between">
              <span>Typically replies in under 5 minutes</span>
              <span className="font-mono text-[#e5c76b]">Colombo & Galle Desk</span>
            </div>
          </div>

          {/* Chat Messages Body */}
          <div className="p-4 bg-[#0a0a0a] min-h-[220px] max-h-[320px] overflow-y-auto space-y-3">
            <div className="text-center my-1">
              <span className="text-[10px] font-mono text-[#9e9e9e] bg-[#171717] px-2.5 py-1 border border-[#c9a84c]/10">
                End-to-End Encrypted WhatsApp Channel
              </span>
            </div>

            {/* Inbound Agent Message */}
            <div className="flex items-start gap-2 max-w-[88%]">
              <div className="bg-[#171717] border border-[#c9a84c]/20 p-3 rounded-sm text-xs text-[#e5e2e1] space-y-1.5">
                <p className="font-medium text-[#e5c76b] text-[11px] font-serif">
                  Ayubowan & Welcome to Unknown.
                </p>
                <p className="text-[11.5px] leading-relaxed text-[#d0c5b2]">
                  I am your private expedition & cinematography concierge at our Sri Lanka desk. How may we assist your bespoke route or filming commission?
                </p>
                <div className="flex items-center justify-end gap-1 text-[9px] text-[#9e9e9e] pt-1">
                  <span>Just now</span>
                  <CheckCheck className="w-3 h-3 text-[#25D366]" />
                </div>
              </div>
            </div>

            {/* Quick Prompts List */}
            <div className="space-y-1.5 pt-2">
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#9e9e9e] block">
                Tap to select topic:
              </span>
              <div className="flex flex-col gap-1.5">
                {quickPrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectPrompt(prompt)}
                    className={`text-left text-[11px] px-2.5 py-1.5 transition-colors border ${
                      message === prompt
                        ? 'bg-[#c9a84c]/20 border-[#c9a84c] text-[#ffe08f]'
                        : 'bg-[#121212] border-[#c9a84c]/15 text-[#d0c5b2] hover:border-[#c9a84c]/50 hover:text-[#f5f5f5]'
                    }`}
                  >
                    ✦ {prompt}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Footer & Send to WhatsApp CTA */}
          <div className="p-3 bg-[#0d0d0d] border-t border-[#c9a84c]/20 space-y-2">
            <div className="relative">
              <textarea
                rows={2}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message or custom inquiry..."
                className="w-full bg-[#171717] border border-[#c9a84c]/30 p-2.5 text-xs text-[#f5f5f5] placeholder-[#808080] focus:outline-none focus:border-[#25D366] resize-none"
              />
            </div>

            <div className="flex items-center gap-2">
              {/* WhatsApp Launch Action Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setHasInteracted(true)}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-[#050505] text-xs font-semibold uppercase tracking-wider transition-all duration-200 gold-glow"
              >
                {/* Official WhatsApp SVG Icon */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.969.57 3.805 1.555 5.352L2.25 21.75l4.523-1.289c1.484.898 3.227 1.414 5.258 1.414 5.535 0 10.031-4.496 10.031-10.031S17.566 2 12.031 2zm0 18.258c-1.805 0-3.375-.531-4.711-1.453l-.336-.234-2.68.766.758-2.617-.227-.367c-.992-1.391-1.57-3.055-1.57-4.836 0-4.492 3.656-8.148 8.148-8.148 4.492 0 8.148 3.656 8.148 8.148 0 4.492-3.656 8.148-8.148 8.148zm4.469-6.094c-.242-.125-1.438-.711-1.664-.797-.227-.086-.391-.125-.555.125-.164.242-.641.797-.781.961-.148.164-.297.188-.539.062-.242-.125-1.023-.375-1.945-1.203-.719-.641-1.203-1.438-1.344-1.68-.148-.242-.016-.375.109-.492.109-.109.242-.281.367-.422.125-.141.164-.242.242-.406.086-.164.047-.312-.023-.438-.07-.125-.555-1.336-.766-1.836-.203-.492-.414-.422-.57-.43-.148-.008-.312-.008-.477-.008s-.438.062-.664.312c-.227.242-.867.844-.867 2.062s.883 2.398 1.008 2.562c.125.164 1.734 2.656 4.203 3.719.586.25 1.047.406 1.406.523.594.188 1.141.164 1.57.098.477-.07 1.438-.586 1.641-1.156.203-.57.203-1.055.141-1.156-.062-.102-.227-.164-.469-.289z" />
                </svg>
                <span>Start WhatsApp Chat</span>
              </a>

              {/* Direct Dial Call Icon Button */}
              <a
                href={`tel:${phoneNumber}`}
                className="p-2.5 bg-[#171717] hover:bg-[#c9a84c]/20 border border-[#c9a84c]/30 text-[#e5c76b] hover:text-[#f5f5f5] transition-colors"
                title={`Call Concierge at ${displayNumber}`}
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Trigger Button on One Side */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setHasInteracted(true);
        }}
        className={`group relative flex items-center gap-3 px-4 py-3 rounded-full transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.8)] border ${
          isOpen
            ? 'bg-[#102a1b] border-[#25D366] text-[#f5f5f5]'
            : 'bg-[#0b1710] hover:bg-[#102a1b] border-[#25D366]/60 hover:border-[#25D366] text-[#e5e2e1]'
        }`}
        title="Open WhatsApp Concierge (+94 77 808 4913)"
      >
        {/* Glowing pulse ring if not yet interacted */}
        {!hasInteracted && !isOpen && (
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping opacity-60 pointer-events-none" />
        )}

        {/* WhatsApp Icon Circle with active status dot */}
        <div className="relative w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-[#050505] shadow-md group-hover:scale-105 transition-transform">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.969.57 3.805 1.555 5.352L2.25 21.75l4.523-1.289c1.484.898 3.227 1.414 5.258 1.414 5.535 0 10.031-4.496 10.031-10.031S17.566 2 12.031 2zm0 18.258c-1.805 0-3.375-.531-4.711-1.453l-.336-.234-2.68.766.758-2.617-.227-.367c-.992-1.391-1.57-3.055-1.57-4.836 0-4.492 3.656-8.148 8.148-8.148 4.492 0 8.148 3.656 8.148 8.148 0 4.492-3.656 8.148-8.148 8.148zm4.469-6.094c-.242-.125-1.438-.711-1.664-.797-.227-.086-.391-.125-.555.125-.164.242-.641.797-.781.961-.148.164-.297.188-.539.062-.242-.125-1.023-.375-1.945-1.203-.719-.641-1.203-1.438-1.344-1.68-.148-.242-.016-.375.109-.492.109-.109.242-.281.367-.422.125-.141.164-.242.242-.406.086-.164.047-.312-.023-.438-.07-.125-.555-1.336-.766-1.836-.203-.492-.414-.422-.57-.43-.148-.008-.312-.008-.477-.008s-.438.062-.664.312c-.227.242-.867.844-.867 2.062s.883 2.398 1.008 2.562c.125.164 1.734 2.656 4.203 3.719.586.25 1.047.406 1.406.523.594.188 1.141.164 1.57.098.477-.07 1.438-.586 1.641-1.156.203-.57.203-1.055.141-1.156-.062-.102-.227-.164-.469-.289z" />
          </svg>
        </div>

        {/* Text Details */}
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-semibold text-[#f5f5f5] tracking-wide">
              {isOpen ? 'Close Concierge' : 'WhatsApp Desk'}
            </span>
            <span className="w-2 h-2 rounded-full bg-[#25D366] inline-block animate-pulse" />
          </div>
          <span className="text-[10px] font-mono text-[#c9a84c] tracking-wider">
            {displayNumber}
          </span>
        </div>
      </button>
    </div>
  );
};
