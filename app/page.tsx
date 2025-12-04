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
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-4 pt-24 pb-16 md:flex-row md:items-end md:pb-24">
        <div className="max-w-xl">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/60">
            барнхаус для камерного отдыха
          </p>
          <h1 className="mb-6 text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
            Устали от городской суеты, уютный барн хаус в 10 минутах от Брянска ждет Вас.
          </h1>
          <p className="mb-8 max-w-md text-sm text-white/75 md:text-base">
            Деревянный дом с панорамными окнами, теплой купелью и беседкой.
            Идеален для пары, небольшой компании или тихого праздника.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#booking"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-amber-300"
            >
              Забронировать даты
            </a>
            <a
              href="#inside"
              className="text-sm text-white/75 underline-offset-4 hover:underline"
            >
              Посмотреть, что внутри
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-xs text-white/65">
            <div>
              <p className="font-medium text-white">до 4–6 гостей</p>
              <p>комфортно для небольшой компании</p>
            </div>
            <div>
              <p className="font-medium text-white">10 мин от Брянска</p>
              <p>удобный подъезд по асфальту</p>
            </div>
            <div>
              <p className="font-medium text-white">формат "под ключ"</p>
              <p>посуда, бельё, мангал — всё на месте</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex-1 md:mt-0">
          <div className="grid grid-cols-2 gap-3 md:gap-4">
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
    <div className="rounded-3xl border border-white/15 bg-black/55 px-4 py-5 text-sm backdrop-blur">
      <p className="font-medium">{title}</p>
      <p className="mt-1 text-xs text-white/70">{subtitle}</p>
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
              <p>~ [впиши] м² + терраса</p>
            </div>
            <div>
              <p className="font-medium text-white">Размещение</p>
              <p>до 4–6 гостей</p>
            </div>
            <div>
              <p className="font-medium text-white">Check-in / Check-out</p>
              <p>заезд с 15:00, выезд до 12:00</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="h-56 rounded-3xl bg-gradient-to-tr from-amber-500/40 via-amber-700/40 to-black/80 p-[1px] md:h-72">
            <div
              className="h-full rounded-[1.4rem] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/5998130/pexels-photo-5998130.jpeg?auto=compress&cs=tinysrgb&w=1600')",
              }}
            />
          </div>
          <p className="text-xs text-white/60">
            Здесь могут быть реальные фото домика, террасы и интерьера — их мы
            подгрузим вместо стоковых.
          </p>
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
  },
  {
    title: "Спальные места",
    points: [
      "двуспальная кровать с качественным бельём",
      "доп. спальные места (диван / матрасы — впиши своё)",
      "тёмные шторы для комфортного сна",
    ],
  },
  {
    title: "Кухня",
    points: [
      "плита, холодильник, микроволновка / духовка",
      "посуда, бокалы, базовый набор специй",
      "кофе, чай, питьевая вода",
    ],
  },
  {
    title: "Санузел",
    points: [
      "душ / ванна — впиши своё",
      "полотенца, фен",
      "гели, мыло, базовая косметика",
    ],
  },
  {
    title: "Терраса и улица",
    points: [
      "беседка с мебелью",
      "тёплая купель для отдыха",
      "мангал / гриль, шампуры / решётка",
      "освещение для вечеров на улице",
    ],
  },
  {
    title: "Дополнительно",
    points: [
      "Wi-Fi (если есть) и музыка",
      "настольные игры, пледы, свечи",
      "парковка рядом с домом",
    ],
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
            className="rounded-3xl border border-white/10 bg-white/5 p-5"
          >
            <h3 className="text-sm font-semibold">{block.title}</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-white/70">
              {block.points.map((p) => (
                <li key={p}>• {p}</li>
              ))}
            </ul>
          </div>
        ))}
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
                <th className="px-4 py-3 text-left font-normal">Период</th>
                <th className="px-4 py-3 text-left font-normal">Описание</th>
                <th className="px-4 py-3 text-left font-normal">Стоимость</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr>
                <td className="px-4 py-4 align-top">Будни</td>
                <td className="px-4 py-4 align-top text-white/70">
                  Заезд с воскресенья/понедельника по четверг.
                </td>
                <td className="px-4 py-4 align-top font-medium">
                  от [₽] / ночь
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 align-top">Выходные</td>
                <td className="px-4 py-4 align-top text-white/70">
                  Пятница–воскресенье, праздники. Минимум 1–2 ночи — впиши
                  своё.
                </td>
                <td className="px-4 py-4 align-top font-medium">
                  от [₽] / ночь
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 align-top">Фотосессии</td>
                <td className="px-4 py-4 align-top text-white/70">
                  Аренда на несколько часов для съёмки без ночёвки.
                </td>
                <td className="px-4 py-4 align-top font-medium">
                  от [₽] / час
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 align-top">Особые даты</td>
                <td className="px-4 py-4 align-top text-white/70">
                  НГ, 14 февраля, 8 марта и др. — стоимость по договорённости.
                </td>
                <td className="px-4 py-4 align-top text-sm text-white/60">
                  Индивидуально
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-4 text-sm text-white/75">
          <div>
            <p className="font-medium text-white">Депозит / залог</p>
            <p className="mt-1 text-white/70">
              Залог [сумма ₽], возвращаем в день выезда после осмотра дома.
            </p>
          </div>
          <div>
            <p className="font-medium text-white">Правила</p>
            <ul className="mt-2 space-y-1.5 text-sm text-white/70">
              <li>• Курить в доме нельзя (только на улице / террасе).</li>
              <li>• Животные — по предварительному согласованию.</li>
              <li>• Громкая музыка после 23:00 — нет.</li>
              <li>
                • Бережное отношение к дому и мебели — иначе удержание из
                залога.
              </li>
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
            <p className="mt-2">+7 (___) ___-__-__</p>
            <p className="text-white/60">WhatsApp / Telegram</p>
            <p className="mt-2 text-white/60">@rent032 или другой ник</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              где находится дом
            </p>
            <p className="mt-2">
              [Регион / город]  
              Точный адрес и геолокацию отправляем после подтверждения
              бронирования.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              instagram
            </p>
            <a
              href="https://www.instagram.com/rent032"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex text-sm text-amber-300 underline-offset-4 hover:underline"
            >
              Смотреть дом и актуальные даты в Instagram
            </a>
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

