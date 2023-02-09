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
        introQ: "Why should You choose us ?",
        contact: "Contact",
        introText: "Best options ever exist",
        introBoxT1: "CUSTOMER SERVICES",
        introBoxT2: "OPTIONS",
        introBoxT3: "PRICES",
        introBoxT4: "INSTALLATION",
        introBoxI1: "Our Call Center Ready To Help You 24/7",
        introBoxI2: "Our Special Designers Help You To Choose The Best Match",
        introBoxI3: "Affordable Prices With Huge Discounts",
        introBoxI4: "We Completenstallation Within 1-3 Work Days",
        vidBox1: "EXPLORE MORE",
        vidBox2: "NEXT GENERATION OF",
        vidBox3: "SHOWER CABIN",
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
        introBoxI1: "Çağrı Merkezimiz 7/24 Size Yardımcı Olmaya Hazır",
        introBoxI2:
          "Özel Tasarımcılarımız Size En Uygun Eşleşmeyi Seçmenize Yardımcı Olur",
        introBoxI3: "Büyük İndirimlerle Uygun Fiyatlar",
        introBoxI4: "Kurulumu 1-3 İş Günü İçerisinde Tamamlıyoruz",
        vidBox1: "YENI NESİL",
        vidBox2: "DUŞ KABİNİ HAKKINDA",
        vidBox3: "DAHA FAZLASINI KESF EDIN",
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
        introBoxI1: "Наш Колл-Центр Готов Помочь Вам 24/7",
        introBoxI2:
          "Наши Cпециальные дизайнеры помогут вам выбрать лучший вариант",
        introBoxI3: "Доступные Цены с огромными скидками",
        introBoxI4: "Мы завершаем установку в течение 1-3 рабочих дней",
        vidBox1: "УЗНАТЬ БОЛЬШЕ",
        vidBox2: "СЛЕДУЮЩЕЕ ПОКОЛЕНИЕ",
        vidBox3: "ДУШЕВАЯ КАБИНА",
      },
    },
  },
});

export default i18n;
