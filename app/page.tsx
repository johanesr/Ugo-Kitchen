"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "./lib/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const WHATSAPP_NUMBER = "+6281807859239";
const INSTAGRAM_URL = "https://www.instagram.com/ugokitchen.id/";

const products = [
  {
    name: "Kue Semprit",
    descriptionKey: "semprit" as const,
    image: "/products/semprit.jpg",
    priceRegular: 45000,
    priceLarge: 75000,
  },
  {
    name: "Sagu Keju",
    descriptionKey: "saguKeju" as const,
    image: "/products/sagu-keju.jpg",
    priceRegular: 50000,
    priceLarge: 80000,
  },
  {
    name: "Kue Putri Salju",
    descriptionKey: "putriSalju" as const,
    image: "/products/putri-salju.jpg",
    priceRegular: 55000,
    priceLarge: 85000,
  },
  {
    name: "Kue Skippy",
    descriptionKey: "skippy" as const,
    image: "/products/skippy.jpg",
    priceRegular: 60000,
    priceLarge: 95000,
  },
  {
    name: "Nastar",
    descriptionKey: "nastar" as const,
    image: "/products/nastar.jpg",
    priceRegular: 75000,
    priceLarge: 120000,
  },
];

function formatPrice(price: number) {
  return new Intl.NumberFormat("id-ID").format(price);
}

function WhatsAppFloatingButton() {
  const { t } = useLanguage();

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Halo Ugo Kitchen! Saya ingin memesan kue."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20bd5a] hover:shadow-xl transition-all duration-300 hover:scale-105"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      <span className="hidden sm:inline font-medium">{t.whatsapp.orderButton}</span>
      <span className="sm:hidden font-medium">{t.whatsapp.orderButtonShort}</span>
    </a>
  );
}

function ProductCard({
  name,
  descriptionKey,
  image,
  priceRegular,
  priceLarge,
  regularLabel,
  largeLabel,
}: {
  name: string;
  descriptionKey: keyof typeof import("./lib/translations").translations.id.productItems;
  image: string;
  priceRegular: number;
  priceLarge: number;
  regularLabel: string;
  largeLabel: string;
}) {
  const { t } = useLanguage();
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-cream mb-4">
        {imageError ? (
          <div className="absolute inset-0 flex items-center justify-center text-brown-light">
            <svg
              className="w-16 h-16 opacity-30 group-hover:opacity-50 transition-opacity"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
            </svg>
          </div>
        ) : (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setImageError(true)}
          />
        )}
        <div className="absolute inset-0 bg-brown/0 group-hover:bg-brown/10 transition-colors duration-300" />
      </div>
      <h3 className="font-[family-name:var(--font-playfair)] text-xl text-brown-dark mb-1">
        {name}
      </h3>
      <p className="text-text-muted text-sm mb-3">
        {t.productItems[descriptionKey]}
      </p>
      <div className="flex flex-col gap-1 text-sm">
        <div className="flex justify-between">
          <span className="text-text-muted">{regularLabel}</span>
          <span className="text-brown font-medium">
            Rp {formatPrice(priceRegular)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-text-muted">{largeLabel}</span>
          <span className="text-brown font-medium">
            Rp {formatPrice(priceLarge)}
          </span>
        </div>
      </div>
    </div>
  );
}

function AboutImage() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-cream-dark">
      {imageError ? (
        <div className="absolute inset-0 flex items-center justify-center text-brown-light">
          <svg
            className="w-24 h-24 opacity-30"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
          </svg>
        </div>
      ) : (
        <Image
          src="/promotion/promotion.jpg"
          alt="Ugo Kitchen"
          fill
          className="object-cover"
          onError={() => setImageError(true)}
        />
      )}
    </div>
  );
}

function Divider() {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="w-16 h-px bg-terracotta-light" />
      <div className="mx-4 text-terracotta">✦</div>
      <div className="w-16 h-px bg-terracotta-light" />
    </div>
  );
}

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <WhatsAppFloatingButton />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235D4037' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-terracotta tracking-[0.3em] uppercase text-sm mb-6 animate-fade-in-up opacity-0">
            {t.hero.tagline}
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-6xl md:text-8xl text-brown-dark mb-6 animate-fade-in-up opacity-0 animation-delay-200">
            Ugo Kitchen
          </h1>
          <p className="text-xl md:text-2xl text-text-muted max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up opacity-0 animation-delay-400">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0 animation-delay-600">
            <a
              href="#products"
              className="inline-flex items-center justify-center px-8 py-4 bg-brown text-cream rounded-full hover:bg-brown-dark transition-colors duration-300 text-sm tracking-wide"
            >
              {t.hero.ctaExplore}
            </a>
          </div>

          {/* Social links */}
          <div className="flex gap-4 justify-center mt-8 animate-fade-in-up opacity-0 animation-delay-600">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-brown/10 hover:bg-brown/20 flex items-center justify-center transition-colors text-brown-dark"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-brown/10 hover:bg-brown/20 flex items-center justify-center transition-colors text-brown-dark"
              aria-label="WhatsApp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-brown-light"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 px-6 bg-cream-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-terracotta tracking-[0.2em] uppercase text-sm mb-4">
              {t.products.tagline}
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-brown-dark mb-6">
              {t.products.title}
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              {t.products.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.name}
                {...product}
                regularLabel={t.products.regular}
                largeLabel={t.products.large}
              />
            ))}
          </div>

          <Divider />

          <div className="text-center">
            <p className="text-text-muted italic">{t.products.note}</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AboutImage />

            {/* Content */}
            <div>
              <p className="text-terracotta tracking-[0.2em] uppercase text-sm mb-4">
                {t.about.tagline}
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-brown-dark mb-8">
                {t.about.title}
              </h2>
              <div className="space-y-6 text-text-muted leading-relaxed">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <div className="w-12 h-px bg-terracotta" />
                <span className="font-[family-name:var(--font-playfair)] text-brown-dark italic">
                  {t.about.signature}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
