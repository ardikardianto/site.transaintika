import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

function Icon({ type, className = "h-5 w-5" }) {
  const iconProps = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  if (type === "arrow") {
    return (
      <svg {...iconProps}>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    );
  }

  if (type === "check") {
    return (
      <svg {...iconProps}>
        <path d="M20 6 9 17l-5-5" />
      </svg>
    );
  }

  if (type === "whatsapp") {
    return (
      <svg {...iconProps}>
        <path d="M20 11.5a8.5 8.5 0 0 1-12.62 7.43L3 20l1.17-4.25A8.5 8.5 0 1 1 20 11.5Z" />
        <path d="M8.7 8.4c.2-.45.43-.46.64-.46h.54c.17 0 .42.06.64.48.22.43.75 1.46.82 1.57.07.1.11.23.02.38-.09.16-.14.25-.28.39-.14.14-.29.31-.42.42-.14.14-.28.29-.12.56.16.28.72 1.18 1.54 1.91 1.06.94 1.95 1.23 2.23 1.37.28.14.44.12.6-.07.18-.2.7-.82.88-1.1.18-.28.37-.23.64-.14.27.09 1.7.8 1.99.94.29.14.48.21.55.33.07.12.07.69-.16 1.35-.23.66-1.34 1.27-1.86 1.31-.48.04-1.08.06-1.74-.11-.4-.11-.92-.3-1.58-.58-2.78-1.2-4.59-4-4.73-4.19-.14-.18-1.13-1.5-1.13-2.86 0-1.36.71-2.03.97-2.31Z" />
      </svg>
    );
  }

  if (type === "mail") {
    return (
      <svg {...iconProps}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 7 9-7" />
      </svg>
    );
  }

  if (type === "pin") {
    return (
      <svg {...iconProps}>
        <path d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    );
  }

  return null;
}

function OpeningAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion();
  const floatingWords = ["Meaning", "Makna", "Clarity", "Bahasa", "Context", "Tone"];

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = previousOverflow;
    }, shouldReduceMotion ? 900 : 3400);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, [shouldReduceMotion]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-neutral-950 text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-4%" }}
          transition={{ duration: shouldReduceMotion ? 0.2 : 0.75, ease: [0.76, 0, 0.24, 1] }}
          aria-label="TranSaintika opening animation"
        >
          <motion.div
            className="absolute inset-x-[-15%] top-1/2 h-56 -translate-y-1/2 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_62%)] blur-3xl"
            initial={{ scaleX: 0.35, opacity: 0 }}
            animate={{ scaleX: 1.15, opacity: shouldReduceMotion ? 0.25 : [0.2, 0.65, 0.2] }}
            transition={{ duration: shouldReduceMotion ? 0.4 : 2.8, ease: "easeInOut" }}
          />

          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08)_0%,transparent_30%,rgba(255,255,255,0.11)_52%,transparent_76%)]" />

          {!shouldReduceMotion && (
            <div className="absolute inset-0" aria-hidden="true">
              {floatingWords.map((word, index) => (
                <motion.span
                  key={word}
                  className="absolute rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/70 backdrop-blur-md"
                  style={{
                    left: `${12 + ((index * 15) % 72)}%`,
                    top: `${18 + ((index * 19) % 58)}%`,
                  }}
                  initial={{ opacity: 0, y: 24, rotate: index % 2 === 0 ? -7 : 7 }}
                  animate={{
                    opacity: [0, 0.85, 0],
                    y: [24, -16, -52],
                    rotate: index % 2 === 0 ? [-7, 4, -2] : [7, -3, 2],
                  }}
                  transition={{
                    delay: 0.3 + index * 0.17,
                    duration: 2.4,
                    ease: "easeOut",
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          )}

          <motion.div
            className="relative mx-5 flex w-full max-w-3xl flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: shouldReduceMotion ? 0.2 : 0.7, ease: "easeOut" }}
          >
            <motion.div
              className="relative mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-white/15 bg-white text-neutral-950 shadow-2xl shadow-white/20"
              initial={{ rotate: -12, scale: 0.82 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ delay: 0.15, duration: shouldReduceMotion ? 0.2 : 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span
                className="text-4xl font-semibold tracking-tight"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.35 }}
              >
                TS
              </motion.span>
              <motion.span
                className="absolute inset-[-10px] rounded-full border border-white/25"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [0.8, 1.28], opacity: [0, 0.85, 0] }}
                transition={{ delay: 0.55, duration: shouldReduceMotion ? 0.2 : 1.4, ease: "easeOut" }}
              />
            </motion.div>

            <motion.p
              className="mb-4 text-sm font-semibold uppercase tracking-[0.42em] text-white/55"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.4 }}
            >
              Words arriving with care
            </motion.p>

            <motion.h2
              className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: shouldReduceMotion ? 0.1 : 0.95, duration: shouldReduceMotion ? 0.2 : 0.8 }}
            >
              TranSaintika
            </motion.h2>

            <motion.div
              className="mt-8 h-1 w-full max-w-xs overflow-hidden rounded-full bg-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.25 }}
            >
              <motion.div
                className="h-full rounded-full bg-white"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: shouldReduceMotion ? 0.1 : 1.25, duration: shouldReduceMotion ? 0.35 : 1.55, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function TranSaintikaLandingPage() {
  const services = [
    {
      title: "Translation",
      description: "Clear and reliable translation for academic, legal, and business documents.",
      rate: "IDR 400 / word",
    },
    {
      title: "Editing & Proofreading",
      description:
        "Editing and proofreading to refine your writing, enhance clarity, and ensure it is publication-ready.",
      rate: "IDR 250 / word",
    },
  ];

  const qualityChecks = [
    "English ↔ Indonesian",
    "Translation, editing, proofreading",
    "Academic and professional documents",
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="min-h-screen scroll-smooth bg-white text-neutral-950">
      <OpeningAnimation />

      <header className="sticky top-4 z-50 px-4">
        <nav className="mx-auto flex max-w-3xl items-center justify-between rounded-full border border-neutral-100 bg-white/90 px-5 py-3 shadow-xl shadow-neutral-200/70 backdrop-blur-xl md:px-7">
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="cursor-pointer bg-transparent p-0 text-xl font-bold tracking-tight text-neutral-950 md:text-3xl"
          >
            TranSaintika
          </button>

          <div className="hidden items-center gap-8 text-sm font-medium text-neutral-700 md:flex">
            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className="cursor-pointer bg-transparent p-0 transition hover:text-neutral-950"
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("services")}
              className="cursor-pointer bg-transparent p-0 transition hover:text-neutral-950"
            >
              Services
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer bg-transparent p-0 transition hover:text-neutral-950"
            >
              Contact
            </button>
          </div>

          <a
            href="https://wa.me/6285156501766"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800 md:px-6"
          >
            WhatsApp
          </a>
        </nav>
      </header>

      <section
        id="home"
        className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="text-center lg:text-left">
          <p className="mb-5 inline-flex rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-600">
            Malang, Indonesia · English & Indonesian
          </p>

          <div className="mx-auto max-w-4xl lg:mx-0">
            <h1
              className="text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl md:text-6xl"
              style={{ lineHeight: 0.95, marginBottom: "0.35rem" }}
            >
              TranSaintika Language Services
            </h1>

            <p className="text-lg leading-8 text-neutral-600 md:text-xl" style={{ marginTop: 0 }}>
              We can translate what hands can write.
            </p>
          </div>

          <p
            className="mx-auto max-w-2xl text-base leading-7 text-neutral-500 lg:mx-0"
            style={{ marginTop: "3rem" }}
          >
            Clean, accurate, and reliable translation, editing, and proofreading services for documents written in English and Indonesian.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="https://wa.me/6285156501766"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800"
            >
              Contact via WhatsApp <Icon type="arrow" className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => scrollToSection("services")}
              className="inline-flex cursor-pointer items-center justify-center rounded-full border border-neutral-300 bg-transparent px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:border-neutral-950"
            >
              View Services
            </button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md rounded-[2rem] border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
          <div className="rounded-[1.5rem] bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between gap-5">
              <div>
                <p className="text-sm text-neutral-500">Starting from</p>
                <p className="mt-1 text-3xl font-semibold tracking-tight">IDR 250</p>
                <p className="text-sm text-neutral-500">per word</p>
              </div>
              <div className="rounded-full bg-neutral-950 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white">
                Clear rates
              </div>
            </div>

            <div className="space-y-4">
              {qualityChecks.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-neutral-700">
                  <Icon type="check" className="mt-0.5 h-5 w-5 shrink-0 text-neutral-950" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-neutral-100 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">Services</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-950 md:text-4xl">
              Language support without unnecessary complexity.
            </h2>
            <p className="mt-5 text-base leading-7 text-neutral-600">
              Simple services for translating documents and polishing your writing.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-[1.5rem] border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-xl font-semibold tracking-tight text-neutral-950">{service.title}</h3>
                <p className="mt-4 min-h-28 text-sm leading-6 text-neutral-600">{service.description}</p>
                <div className="mt-6 rounded-2xl bg-neutral-50 px-4 py-3 text-sm font-semibold text-neutral-950">
                  {service.rate}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className="grid gap-10 rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-sm md:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-950 md:text-4xl">
              Send your document.
            </h2>
            <p className="mt-5 text-base leading-7 text-neutral-600">
              Place your words in our care — together we carry meaning across languages, letting every journey begin with understanding.
            </p>
          </div>

          <div className="grid gap-4">
            <a
              href="https://wa.me/6285156501766"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-neutral-200 p-5 transition hover:border-neutral-950"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-white">
                <Icon type="whatsapp" className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-neutral-500">WhatsApp</span>
                <span className="block font-semibold text-neutral-950">+62 851 5650 1766</span>
              </span>
            </a>

            <a
              href="mailto:hello@transaintika.com"
              className="group flex items-center gap-4 rounded-2xl border border-neutral-200 p-5 transition hover:border-neutral-950"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-white">
                <Icon type="mail" className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-neutral-500">Email</span>
                <span className="block font-semibold text-neutral-950">hello@transaintika.com</span>
              </span>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-neutral-200 p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-white">
                <Icon type="pin" className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-neutral-500">Location</span>
                <span className="block font-semibold text-neutral-950">Malang, Indonesia</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-100 px-5 py-8 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} TranSaintika Language Services. All rights reserved.
      </footer>
    </main>
  );
}
