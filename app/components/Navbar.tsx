"use client";

import { useState } from "react";
import { useLanguage } from "../lib/LanguageContext";

const WHATSAPP_NUMBER = "6281234567890";

function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 text-sm">
      <button
        onClick={() => setLanguage("id")}
        className={`px-2 py-1 rounded transition-colors ${
          language === "id"
            ? "bg-brown text-cream"
            : "text-text-muted hover:text-brown-dark"
        }`}
      >
        ID
      </button>
      <span className="text-brown-light">/</span>
      <button
        onClick={() => setLanguage("en")}
        className={`px-2 py-1 rounded transition-colors ${
          language === "en"
            ? "bg-brown text-cream"
            : "text-text-muted hover:text-brown-dark"
        }`}
      >
        EN
      </button>
    </div>
  );
}

function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { t } = useLanguage();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-brown-dark/50 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-cream z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-brown-dark hover:text-brown transition-colors"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Logo */}
          <p className="font-[family-name:var(--font-playfair)] text-2xl text-brown-dark mb-8">
            Ugo Kitchen
          </p>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-4">
            <a
              href="#products"
              onClick={onClose}
              className="text-lg text-text-muted hover:text-brown-dark transition-colors py-2 border-b border-brown/10"
            >
              {t.nav.products}
            </a>
            <a
              href="#about"
              onClick={onClose}
              className="text-lg text-text-muted hover:text-brown-dark transition-colors py-2 border-b border-brown/10"
            >
              {t.nav.about}
            </a>
          </nav>

          {/* WhatsApp Order Button */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Halo Ugo Kitchen! Saya ingin memesan kue."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#25D366] text-white rounded-full hover:bg-[#20bd5a] transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {t.whatsapp.orderButton}
          </a>

          {/* Language Toggle */}
          <div className="mt-6 flex justify-center">
            <LanguageToggle />
          </div>
        </div>
      </div>
    </>
  );
}

export default function Navbar() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      <nav className="fixed top-0 left-0 right-0 z-40 bg-cream/80 backdrop-blur-md border-b border-brown/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#"
            className="font-[family-name:var(--font-playfair)] text-2xl text-brown-dark"
          >
            Ugo Kitchen
          </a>
          <div className="flex items-center gap-4 sm:gap-8">
            {/* Desktop Navigation */}
            <div className="hidden sm:flex gap-8 text-sm">
              <a
                href="#products"
                className="text-text-muted hover:text-brown-dark transition-colors"
              >
                {t.nav.products}
              </a>
              <a
                href="#about"
                className="text-text-muted hover:text-brown-dark transition-colors"
              >
                {t.nav.about}
              </a>
            </div>

            {/* Language Toggle - Desktop only */}
            <div className="hidden sm:block">
              <LanguageToggle />
            </div>

            {/* Hamburger Menu Button - Mobile only */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="sm:hidden p-2 text-brown-dark hover:text-brown transition-colors"
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
