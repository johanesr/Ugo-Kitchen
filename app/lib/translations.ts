export const translations = {
  id: {
    // Navigation
    nav: {
      products: "Produk",
      about: "Tentang",
      visitUs: "Kunjungi Kami",
    },

    // Hero
    hero: {
      tagline: "Kue Kering Homemade dari Jakarta",
      subtitle:
        "Kue kering homemade dengan cinta. Dibuat fresh dengan bahan premium dan resep keluarga.",
      ctaExplore: "Lihat Koleksi Kami",
      ctaVisit: "Kunjungi Toko Kami",
    },

    // Products
    products: {
      tagline: "Kue Kering Homemade",
      title: "Koleksi Kue Kami",
      description:
        "Setiap kue dibuat dengan penuh cinta, menggunakan resep turun-temurun dan bahan-bahan berkualitas premium.",
      regular: "Toples Regular",
      large: "Toples Besar",
      note: "Tersedia untuk pesanan hampers dan acara spesial. Hubungi kami!",
    },

    // Product descriptions
    productItems: {
      semprit: "Butter cookies dengan tekstur lembut yang meleleh di mulut",
      saguKeju: "Kue sagu renyah dengan rasa keju yang gurih",
      putriSalju: "Kue salju putih bertabur gula halus",
      skippy: "Kue kacang renyah dengan rasa kacang yang kaya",
      nastar: "Kue nanas klasik dengan isian manis keemasan",
    },

    // About
    about: {
      tagline: "Cerita Kami",
      title: "Dibuat dengan Hati",
      p1: "Ugo Kitchen lahir dari mimpi sederhana: membawa kehangatan kue rumahan ke hati Jakarta. Berawal dari dapur kecil, kini kami hadir dengan koleksi kue kering favorit keluarga Indonesia.",
      p2: "Kami percaya bahwa kue yang enak adalah hasil dari kesabaran, bahan berkualitas, dan cinta yang tulus. Setiap toples kue dibuat fresh dengan resep yang telah disempurnakan dari waktu ke waktu.",
      p3: "Di masa depan, kami bermimpi untuk menjadi lebih dari sekadar toko kue—sebuah café yang nyaman di mana komunitas berkumpul menikmati kue dan kopi bersama.",
      signature: "Dari dapur kami untuk Anda",
    },

    // Contact
    contact: {
      visitTagline: "Kunjungi Kami",
      visitTitle: "Datang Menyapa",
      location: "Lokasi",
      locationValue: "Jakarta, Indonesia",
      locationNote: "(Alamat lengkap segera hadir)",
      hours: "Jam Buka",
      hoursValue1: "Selasa – Minggu",
      hoursValue2: "08.00 – 18.00",
      hoursNote: "Tutup hari Senin",
      contactLabel: "Kontak",
      connectTagline: "Tetap Terhubung",
      connectTitle: "Ikuti Perjalanan Kami",
      connectDescription:
        "Jadilah yang pertama tahu tentang kue baru, penawaran spesial, dan perjalanan kami menjadi café.",
      copyright: "© 2026 Ugo Kitchen. Dibuat dengan cinta di Jakarta.",
    },

    // WhatsApp
    whatsapp: {
      orderButton: "Pesan via WhatsApp",
      orderButtonShort: "Pesan",
    },
  },

  en: {
    // Navigation
    nav: {
      products: "Products",
      about: "About",
      visitUs: "Visit Us",
    },

    // Hero
    hero: {
      tagline: "Homemade Cookies from Jakarta",
      subtitle:
        "Homemade cookies made with love. Freshly baked with premium ingredients and family recipes.",
      ctaExplore: "Explore Our Collection",
      ctaVisit: "Visit Our Store",
    },

    // Products
    products: {
      tagline: "Homemade Cookies",
      title: "Our Cookie Collection",
      description:
        "Every cookie is crafted with love, using traditional family recipes and premium quality ingredients.",
      regular: "Regular Jar",
      large: "Large Jar",
      note: "Available for hampers and special occasions. Contact us!",
    },

    // Product descriptions
    productItems: {
      semprit: "Butter cookies with a delicate, melt-in-your-mouth texture",
      saguKeju: "Crispy sago cookies with savory cheese flavor",
      putriSalju: "Snow white cookies dusted with powdered sugar",
      skippy: "Crunchy peanut butter cookies with rich nutty flavor",
      nastar: "Classic pineapple tarts with sweet, golden filling",
    },

    // About
    about: {
      tagline: "Our Story",
      title: "Baked with Heart",
      p1: "Ugo Kitchen was born from a simple dream: to bring the warmth of homemade cookies to the heart of Jakarta. What started in a small kitchen has grown into a beloved collection of Indonesian family favorites.",
      p2: "We believe that great cookies come from patience, quality ingredients, and genuine love. Every jar is made fresh using recipes that have been perfected over time.",
      p3: "Looking ahead, we dream of becoming more than just a cookie shop—a cozy café where the community gathers over treats and great coffee.",
      signature: "From our kitchen to yours",
    },

    // Contact
    contact: {
      visitTagline: "Visit Us",
      visitTitle: "Come Say Hello",
      location: "Location",
      locationValue: "Jakarta, Indonesia",
      locationNote: "(Full address coming soon)",
      hours: "Hours",
      hoursValue1: "Tuesday – Sunday",
      hoursValue2: "8:00 AM – 6:00 PM",
      hoursNote: "Closed on Mondays",
      contactLabel: "Contact",
      connectTagline: "Stay Connected",
      connectTitle: "Follow Our Journey",
      connectDescription:
        "Be the first to know about new cookies, special offers, and our journey to becoming a full café.",
      copyright: "© 2025 Ugo Kitchen. Crafted with love in Jakarta.",
    },

    // WhatsApp
    whatsapp: {
      orderButton: "Order via WhatsApp",
      orderButtonShort: "Order",
    },
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.id;
