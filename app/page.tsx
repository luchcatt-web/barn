"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#about", label: "О доме" },
  { href: "#inside", label: "Что внутри" },
  { href: "#format", label: "Формат отдыха" },
  { href: "#price", label: "Стоимость" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#booking", label: "Бронирование" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-white">
      <Header />

      <main className="flex-1">
        <Hero />
        <About />
        <Inside />
        <Format />
        <Price />
        <Reviews />
        <Booking />
      </main>

      <FloatingBookingButton />
      <FloatingWhatsAppButton />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-amber-400 to-rose-400" />
          <div className="flex flex-col leading-tight">
            <span className="text-[11px] font-light uppercase tracking-[0.25em] text-white/60">
              rent32
            </span>
            <span className="text-lg font-semibold">Barn House в Брянске</span>
          </div>
        </Link>

        <nav className="hidden gap-6 text-sm text-white/70 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#booking"
          className="hidden rounded-full border border-white/20 px-4 py-1.5 text-sm md:inline-flex hover:border-white hover:bg-white hover:text-black transition"
        >
          Забронировать
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Видео для мобильных устройств */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="pointer-events-none absolute inset-0 h-full w-full object-cover md:hidden"
      >
        <source src="/IMG_6595.MP4" type="video/mp4" />
        {/* Fallback на фото, если видео не загрузится */}
      </video>

      {/* Фото для десктопа */}
      <div
        className="pointer-events-none absolute inset-0 hidden bg-cover bg-center md:block"
        style={{
          backgroundImage:
            "url('/2025-12-04 22.57.09.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-4 pt-24 pb-16 md:flex-row md:items-center md:justify-center md:pb-24">
        <div className="max-w-xl md:text-center md:mx-auto">
          <p className="mb-6 text-xs uppercase tracking-[0.5em] text-white/50 font-light">
            барнхаус для камерного отдыха
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href="#booking"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-8 py-4 text-sm font-semibold text-black shadow-2xl shadow-amber-500/50 transition-all duration-300 hover:scale-105 hover:shadow-amber-500/70"
            >
              <span className="relative z-10">Забронировать даты</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
            <a
              href="#inside"
              className="group rounded-full border-2 border-white/30 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10"
            >
              Посмотреть, что внутри
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-xs text-white/70">
            <div className="text-center">
              <p className="font-semibold text-white mb-1">до 4–6 гостей</p>
              <p className="text-white/60">комфортно для небольшой компании</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-white mb-1">10 мин от Брянска</p>
              <p className="text-white/60">удобный подъезд по асфальту</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-white mb-1">формат "под ключ"</p>
              <p className="text-white/60">посуда, бельё, мангал — всё на месте</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex-1 md:mt-0 md:flex md:justify-center">
          <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-2xl">
            <HeroCard title="Тёплая купель" subtitle="расслабление и отдых в любое время года" />
            <HeroCard title="Беседка" subtitle="завтраки, закаты и гриль на улице" />
            <HeroCard title="Праздники" subtitle="дни рождения, предложения, годовщины" />
            <HeroCard title="Фотогеничное пространство" subtitle="интерьер, который сам по себе контент" />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 via-white/5 to-black/40 p-5 text-sm backdrop-blur-xl transition-all duration-300 hover:border-white/40 hover:bg-gradient-to-br hover:from-white/15 hover:via-white/10 hover:to-black/50 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:via-amber-500/5 group-hover:to-amber-500/10 transition-all duration-300" />
      <p className="relative z-10 font-semibold text-white">{title}</p>
      <p className="relative z-10 mt-2 text-xs text-white/70 leading-relaxed">{subtitle}</p>
    </div>
  );
}

function SectionWrapper({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-white/10 bg-neutral-950">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <p className="text-xs uppercase tracking-[0.3em] text-white/40">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-2xl font-semibold md:text-3xl lg:text-4xl">
          {title}
        </h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

function About() {
  return (
    <SectionWrapper
      id="about"
      eyebrow="о доме"
      title="Современный барнхаус в окружении природы"
    >
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-start">
        <div className="space-y-4 text-sm text-white/75 md:text-base">
          <p>
            Барнхаус — это один отдельностоящий дом с большим общим
            пространством, высокими потолками и панорамными окнами. Здесь
            уютно по-семейному и при этом ощущается лёгкий премиум.
          </p>
          <p>
            Локация — рядом с городом, но без соседей "через забор": вокруг
            тишина, воздух и возможность просто выдохнуть. Формат подходит для
            выездных праздников, уикендов вдвоём и небольших компаний.
          </p>
          <p>
            Дом сдаётся только целиком. Никого лишнего — только вы и те, кого
            позвали с собой.
          </p>

          <div className="mt-6 grid gap-4 text-xs text-white/60 md:grid-cols-3">
            <div>
              <p className="font-medium text-white">Площадь дома</p>
              <p>50 м² + терраса</p>
            </div>
            <div>
              <p className="font-medium text-white">Размещение</p>
              <p>до 4–6 гостей</p>
            </div>
            <div>
              <p className="font-medium text-white">Check-in / Check-out</p>
              <p>заезд с 14:00, выезд до 12:00</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="h-56 rounded-3xl bg-gradient-to-tr from-amber-500/40 via-amber-700/40 to-black/80 p-[1px] md:h-72 overflow-hidden">
            <img
              src="/photo/photo1.jpg"
              alt="Барнхаус"
              className="h-full w-full rounded-[1.4rem] object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <img
              src="/photo/photo2.jpg"
              alt="Интерьер"
              className="h-24 w-full rounded-xl object-cover"
            />
            <img
              src="/photo/photo3.jpg"
              alt="Терраса"
              className="h-24 w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

const insideItems = [
  {
    title: "Общее пространство",
    points: [
      "гостиная с большим диваном и столом",
      "панорамные окна с видом на природу",
      "уютная атмосфера для отдыха",
    ],
    image: "/photo/photo5.jpg",
  },
  {
    title: "Спальные места",
    points: [
      "большая кровать размера king size",
      "раскладной диван",
    ],
    image: "/photo/photo11.jpg",
  },
  {
    title: "Кухня",
    points: [
      "плита, холодильник, микроволновка / духовка",
      "набор посуды для приготовления пищи",
      "кофе, чай, питьевая вода",
    ],
    image: "/photo/photo3.jpg",
  },
  {
    title: "Санузел",
    points: [
      "полотенца",
      "банные халаты",
      "тапочки",
    ],
    image: "/photo/photo7.jpg",
  },
  {
    title: "Терраса и улица",
    points: [
      "беседка с мебелью",
      "тёплая купель для отдыха",
      "мангал / гриль, шампуры / решётка",
      "освещение для вечеров на улице",
    ],
    image: "/photo/photo12.jpg",
  },
  {
    title: "Дополнительно",
    points: [
      "Wi-Fi и музыка",
      "настольные игры, пледы, свечи",
      "парковка рядом с домом",
    ],
    image: "/photo/photo9.jpg",
  },
];

function Inside() {
  return (
    <SectionWrapper
      id="inside"
      eyebrow="что внутри"
      title="Всё, что нужно для комфортного выезда"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {insideItems.map((block) => (
          <div
            key={block.title}
            className="group rounded-3xl border border-white/10 bg-white/5 overflow-hidden transition hover:border-white/20"
          >
            {block.image && (
              <div className="h-48 overflow-hidden">
                <img
                  src={block.image}
                  alt={block.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
            )}
            <div className="p-5">
              <h3 className="text-sm font-semibold">{block.title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-white/70">
                {block.points.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      
      {/* Галерея дополнительных фото */}
      <div className="mt-12">
        <p className="mb-6 text-xs uppercase tracking-[0.2em] text-white/40">
          Галерея
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <img
            src="/photo/photo10.jpg"
            alt="Интерьер"
            className="h-48 w-full rounded-2xl object-cover"
          />
          <img
            src="/photo/photo1.jpg"
            alt="Барнхаус"
            className="h-48 w-full rounded-2xl object-cover"
          />
          <img
            src="/photo/photo2.jpg"
            alt="Интерьер"
            className="h-48 w-full rounded-2xl object-cover"
          />
          <img
            src="/photo/photo3.jpg"
            alt="Терраса"
            className="h-48 w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}

function Format() {
  return (
    <SectionWrapper
      id="format"
      eyebrow="формат отдыха"
      title="Для каких случаев подходит барнхаус"
    >
      <div className="grid gap-6 md:grid-cols-3">
        <FormatCard
          title="Тихие выходные"
          text="Приехать вдвоём, рано лечь спать, долго завтракать и просто быть без дел и суеты."
        />
        <FormatCard
          title="Небольшой праздник"
          text="День рождения, предложение, годовщина, девичник. До 4–6 гостей, без шумных вечеринок до утра."
        />
        <FormatCard
          title="Контент и съёмки"
          text="Интерьер подходит для лайфстайл-съёмок, рекламы, контента для соцсетей. Уточняйте условия отдельно."
        />
      </div>
      <p className="mt-6 text-xs text-white/50">
        Важно: формат не подходит для больших шумных компаний и мероприятий с
        громкой музыкой до утра. Бережно относимся к дому и пространству.
      </p>
    </SectionWrapper>
  );
}

function FormatCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className="mt-3 text-sm text-white/75">{text}</p>
    </div>
  );
}

function Price() {
  return (
    <SectionWrapper
      id="price"
      eyebrow="стоимость и условия"
      title="Прозрачные цены и понятные правила"
    >
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-start">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <table className="w-full text-sm">
            <thead className="bg-white/5 text-xs uppercase tracking-[0.2em] text-white/50">
              <tr>
                <th className="px-4 py-3 text-left font-normal">Услуга</th>
                <th className="px-4 py-3 text-left font-normal">Описание</th>
                <th className="px-4 py-3 text-left font-normal">Стоимость</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr>
                <td className="px-4 py-4 align-top">Проживание</td>
                <td className="px-4 py-4 align-top text-white/70">
                  Заселение с 🕑 14:00, выезд до 🕛 12:00
                </td>
                <td className="px-4 py-4 align-top font-medium">
                  10 000 ₽ / сутки
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 align-top">Японская купель фурако</td>
                <td className="px-4 py-4 align-top text-white/70">
                  Без наполнения
                </td>
                <td className="px-4 py-4 align-top font-medium">
                  3 000 ₽
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 align-top">Купель с наполнением</td>
                <td className="px-4 py-4 align-top text-white/70">
                  С цитрусовым наполнением
                </td>
                <td className="px-4 py-4 align-top font-medium">
                  4 500 ₽
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-4 text-sm text-white/75">
          <div>
            <p className="font-medium text-white">Депозит / залог</p>
            <p className="mt-1 text-white/70">
              Залог 3 000 ₽, возвращаем в день выезда после осмотра дома.
            </p>
          </div>
          <div>
            <p className="font-medium text-white">Правила</p>
            <ul className="mt-2 space-y-1.5 text-sm text-white/70">
              <li>• Курить в доме нельзя (только на улице / террасе).</li>
              <li>• Животные — по предварительному согласованию.</li>
            </ul>
          </div>
          <p className="text-xs text-white/50">
            Точные цены и условия мы подтверждаем при бронировании. Актуальную
            информацию дублируем в Instagram и в переписке.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}

const reviews = [
  {
    name: "Аня и Дима",
    text: "Идеальное место для выходных вдвоём. Тихо, красиво, в доме есть всё, чтобы просто выключиться от города.",
  },
  {
    name: "Компания друзей",
    text: "Отмечали день рождения небольшой компанией. Классный свет, уютно, кухня полностью укомплектована, на террасе проводили весь вечер.",
  },
];

function Reviews() {
  return (
    <SectionWrapper
      id="reviews"
      eyebrow="отзывы"
      title="Что говорят гости после выезда"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {reviews.map((review) => (
          <figure
            key={review.name}
            className="rounded-3xl border border-white/10 bg-white/5 p-5"
          >
            <p className="text-sm text-white/85">"{review.text}"</p>
            <figcaption className="mt-4 text-xs text-white/60">
              {review.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </SectionWrapper>
  );
}

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    dates: "",
    format: "",
    comment: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          phone: "",
          dates: "",
          format: "",
          comment: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper
      id="booking"
      eyebrow="бронирование"
      title="Расскажите, когда хотите приехать"
    >
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Имя">
              <input
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Как к вам обращаться?"
                className="w-full rounded-xl border border-white/10 bg-neutral-950 px-3 py-2 text-sm outline-none focus:border-amber-300"
              />
            </Field>
            <Field label="Телефон или мессенджер">
              <input
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+7..."
                className="w-full rounded-xl border border-white/10 bg-neutral-950 px-3 py-2 text-sm outline-none focus:border-amber-300"
              />
            </Field>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Желаемые даты">
              <input
                value={formData.dates}
                onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                placeholder="Например: 5–7 июля"
                className="w-full rounded-xl border border-white/10 bg-neutral-950 px-3 py-2 text-sm outline-none focus:border-amber-300"
              />
            </Field>
            <Field label="Повод / формат">
              <select
                value={formData.format}
                onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-neutral-950 px-3 py-2 text-sm outline-none focus:border-amber-300"
              >
                <option value="">Выберите формат</option>
                <option>Выходные вдвоём</option>
                <option>Небольшой праздник</option>
                <option>Фотосессия</option>
                <option>Другое (укажу в комментарии)</option>
              </select>
            </Field>
          </div>

          <Field label="Комментарий">
            <textarea
              rows={3}
              value={formData.comment}
              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
              placeholder="Сколько гостей, есть ли дети, нужны ли особые условия, во сколько планируете заезд..."
              className="w-full rounded-xl border border-white/10 bg-neutral-950 px-3 py-2 text-sm outline-none focus:border-amber-300"
            />
          </Field>

          {submitStatus === "success" && (
            <div className="rounded-xl bg-green-500/20 border border-green-500/50 px-4 py-3 text-sm text-green-300">
              ✅ Заявка отправлена! Мы свяжемся с вами в ближайшее время.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="rounded-xl bg-red-500/20 border border-red-500/50 px-4 py-3 text-sm text-red-300">
              ❌ Ошибка при отправке. Попробуйте позже или свяжитесь с нами напрямую.
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-amber-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Отправка..." : "Отправить запрос на бронирование"}
          </button>
        </form>

        <div className="space-y-5 text-sm text-white/75">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              как связаться
            </p>
            <div className="mt-3 space-y-3">
              <a
                href="https://wa.me/79208485166"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-white/20 hover:bg-white/10"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span className="font-medium">8 (920) 848-51-66</span>
              </a>
              
              <a
                href="https://t.me/barn_brya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-white/20 hover:bg-white/10"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                <span className="font-medium">Telegram канал</span>
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              где находится дом
            </p>
            <p className="mt-2">
              Брянск, 10 минут от города
              Точный адрес и геолокацию отправляем после подтверждения
              бронирования.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-xs text-white/60">
      <span>{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

function FloatingBookingButton() {
  return (
    <a
      href="#booking"
      className="fixed bottom-4 left-1/2 z-40 -translate-x-1/2 rounded-full bg-amber-400 px-6 py-3 text-sm font-medium text-black shadow-lg shadow-amber-500/30 transition hover:bg-amber-300 md:hidden"
    >
      Забронировать даты
    </a>
  );
}

function FloatingWhatsAppButton() {
  return (
    <a
      href="https://wa.me/79208485166"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/50 transition hover:scale-110 hover:shadow-xl"
      aria-label="Написать в WhatsApp"
    >
      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    </a>
  );
}

