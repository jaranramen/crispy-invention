// menu-data.js
// 価格は “数値” で持つ：表示は app.js で locale に合わせてフォーマット
window.MENU = {
    options: {
      defaultLang: "en",
      currency: "IRR",        // 表示したくないなら app.js 側で非表示化可能
      showCurrencySymbol: false,
      imageBasePath: "./assets/menu/",
      imageDefaultExt: "jpg",
      imageFallback: "./assets/placeholder-food.webp",
    },
  
    i18n: {
      en: {
        commitment: "The transparent umami of chicken. We only use our owner's proud, pure chicken broth—light yet deeply flavorful.",
        sections: {
          ramen: "Ramen",
          bowls: "Rice Bowls",
          sides: "Side Dishes",
          toppings: "Toppings",
          desserts: "Desserts",
          drinks: "Drinks",
        },
        footer: "All prices are exclusive of tax. A separate 10% consumption tax will be charged.",
        labels: {
          comingSoon: "COMING SOON" // en
        }
      },
      fa: {
        commitment: "طعم اومامی شفاف مرغ. ما فقط از آب مرغ خالص استفاده می‌کنیم—سبک و در عین حال عمیقاً خوشمزه.",
        sections: {
          ramen: "رامن",
          bowls: "کاسه برنج (دون‌مونو)",
          sides: "غذاهای جانبی",
          toppings: "مخلفات",
          desserts: "دسر",
          drinks: "نوشیدنی",
        },
        footer: "تمام قیمت‌ها بدون احتساب مالیات هستند. 10% مالیات بر مصرف جداگانه دریافت خواهد شد.",
        labels: {
          comingSoon: "به‌زودی"
        }
      },
    },
  
    // カテゴリは配列にしておくと、追加・並べ替えが簡単
    categories: [
      {
        key: "ramen",
        icon: "🍜",
        items: [
          {
            id: "ramen-shoyu",
            name: { en: "Shoyu Ramen", fa: "رامن شویو" },
            descShort: { en: "Classic soy sauce flavor.", fa: "طعم سویا کلاسیک." },
            descLong: {
              en: "A clean chicken broth with classic shoyu aroma. Balanced umami, light finish.",
              fa: "آب مرغ شفاف با عطر کلاسیک شویو. اومامی متعادل و پایان سبک.",
            },
            price: 3500000,
            // image を省略すると assets/menu/{id}.webp を参照
            // image: "ramen-shoyu.webp",
            tags: ["signature"],
          },
          {
            id: "ramen-shio",
            name: { en: "Shio Ramen", fa: "رامن شیو" },
            descShort: { en: "Pure chicken & salt broth.", fa: "مرغ و نمک خالص." },
            descLong: {
              en: "Salt-forward, crystal-clear chicken broth. Simple and aromatic.",
              fa: "آب مرغ شفاف با تمرکز بر نمک. ساده و خوش‌عطر.",
            },
            price: 3500000,
            tags: ["light"],
          },
          {
            id: "ramen-miso",
            name: { en: "Miso Ramen", fa: "رامن میسو" },
            descShort: { en: "Rich and fragrant miso.", fa: "میسو معطر و غنی." },
            descLong: {
              en: "Chicken broth blended with miso for a deeper, richer profile.",
              fa: "ترکیب آب مرغ با میسو برای طعمی عمیق‌تر و غنی‌تر.",
            },
            price: 4500000,
            tags: ["rich"],
          },
        ],
      },
  
      {
        key: "bowls",
        icon: "🍚",
        items: [
          {
            id: "bowl-chashu-don",
            name: { en: "Chashu-don", fa: "چاشو-دون" },
            descShort: { en: "Tender pork over rice.", fa: "گوشت مرغ　نرم روی برنج." },
            descLong: {
              en: "Slow-cooked chashu served over steamed rice. Comforting and filling.",
              fa: "چاشوی آرام‌پز روی برنج بخارپز. سیرکننده و خوش‌خوراک.",
            },
            price: 2500000,
            tags: ["popular"],
            // status: "comingSoon" // ← これ
          },
          {
            id: "bowl-karaage-don",
            name: { en: "Karaage-don", fa: "کاراآگه-دون" },
            descShort: { en: "Fried chicken over rice.", fa: "مرغ سوخاری روی برنج." },
            descLong: {
              en: "Crispy karaage with sauce over rice. Great with a side soup.",
              fa: "کاراآگه ترد با سس روی برنج. عالی کنار سوپ.",
            },
            price: 2500000,
          },
          {
            id: "bowl-soboro-don",
            name: { en: "Soboro-don", fa: "سوبورو-دون" },
            descShort: { en: "Minced chicken over rice.", fa: "مرغ چرخ‌کرده روی برنج." },
            descLong: {
              en: "Seasoned minced chicken over rice. Mild and kid-friendly.",
              fa: "مرغ چرخ‌کرده مزه‌دار روی برنج. ملایم و مناسب خانواده.",
            },
            price: 2000000,
          },
          {
          id: "bowl-flakes-don",
          name: { en: "flacks-don", fa: "سوبورو-دون" },
          descShort: { en: "Chicken flakes over rice.", fa: "تکه‌های مرغ روی برنج" },
          descLong: {
            en: "Flavoured fillet chicken flakes over rice. Mild and kid-friendly.",
            fa: "مرغ چرخ‌کرده مزه‌دار روی برنج. ملایم و مناسب خانواده.",
          },
          price: 2000000,
        },
        ],
      },
  
      {
        key: "sides",
        icon: "🥟",
        items: [
          {
            id: "side-gyoza",
            name: { en: "Gyoza", fa: "گیوزا" },
            descShort: { en: "Crispy dumplings (4pcs).", fa: "دامپلینگ ترد (4 تکه)." },
            descLong: {
              en: "Pan-fried gyoza with a crisp base. Served with dipping sauce.",
              fa: "گیوزای سرخ‌شده با کف ترد. همراه سس مخصوص.",
            },
            price: 1500000,
          },
          {
            id: "side-karaage",
            name: { en: "Karaage", fa: "کاراآگه" },
            descShort: { en: "Juicy fried chicken (5pcs).", fa: "مرغ سوخاری آبدار (5 تکه)." },
            descLong: {
              en: "Juicy karaage, freshly fried. Best eaten hot.",
              fa: "کاراآگه آبدار و تازه‌سرخ‌شده. بهترین حالت داغ.",
            },
            price: 1500000,
          },
          // {
          //   id: "side-rice",
          //   name: { en: "Rice", fa: "برنج" },
          //   descShort: { en: "Steamed Japanese rice.", fa: "برنج ژاپنی بخارپز." },
          //   descLong: { en: "A bowl of steamed rice.", fa: "یک کاسه برنج بخارپز." },
          //   price: 1000000,
          // },
        ],
      },
  
      {
        key: "toppings",
        icon: "🥚",
        items: [
          {
            id: "top-ajitama",
            name: { en: "Ajitama", fa: "آجی-تاما" },
            descShort: { en: "Marinated egg.", fa: "تخم مرغ مزه‌دار شده." },
            descLong: { en: "Soy-marinated soft-boiled egg.", fa: "تخم‌مرغ نیم‌پز مزه‌دار شده با سویا." },
            price: 500000,
          },
          {
            id: "top-chashu",
            name: { en: "Chashu", fa: "چاشو" },
            descShort: { en: "Extra 3 slices of chashu.", fa: "ورقه‌های اضافی گوشت." },
            descLong: { en: "Extra 3 slices of chashu. ", fa: "چند ورقه چاشوی اضافه." },
            price: 1000000,
          },
          // {
          //   id: "top-negi",
          //   name: { en: "Negi", fa: "نگی" },
          //   descShort: { en: "Fresh scallions.", fa: "پیازچه تازه." },
          //   descLong: { en: "Fresh chopped scallions.", fa: "پیازچه تازه خرد شده." },
          //   price: 300000,
          // },
          // {
          //   id: "top-nori",
          //   name: { en: "Nori", fa: "نوری" },
          //   descShort: { en: "Dried seaweed.", fa: "جلبک دریایی خشک." },
          //   descLong: { en: "Crisp nori sheets.", fa: "ورقه‌های نوری ترد." },
          //   price: 500000,
          // },
          {
            id: "top-soboro",
            name: { en: "Soboro", fa: "سوبورو" },
            descShort: { en: "Minced chicken topping.", fa: "مرغ چرخ‌کرده اضافی." },
            descLong: { en: "Seasoned minced chicken.", fa: "مرغ چرخ‌کرده مزه‌دار." },
            price: 1000000,
          },
        ],
      },
  
      {
        key: "desserts",
        icon: "🍮",
        items: [
          {
            id: "dessert-creme-brulee",
            name: { en: "Crème Brûlée", fa: "کرم بروله" },
            descShort: { en: "Rich custard dessert.", fa: "دسر کاستارد غنی." },
            descLong: { en: "Silky custard with caramelized sugar top.", fa: "کاستارد لطیف با رویه کاراملی." },
            price: 1000000,
            status: "comingSoon" // ← これ
          },
        ],
      },
  
      {
        key: "drinks",
        icon: "🥤",
        items: [
          {
            id: "drink-cola",
            name: { en: "Cola", fa: "کولا" },
            descShort: { en: "Refreshing soft drink.", fa: "نوشابه گازدار خنک." },
            descLong: { en: "Served chilled.", fa: "سرد سرو می‌شود." },
            price: 250000,
          },
          {
            id: "drink-water",
            name: { en: "Water", fa: "آب" },
            descShort: { en: "Mineral water.", fa: "آب معدنی." },
            descLong: { en: "Still mineral water.", fa: "آب معدنی بدون گاز." },
            price: 100000,
          },
        ],
      },
    ],
  };
  
