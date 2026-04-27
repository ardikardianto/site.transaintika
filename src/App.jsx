import { motion, useReducedMotion } from "framer-motion";

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

export default function TranSaintikaLandingPage() {
  const shouldReduceMotion = useReducedMotion();
  const floatingWords = ["Meaning", "Makna", "Clarity", "Bahasa", "Context", "Tone"];

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

  const heroTransition = {
    duration: shouldReduceMotion ? 0.2 : 0.8,
    ease: [0.22, 1, 0.36, 1],
  };

  const sectionReveal = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 36 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen scroll-smooth bg-white text-neutral-950">
      <motion.header
        className="sticky top-4 z-50 px-4"
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -18, scale: shouldReduceMotion ? 1 : 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ ...heroTransition, delay: shouldReduceMotion ? 0 : 0.08 }}
      >
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
      </motion.header>

      <motion.section
        id="home"
        className="relative mx-auto grid max-w-6xl items-center gap-12 overflow-hidden px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1.1fr_0.9fr]"
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="pointer-events-none absolute inset-x-[-12%] top-24 h-72 bg-[radial-gradient(circle_at_center,rgba(23,23,23,0.1),transparent_64%)] blur-3xl"
          initial={{ scaleX: 0.4, opacity: 0 }}
          animate={{ scaleX: 1, opacity: shouldReduceMotion ? 0.25 : [0.12, 0.3, 0.16] }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 2.4, ease: "easeInOut" }}
          aria-hidden="true"
        />

        {!shouldReduceMotion && (
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            {floatingWords.map((word, index) => (
              <motion.span
                key={word}
                className="absolute rounded-full border border-neutral-200 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500 shadow-sm backdrop-blur-md"
                style={{
                  left: `${8 + ((index * 16) % 76)}%`,
                  top: `${10 + ((index * 17) % 54)}%`,
                }}
                initial={{ opacity: 0, y: 24, rotate: index % 2 === 0 ? -7 : 7 }}
                animate={{
                  opacity: [0, 0.9, 0],
                  y: [24, -14, -44],
                  rotate: index % 2 === 0 ? [-7, 4, -2] : [7, -3, 2],
                }}
                transition={{
                  delay: 0.2 + index * 0.15,
                  duration: 2.15,
                  ease: "easeOut",
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        )}

        <motion.div
          className="relative z-10 text-center lg:text-left"
          variants={{
            hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={heroTransition}
        >
          <motion.p
            className="mb-5 inline-flex rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-600"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...heroTransition, delay: shouldReduceMotion ? 0 : 0.15 }}
          >
            Malang, Indonesia · English & Indonesian
          </motion.p>

          <div className="mx-auto max-w-4xl lg:mx-0">
            <motion.h1
              className="text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl md:text-6xl"
              style={{ lineHeight: 0.95, marginBottom: "0.35rem" }}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24, filter: shouldReduceMotion ? "none" : "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ ...heroTransition, delay: shouldReduceMotion ? 0 : 0.32 }}
            >
              TranSaintika Language Services
            </motion.h1>

            <motion.p
              className="text-lg leading-8 text-neutral-600 md:text-xl"
              style={{ marginTop: 0 }}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...heroTransition, delay: shouldReduceMotion ? 0 : 0.52 }}
            >
              We can translate what hands can write.
            </motion.p>
          </div>

          <motion.p
            className="mx-auto max-w-2xl text-base leading-7 text-neutral-500 lg:mx-0"
            style={{ marginTop: "3rem" }}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...heroTransition, delay: shouldReduceMotion ? 0 : 0.7 }}
          >
            Clean, accurate, and reliable translation, editing, and proofreading services for documents written in English and Indonesian.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...heroTransition, delay: shouldReduceMotion ? 0 : 0.88 }}
          >
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
          </motion.div>
        </motion.div>

        <motion.div
          className="relative z-10 mx-auto w-full max-w-md rounded-[2rem] border border-neutral-200 bg-neutral-50 p-6 shadow-sm"
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.94, rotate: shouldReduceMotion ? 0 : -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ ...heroTransition, delay: shouldReduceMotion ? 0 : 0.55 }}
        >
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
        </motion.div>
      </motion.section>

      <motion.section
        id="services"
        className="border-y border-neutral-100 bg-neutral-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={sectionReveal}
        transition={heroTransition}
      >
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            variants={sectionReveal}
            transition={{ ...heroTransition, delay: shouldReduceMotion ? 0 : 0.08 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">Services</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-950 md:text-4xl">
              Language support without unnecessary complexity.
            </h2>
            <p className="mt-5 text-base leading-7 text-neutral-600">
              Simple services for translating documents and polishing your writing.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                className="rounded-[1.5rem] border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                variants={sectionReveal}
                transition={{ ...heroTransition, delay: shouldReduceMotion ? 0 : 0.16 + index * 0.1 }}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              >
                <h3 className="text-xl font-semibold tracking-tight text-neutral-950">{service.title}</h3>
                <p className="mt-4 min-h-28 text-sm leading-6 text-neutral-600">{service.description}</p>
                <div className="mt-6 rounded-2xl bg-neutral-50 px-4 py-3 text-sm font-semibold text-neutral-950">
                  {service.rate}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="mx-auto max-w-6xl px-5 py-20 md:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={sectionReveal}
        transition={heroTransition}
      >
        <div className="grid gap-10 rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-sm md:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            variants={sectionReveal}
            transition={{ ...heroTransition, delay: shouldReduceMotion ? 0 : 0.08 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-950 md:text-4xl">
              Send your document.
            </h2>
            <p className="mt-5 text-base leading-7 text-neutral-600">
              Place your words in our care — together we carry meaning across languages, letting every journey begin with understanding.
            </p>
          </motion.div>

          <div className="grid gap-4">
            <motion.a
              href="https://wa.me/6285156501766"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-neutral-200 p-5 transition hover:border-neutral-950"
              variants={sectionReveal}
              transition={{ ...heroTransition, delay: shouldReduceMotion ? 0 : 0.16 }}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-white">
                <Icon type="whatsapp" className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-neutral-500">WhatsApp</span>
                <span className="block font-semibold text-neutral-950">+62 851 5650 1766</span>
              </span>
            </motion.a>

            <motion.a
              href="mailto:hello@transaintika.com"
              className="group flex items-center gap-4 rounded-2xl border border-neutral-200 p-5 transition hover:border-neutral-950"
              variants={sectionReveal}
              transition={{ ...heroTransition, delay: shouldReduceMotion ? 0 : 0.26 }}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-white">
                <Icon type="mail" className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-neutral-500">Email</span>
                <span className="block font-semibold text-neutral-950">hello@transaintika.com</span>
              </span>
            </motion.a>

            <motion.div
              className="flex items-center gap-4 rounded-2xl border border-neutral-200 p-5"
              variants={sectionReveal}
              transition={{ ...heroTransition, delay: shouldReduceMotion ? 0 : 0.36 }}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-white">
                <Icon type="pin" className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-neutral-500">Location</span>
                <span className="block font-semibold text-neutral-950">Malang, Indonesia</span>
              </span>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <footer className="border-t border-neutral-100 px-5 py-8 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} TranSaintika Language Services. All rights reserved.
      </footer>
    </main>
  );
}
