import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  // language resources
  resources: {
    en: {
      translation: {
        ordernow: "ORDER NOW!",
        introQ: "Why Should You Choose Us ?",
        contact: "Contact",
        introText: "Best options ever exist",
        introBoxT1: "CUSTOMER SERVICES",
        introBoxT2: "OPTIONS",
        introBoxT3: "PRICES",
        introBoxT4: "INSTALLATION",
        introBoxI1: "Our Call Center Ready To Help You ",
        introBoxI2: "Our Special Designers Help You To Choose The Best Match",
        introBoxI3: "Affordable Prices With Huge Discounts",
        introBoxI4: "We Completenstallation Within 5-7 Work Days",
        vidBox1: "EXPLORE MORE",
        vidBox2: "NEXT GENERATION OF",
        vidBox3: "SHOWER CABIN",
        textpart2t: "Shower Cabin",
        textpart2:
          "Perfect Place With Perfect Cabin A shower cabin is a type of all-in-one shower unit that combines a shower, tray (or bath), enclosure, back panel, and other elements into a single, unifie structure.",
        aboutt1:
          "You are welcome to visit our factory showroom which is open Monday to Friday 08.00am till 6.00pm but",
        aboutt2:
          "Please call our sales office first if you are travelling to see a particular item as not all items are on show.",
      },
    },
    tr: {
      translation: {
        ordernow: "HEMEN SIPARIS VER!",
        introQ: "Neden bizi tercih etmelisiniz ?",
        contact: "Contact",
        introText: "Şimdiye kadarki en iyi seçenekler",
        introBoxT1: "MÜŞTERİ HİZMETLERİ",
        introBoxT2: "SEÇENEKLER",
        introBoxT3: "FİYATLER",
        introBoxT4: "KURULUM",
        introBoxI1: "Çağrı Merkezimiz Size Yardımcı Olmaya Hazır",
        introBoxI2:
          "Özel Tasarımcılarımız Size En Uygun Eşleşmeyi Seçmenize Yardımcı Olur",
        introBoxI3: "Büyük İndirimlerle Uygun Fiyatlar",
        introBoxI4: "Kurulumu 5-7 İş Günü İçerisinde Tamamlıyoruz",
        vidBox1: "YENI NESİL",
        vidBox2: "DUŞ KABİNİ HAKKINDA",
        vidBox3: "DAHA FAZLASINI KESF EDIN",
        textpart2t: "Duş Kabini",
        textpart2:
          "Mükemmel Kabin ile Mükemmel Yer Duşakabin, duş, tepsi (veya küvet), muhafaza, arka panel ve diğer unsurları tek bir yekpare yapıda birleştiren hepsi bir arada duş ünitesi türüdür.",
        aboutt1:
          "Pazartesiden Cumaya 08:00 - 18:00 saatleri arasında açık olan fabrika showroomumuzu ziyaret etmenizi bekliyoruz ancak",
        aboutt2:
          "Belirli bir ürünü görmek için seyahat ediyorsanız, tüm ürünler sergilenmediğinden, lütfen önce satış ofisimizi arayın.",
      },
    },
    ru: {
      translation: {
        ordernow: "ЗАКАЗАТЬ СЕЙЧАС!",
        introQ: "Почему стоит выбрать нас ?",
        contact: "Контакт",
        introText: "Лучшие варианты, которые когда-либо существовали",
        introBoxT1: "ОБСЛУЖИВАНИЕ КЛИЕНТОВ",
        introBoxT2: "ВЫБОРЫ",
        introBoxT3: "ЦЕНЫ",
        introBoxT4: "МОНТАЖ",
        introBoxI1: "Наш Колл-Центр Готов Помочь Вам",
        introBoxI2:
          "Наши Cпециальные дизайнеры помогут вам выбрать лучший вариант",
        introBoxI3: "Доступные Цены с огромными скидками",
        introBoxI4: "Мы завершаем установку в течение 5-7 рабочих дней",
        vidBox1: "УЗНАТЬ БОЛЬШЕ",
        vidBox2: "СЛЕДУЮЩЕЕ ПОКОЛЕНИЕ",
        vidBox3: "ДУШЕВАЯ КАБИНА",
        textpart2t: "Душевая Кабина",
        textpart2:
          "Идеальное место с идеальной кабиной Душевая кабина представляет собой тип универсального душевого блока, который объединяет душ, поддон (или ванну), ограждение, заднюю панель и другие элементы в единую унифицированную конструкцию.",
        aboutt1:
          "Приглашаем посетить наш заводской выставочный зал, который открыт с понедельника по пятницу с 08:00 до 18:00, но",
        aboutt2:
          "Пожалуйста, сначала позвоните в наш офис продаж, если вы путешествуете, чтобы увидеть конкретный товар, так как не все товары представлены на выставке.",
      },
    },
  },
});

export default i18n;
