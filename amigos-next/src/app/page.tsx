"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  MapPin,
  Menu as MenuIcon,
  MessageCircleMore,
  Phone,
  Star,
  UtensilsCrossed,
  X as CloseIcon,
} from "lucide-react";
import { ASSETS, FULL_MENU, HERO_SLIDES, CATERING_PACKAGES, GALLERY_IMAGES } from "@/lib/data";
import type { MenuCategory, MenuItem } from "@/lib/data";

const PHONE_HREF = "tel:08-766-9690";
const FACEBOOK_HREF = "https://www.facebook.com/amigosyan";

function ReservationPicker({
  lang,
  label,
  wrapperClassName = "",
  className,
  panelClassName = "",
  onAction,
}: {
  lang: "zh" | "en";
  label: React.ReactNode;
  wrapperClassName?: string;
  className: string;
  panelClassName?: string;
  onAction?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!pickerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const handleAction = () => {
    setOpen(false);
    onAction?.();
  };

  return (
    <div ref={pickerRef} className={`relative ${wrapperClassName}`}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="menu"
        className={className}
      >
        {label}
      </button>

      {open && (
        <div
          className={`absolute z-50 mt-3 min-w-[220px] rounded-3xl border border-[var(--sand)] bg-white p-2 shadow-[0_18px_50px_rgba(47,38,30,0.18)] ${panelClassName}`}
        >
          <p className="px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
            {lang === "zh" ? "選擇聯絡方式" : "Choose Contact"}
          </p>
          <div className="space-y-1">
            <a
              href={PHONE_HREF}
              onClick={handleAction}
              className="flex items-center gap-2 rounded-2xl px-3 py-3 text-sm font-semibold text-[var(--espresso)] transition-colors hover:bg-[var(--cream)]"
            >
              <Phone className="h-4 w-4" />
              <span>{lang === "zh" ? "來電訂位" : "Call (08) 766-9690"}</span>
            </a>
            <a
              href={FACEBOOK_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleAction}
              className="flex items-center gap-2 rounded-2xl px-3 py-3 text-sm font-semibold text-[var(--espresso)] transition-colors hover:bg-[var(--cream)]"
            >
              <MessageCircleMore className="h-4 w-4" />
              <span>{lang === "zh" ? "Facebook 粉專私訊" : "Message on Facebook"}</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Auto-sliding Hero ─── */
function Hero({ lang }: { lang: "zh" | "en" }) {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const advance = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
      setIsTransitioning(false);
    }, 600);
  }, []);

  useEffect(() => {
    const timer = setInterval(advance, 5000);
    return () => clearInterval(timer);
  }, [advance]);

  return (
    <section id="top" className="relative h-[90vh] min-h-[600px] max-h-[960px] overflow-hidden">
      {/* Slides */}
      {HERO_SLIDES.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[800ms] ease-in-out ${i === current && !isTransitioning ? "opacity-100" : "opacity-0"
            }`}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--espresso)]/85 via-[var(--espresso)]/35 to-[var(--espresso)]/10" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 md:pb-24">
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-[12px] uppercase tracking-[0.3em] text-white/60 mb-5 font-medium">
            {lang === "zh" ? "屏東人的早午餐老朋友 · 義式帕里尼專門店" : "Pingtung's favorite brunch spot · Italian panini specialists"}
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-white text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight max-w-3xl">
            {lang === "zh" ? (
              <span className="font-[family-name:var(--font-zh)]">
                香脆熱烤帕里尼，<br />等您帶朋友來享用
              </span>
            ) : (
              <>Crispy, hot-pressed panini<br />overflowing with flavor.</>
            )}
          </h1>
          <p className="mt-6 text-white/70 text-base md:text-lg max-w-xl leading-relaxed">
            {lang === "zh"
              ? "屏東在地十年的帕里尼專門店，20 多種現烤香脆的滋味。不管兩個人的早午餐、十個人的聚餐，還是公司團體訂餐，一個地方就搞定。"
              : "10 years in Pingtung. 20+ flavors hot-pressed daily. Whether it's brunch for two or catering for twenty — this is your spot."}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="rounded-full bg-white px-7 py-3.5 text-[13px] font-semibold text-[var(--espresso)] tracking-wide hover:bg-[var(--terracotta)] hover:text-white transition-colors"
            >
              {lang === "zh" ? "查看菜單" : "View Menu"}
            </a>
            <ReservationPicker
              lang={lang}
              label={
                <>
                  <Phone className="h-4 w-4" />
                  <span>{lang === "zh" ? "預訂座位" : "Reserve a Table"}</span>
                </>
              }
              className="inline-flex items-center gap-2 rounded-full bg-[var(--terracotta)] px-7 py-3.5 text-[13px] font-semibold text-white tracking-wide hover:bg-[var(--terracotta-light)] transition-colors"
              panelClassName="left-0"
            />
            <a
              href="#catering"
              className="rounded-full border border-white/40 px-7 py-3.5 text-[13px] font-semibold text-white tracking-wide hover:bg-white/10 transition-colors"
            >
              {lang === "zh" ? "詢問團體訂餐" : "Group Orders"}
            </a>
          </div>

          {/* Slide indicators */}
          <div className="mt-10 flex gap-2">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrent(i); setIsTransitioning(false); }}
                className={`h-[3px] rounded-full transition-all duration-500 ${i === current ? "w-8 bg-white" : "w-4 bg-white/30"
                  }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Header ─── */
function Header({
  lang,
  setLang,
}: {
  lang: "zh" | "en";
  setLang: (l: "zh" | "en") => void;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-[var(--cream)]/95 backdrop-blur-md border-b border-[var(--sand)] shadow-sm"
        : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3 group">
          <span
            className={`font-[family-name:var(--font-display)] text-2xl italic tracking-tight transition-colors ${scrolled ? "text-[var(--espresso)]" : "text-white"
              } group-hover:text-[var(--terracotta)]`}
          >
            Amigos
          </span>
          <span
            className={`hidden sm:block text-[10px] uppercase tracking-[0.25em] font-medium mt-1 transition-colors ${scrolled ? "text-[var(--muted)]" : "text-white/60"
              }`}
          >
            Brunch &amp; Cafe
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-wide">
          {[
            { href: "#story", zh: "品牌故事", en: "Story" },
            { href: "#menu", zh: "菜單", en: "Menu" },
            { href: "#gallery", zh: "相簿", en: "Gallery" },
            { href: "#catering", zh: "團體訂餐", en: "Group Orders" },
            { href: "#visit", zh: "店家資訊", en: "Visit" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors font-[family-name:var(--font-zh)] ${scrolled ? "text-[var(--muted)] hover:text-[var(--espresso)]" : "text-white/70 hover:text-white"
                }`}
            >
              {lang === "zh" ? link.zh : link.en}
            </a>
          ))}
          <ReservationPicker
            lang={lang}
            label={
              <>
                <Phone className="h-3.5 w-3.5" />
                <span>{lang === "zh" ? "訂位" : "Call"}</span>
              </>
            }
            className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-[var(--terracotta)] px-5 py-2.5 text-white text-[12px] tracking-wider uppercase hover:bg-[var(--terracotta-light)] transition-colors"
            panelClassName="right-0"
          />
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex gap-2 text-[11px] tracking-[0.15em] font-semibold uppercase">
            <button
              onClick={() => setLang("zh")}
              className={`transition-colors ${lang === "zh"
                ? "text-[var(--terracotta)]"
                : scrolled ? "text-[var(--muted)]" : "text-white/50"
                }`}
            >
              中
            </button>
            <span className={scrolled ? "text-[var(--sand)]" : "text-white/20"}>/</span>
            <button
              onClick={() => setLang("en")}
              className={`transition-colors ${lang === "en"
                ? "text-[var(--terracotta)]"
                : scrolled ? "text-[var(--muted)]" : "text-white/50"
                }`}
            >
              EN
            </button>
          </div>
          <button
            type="button"
            aria-label={mobileOpen ? (lang === "zh" ? "關閉選單" : "Close menu") : "Open menu"}
            className={`md:hidden text-sm font-semibold tracking-wider uppercase transition-colors ${scrolled ? "text-[var(--espresso)]" : "text-white"
              }`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[var(--cream)] border-t border-[var(--sand)] px-6 py-6 space-y-4 font-[family-name:var(--font-zh)]">
          <a href="#story" onClick={() => setMobileOpen(false)} className="block text-lg">品牌故事</a>
          <a href="#menu" onClick={() => setMobileOpen(false)} className="block text-lg">菜單</a>
          <a href="#gallery" onClick={() => setMobileOpen(false)} className="block text-lg">相簿</a>
          <a href="#catering" onClick={() => setMobileOpen(false)} className="block text-lg">團體訂餐</a>
          <a href="#visit" onClick={() => setMobileOpen(false)} className="block text-lg">店家資訊</a>
          <ReservationPicker
            lang={lang}
            label={
              <>
                <Phone className="h-4 w-4" />
                <span>{lang === "zh" ? "來電訂位" : "Reserve"}</span>
              </>
            }
            className="inline-flex items-center gap-2 mt-2 rounded-full bg-[var(--terracotta)] px-6 py-3 text-white text-sm"
            panelClassName="left-0 right-0 min-w-0"
            onAction={() => setMobileOpen(false)}
          />
        </div>
      )}
    </header>
  );
}


/* ─── Social proof bar ─── */
function TrustBar({ lang }: { lang: "zh" | "en" }) {
  const stats = [
    { num: "10+", zh: "年屏東在地經營", en: "Years serving Pingtung", href: undefined },
    { num: "20+", zh: "種帕里尼口味", en: "Panini flavors on our menu", href: undefined },
    { num: "4.2", zh: "Google 評論 · 564 則", en: "Google Reviews · 564 ratings", href: "https://maps.app.goo.gl/DPaBLB2GdnHyErC1A", showStar: true },
  ];

  return (
    <section className="border-y border-[var(--sand)] bg-[var(--linen)]">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-3 gap-8 text-center">
          {stats.map((s) => {
            const inner = (
              <>
                <p className="font-[family-name:var(--font-accent)] text-3xl md:text-4xl text-[var(--terracotta)]">
                  <span className="inline-flex items-center gap-1.5">
                    <span>{s.num}</span>
                    {s.showStar ? <Star className="h-5 w-5 fill-current" /> : null}
                  </span>
                </p>
                <p className="mt-1 text-[12px] uppercase tracking-[0.15em] text-[var(--muted)] font-medium">
                  {lang === "zh" ? s.zh : s.en}
                </p>
              </>
            );
            return s.href ? (
              <a key={s.num} href={s.href} target="_blank" rel="noopener noreferrer" className="group hover:opacity-80 transition-opacity">
                {inner}
                <p className="mt-1 inline-flex items-center gap-1 text-[10px] text-[var(--terracotta)] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>{lang === "zh" ? "查看評論" : "See reviews"}</span>
                  <ArrowRight className="h-3 w-3" />
                </p>
              </a>
            ) : (
              <div key={s.num}>{inner}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Story ─── */
function Story({ lang }: { lang: "zh" | "en" }) {
  return (
    <section id="story" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--terracotta)] mb-4 font-semibold">
              {lang === "zh" ? "我們的故事" : "Our Story"}
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl leading-tight tracking-tight mb-8">
              {lang === "zh" ? (
                <span className="font-[family-name:var(--font-zh)]">Amigos，<br />就是「朋友們」</span>
              ) : (
                <>Amigos means<br />&ldquo;friends.&rdquo;</>
              )}
            </h2>
            <div className="space-y-5 text-[var(--muted)] leading-relaxed font-[family-name:var(--font-zh)]">
              <p>
                {lang === "zh"
                  ? "Amigos，西班牙語的「朋友們」。十多年前，我們在屏東濟南街開了一家小小的早餐店，只有一台帕里尼機、幾張桌子、和一個簡單的想法：讓每天早上的第一餐，吃起來像在朋友家一樣自在。"
                  : "Amigos — that's \"friends\" in Spanish. Over a decade ago, we opened a tiny breakfast shop on Jinan Street in Pingtung with one panini press, a few tables, and a simple idea: make the first meal of the day feel like eating at a friend's house."}
              </p>
              <p>
                {lang === "zh"
                  ? "從一開始的幾款口味，到現在菜單上超過 20 種帕里尼以及多種手作料理，每一款都是我們試了又試、調了又調才和大家分享的餐點。我們沒有華麗的裝潢，但每一份餐點都是全心全意為您準備的。"
                  : "What started with a handful of recipes has grown into a menu of 20+ panini and a variety of handcrafted dishes — each one tested and tweaked until it was ready to share. We don't do fancy interiors, but every dish is prepared wholeheartedly for you."}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="img-reveal rounded-2xl aspect-[3/4]">
              <img src={ASSETS.panini1} alt="Panini" className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div className="img-reveal rounded-2xl aspect-[3/4] mt-8">
              <img src={ASSETS.panini2} alt="Panini close-up" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Menu item row ─── */
function MenuItemRow({ item, lang }: { item: MenuItem; lang: "zh" | "en" }) {
  return (
    <li className="py-2.5">
      <div className="flex items-baseline justify-between gap-3">
        <div className="flex-1 min-w-0">
          <span className="font-medium text-[var(--espresso)] font-[family-name:var(--font-zh)]">
            {lang === "zh" ? item.zh : item.en}
          </span>
          {lang === "zh" && (
            <span className="ml-2 text-xs text-[var(--muted)]">{item.en}</span>
          )}
          {item.limited && (
            <span className="ml-2 inline-block text-[10px] uppercase tracking-wider bg-[var(--terracotta)]/10 text-[var(--terracotta)] px-2 py-0.5 rounded-full font-semibold">
              {lang === "zh" ? "限定" : "Limited"}
            </span>
          )}
          {item.popular && (
            <span className="ml-2 inline-block text-[10px] uppercase tracking-wider bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full font-semibold">
              {lang === "zh" ? "人氣推薦" : "Popular"}
            </span>
          )}
        </div>
        <span className="shrink-0 border-b border-dotted border-[var(--sand)] flex-1 max-w-[80px] mx-2 mb-1 hidden sm:block" />
        <span className="shrink-0 font-[family-name:var(--font-accent)] text-base text-[var(--terracotta)] tabular-nums">
          ${item.price}
        </span>
      </div>
    </li>
  );
}

/* ─── Accordion category ─── */
function MenuAccordion({
  category,
  lang,
  isOpen,
  onToggle,
}: {
  category: MenuCategory;
  lang: "zh" | "en";
  isOpen: boolean;
  onToggle: () => void;
}) {
  const itemCount = category.items
    ? category.items.length
    : category.subGroups
      ? category.subGroups.reduce((sum, g) => sum + g.items.length, 0)
      : 0;

  return (
    <div
      className={`mb-3 rounded-2xl transition-shadow duration-300 overflow-hidden ${isOpen
        ? "shadow-md shadow-black/8 bg-white"
        : "shadow-sm shadow-black/5 bg-white hover:shadow-md hover:shadow-black/8"
        }`}
    >
      {/* Header */}
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between px-5 py-4 text-left transition-colors duration-300 active:scale-[0.995] ${isOpen
          ? "bg-[var(--espresso)] text-white"
          : "bg-white text-[var(--espresso)]"
          }`}
        style={{ WebkitTapHighlightColor: "transparent" }}
      >
        <div className="flex-1 min-w-0">
          <h3 className="text-[15px] font-semibold font-[family-name:var(--font-zh)] leading-snug">
            {lang === "zh" ? category.zh : category.en}
          </h3>
          {lang === "zh" && (
            <p className={`text-[11px] tracking-[0.12em] mt-0.5 ${isOpen ? "text-white/50" : "text-[var(--muted)]"
              }`}>
              {category.en}
            </p>
          )}
        </div>
        <div className="flex items-center gap-2.5 shrink-0 ml-4">
          <span className={`text-[11px] font-medium tabular-nums px-2 py-0.5 rounded-full ${isOpen
            ? "bg-white/15 text-white/70"
            : "bg-[var(--linen)] text-[var(--muted)]"
            }`}>
            {itemCount}
          </span>
          <ChevronDown
            className={`h-[18px] w-[18px] transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
          />
        </div>
      </button>

      {/* Items — directly attached below header */}
      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out ${isOpen ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-5 py-4 border-t border-[var(--sand)]/50">
          {/* Category note — panini gets a banner, others get italic text */}
          {category.note && category.id === "panini-savoury" ? (
            <div className="mb-4 rounded-xl bg-amber-50 px-4 py-3 flex items-center gap-2">
              <UtensilsCrossed className="h-4 w-4 shrink-0 text-amber-700" />
              <p className="text-[13px] text-amber-800 font-medium font-[family-name:var(--font-zh)]">
                {lang === "zh" ? category.note.zh : category.note.en}
              </p>
            </div>
          ) : category.note ? (
            <p className="text-[13px] text-[var(--muted)] mb-4 italic font-[family-name:var(--font-zh)]">
              {lang === "zh" ? category.note.zh : category.note.en}
            </p>
          ) : null}

          {/* Flat items */}
          {category.items && (
            <ul className="divide-y divide-[var(--sand)]/60">
              {category.items.map((item, i) => (
                <MenuItemRow key={i} item={item} lang={lang} />
              ))}
            </ul>
          )}

          {/* Sub-grouped items (lunch specials) */}
          {category.subGroups && (
            <div className="space-y-6">
              {category.subGroups.map((group, gi) => (
                <div key={gi}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[var(--terracotta)]">
                      {lang === "zh" ? group.zh : group.en}
                    </span>
                    <span className="flex-1 border-b border-[var(--sand)]" />
                  </div>
                  <ul className="divide-y divide-[var(--sand)]/60">
                    {group.items.map((item, i) => (
                      <MenuItemRow key={i} item={item} lang={lang} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Menu section ─── */
function MenuSection({ lang }: { lang: "zh" | "en" }) {
  // Food categories open by default, drinks collapsed
  const drinkIds = new Set(["new-drinks", "coffee", "tea", "milk", "juice"]);
  const [openCategories, setOpenCategories] = useState<Set<string>>(() => {
    return new Set(FULL_MENU.filter((c) => !drinkIds.has(c.id)).map((c) => c.id));
  });

  const toggle = (id: string) => {
    setOpenCategories((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const expandAll = () => setOpenCategories(new Set(FULL_MENU.map((c) => c.id)));
  const collapseAll = () => setOpenCategories(new Set());

  const foodCategories = FULL_MENU.filter((c) => !drinkIds.has(c.id));
  const drinkCategories = FULL_MENU.filter((c) => drinkIds.has(c.id));

  return (
    <section id="menu" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--terracotta)] mb-4 font-semibold">
              Menu
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl tracking-tight leading-tight">
              {lang === "zh" ? (
                <span className="font-[family-name:var(--font-zh)]">Amigos菜單</span>
              ) : (
                "Our Menu"
              )}
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={expandAll}
              className="text-[12px] tracking-wider uppercase text-[var(--muted)] hover:text-[var(--espresso)] transition-colors"
            >
              {lang === "zh" ? "全部展開" : "Expand All"}
            </button>
            <span className="text-[var(--sand)]">|</span>
            <button
              onClick={collapseAll}
              className="text-[12px] tracking-wider uppercase text-[var(--muted)] hover:text-[var(--espresso)] transition-colors"
            >
              {lang === "zh" ? "全部收合" : "Collapse All"}
            </button>
          </div>
        </div>

        {/* Food section */}
        <div className="mb-16">
          <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--muted)] mb-4 font-semibold">
            {lang === "zh" ? "餐點" : "Food"}
          </p>
          <div className="space-y-0">
            {foodCategories.map((cat) => (
              <MenuAccordion
                key={cat.id}
                category={cat}
                lang={lang}
                isOpen={openCategories.has(cat.id)}
                onToggle={() => toggle(cat.id)}
              />
            ))}
          </div>
        </div>

        {/* Drinks section */}
        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--muted)] mb-4 font-semibold">
            {lang === "zh" ? "飲品" : "Drinks"}
          </p>
          <div className="space-y-0">
            {drinkCategories.map((cat) => (
              <MenuAccordion
                key={cat.id}
                category={cat}
                lang={lang}
                isOpen={openCategories.has(cat.id)}
                onToggle={() => toggle(cat.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Social proof section ─── */
function SocialProof({ lang }: { lang: "zh" | "en" }) {
  const reviews = [
    {
      name: "李蛋蛋",
      zh: "生意很好的店家，便宜！帕尼尼真的強～環境乾淨，時間不會等太久，店滿時會有候位單可以寫。",
      en: "Always busy for a reason. Cheap! The panini is seriously good. Clean environment, reasonable wait, and they have a waitlist when it's full.",
      stars: 5,
    },
    {
      name: "蕭一傑",
      zh: "義大利麵非常讚大推一個，價格親民，煎煮炒炸都難不倒店員's。",
      en: "Highly recommend the pasta! Affordable prices and the staff can handle any cooking style.",
      stars: 5,
    },
    {
      name: "漆一二",
      zh: "餐點很好吃，份量也足夠，但提前預定好會比較有效率，人很多會等很久。",
      en: "Delicious food with generous portions. Better to book ahead since it gets very busy.",
      stars: 5,
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[var(--linen)]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-10">
          <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--terracotta)] mb-4 font-semibold">
            {lang === "zh" ? "來自 564 則 Google 真實評價" : "564 real Google reviews"}
          </p>
          <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl tracking-tight">
            <span className="inline-flex items-center gap-2">
              <Star className="h-6 w-6 fill-[var(--terracotta)] text-[var(--terracotta)]" />
              {lang === "zh" ? (
                <span className="font-[family-name:var(--font-zh)]">Google 評價 4.2</span>
              ) : (
                "Google Reviews 4.2"
              )}
            </span>
          </h3>
        </div>

        {/* Review cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white border border-[var(--sand)] p-6 text-left"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: r.stars }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-[14px] text-[var(--espresso)] leading-relaxed font-[family-name:var(--font-zh)]">
                &ldquo;{lang === "zh" ? r.zh : r.en}&rdquo;
              </p>
              <p className="mt-3 text-[11px] text-[var(--muted)] tracking-wide">
                {r.name} · Google {lang === "zh" ? "評論" : "Review"}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://maps.app.goo.gl/DPaBLB2GdnHyErC1A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white border border-[var(--sand)] px-6 py-3 text-[13px] font-semibold text-[var(--espresso)] hover:border-[var(--terracotta)] transition-colors"
          >
            <Star className="h-4 w-4" />
            <span>{lang === "zh" ? "查看更多 Google 評論" : "Read more on Google"}</span>
          </a>
          <a
            href="https://www.facebook.com/amigosyan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white border border-[var(--sand)] px-6 py-3 text-[13px] font-semibold text-[var(--espresso)] hover:border-[var(--terracotta)] transition-colors"
          >
            <MessageCircleMore className="h-4 w-4" />
            <span>{lang === "zh" ? "追蹤 Facebook 粉專" : "Follow on Facebook"}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Catering section (B2B) ─── */
function Catering({ lang }: { lang: "zh" | "en" }) {
  return (
    <section id="catering" className="py-24 md:py-32 bg-[var(--linen)]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: messaging */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--terracotta)] mb-4 font-semibold">
              {lang === "zh" ? "團體訂餐" : "Group Orders"}
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl tracking-tight leading-tight mb-6">
              {lang === "zh" ? (
                <span className="font-[family-name:var(--font-zh)]">
                  讓帕里尼<br />成為您聚餐的亮點
                </span>
              ) : (
                <>Make panini<br />your gathering's highlight</>
              )}
            </h2>
            <div className="space-y-4 text-[var(--muted)] leading-relaxed font-[family-name:var(--font-zh)]">
              <p>
                {lang === "zh"
                  ? "辦公午餐、部門聚餐、生日派對、員工福利；不管幾個人，我們都能準備。每份餐點都和店內品質一致，現做現送，乾淨包裝。"
                  : "From office lunches, team gatherings, birthday parties, to employee perks, no matter the headcount, we've got you covered. Every dish matches our in-store quality, made fresh with clean packaging."}
              </p>
              <p>
                {lang === "zh"
                  ? "提前 2 天預訂，菜單可依需求客製。詳情來電或 Facebook 私訊洽詢。"
                  : "Book 2 days ahead, and we'll customize the menu to your needs. Call us or send a Facebook message to request for more details."}
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:08-766-9690"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--terracotta)] px-7 py-3.5 text-[13px] font-semibold text-white tracking-wide hover:bg-[var(--terracotta-light)] transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>{lang === "zh" ? "來電洽詢" : "Call (08) 766-9690"}</span>
              </a>
              <a
                href="https://www.facebook.com/amigosyan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--espresso)] px-7 py-3.5 text-[13px] font-semibold text-[var(--espresso)] tracking-wide hover:bg-[var(--espresso)] hover:text-white transition-colors"
              >
                <MessageCircleMore className="h-4 w-4" />
                <span>{lang === "zh" ? "Facebook 私訊" : "Message on Facebook"}</span>
              </a>
            </div>
          </div>

          {/* Right: packages */}
          <div className="space-y-6">
            {CATERING_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className="rounded-2xl bg-white p-7 border border-[var(--sand)] hover:border-[var(--terracotta)]/30 transition-colors"
              >
                <h3 className="text-lg font-semibold font-[family-name:var(--font-zh)] mb-3">
                  {lang === "zh" ? pkg.zh : pkg.en}
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed font-[family-name:var(--font-zh)]">
                  {lang === "zh" ? pkg.descZh : pkg.descEn}
                </p>
                <a href="tel:08-766-9690" className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold text-[var(--terracotta)] uppercase tracking-wider hover:text-[var(--terracotta-light)] transition-colors">
                  <Phone className="h-3.5 w-3.5" />
                  <span>{lang === "zh" ? "來電洽詢" : "Request for proposal"}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}

            {/* Trust signals for B2B */}
            <div className="rounded-2xl bg-[var(--espresso)] p-7 text-white">
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-3 font-medium">
                {lang === "zh" ? "企業客戶信賴" : "Trusted by Businesses"}
              </p>
              <ul className="space-y-2 text-sm text-white/75 font-[family-name:var(--font-zh)]">
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--terracotta-light)]" />
                  {lang === "zh" ? "提前 2 天預訂，準時送達" : "2-day advance booking, on-time delivery"}
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--terracotta-light)]" />
                  {lang === "zh" ? "客製化菜單，滿足素食與過敏需求" : "Custom menus for dietary needs"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Gallery slideshow (auto-sliding, 20 photos for Google Business Profile) ─── */
function Gallery({ lang }: { lang: "zh" | "en" }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const total = GALLERY_IMAGES.length;

  // Auto-advance every 3.5s
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3500);
    return () => clearInterval(timer);
  }, [paused, total]);

  // Smooth-scroll the track when current changes
  useEffect(() => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const card = track.children[current] as HTMLElement | undefined;
    if (!card) return;
    const scrollLeft = card.offsetLeft - track.offsetLeft - (track.clientWidth / 2 - card.clientWidth / 2);
    track.scrollTo({ left: scrollLeft, behavior: "smooth" });
  }, [current]);

  const goTo = (idx: number) => setCurrent(idx);
  const goPrev = () => setCurrent((prev) => (prev - 1 + total) % total);
  const goNext = () => setCurrent((prev) => (prev + 1) % total);

  return (
    <section
      id="gallery"
      className="py-20 md:py-28 bg-[var(--espresso)] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-6xl px-6 mb-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--terracotta-light)] mb-4 font-semibold">
              {lang === "zh" ? "美食相簿" : "Gallery"}
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-white text-3xl md:text-4xl tracking-tight leading-tight">
              {lang === "zh" ? (
                <span className="font-[family-name:var(--font-zh)]">每一道都值得慢慢品味</span>
              ) : (
                "Every dish is worth tasting"
              )}
            </h2>
          </div>
          {/* Desktop nav arrows */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={goPrev}
              aria-label="Previous photo"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 hover:border-white/50 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button
              onClick={goNext}
              aria-label="Next photo"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 hover:border-white/50 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
            <span className="ml-3 text-[12px] tabular-nums text-white/40 font-medium">
              {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      {/* Scrollable track */}
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto scroll-smooth px-6 md:px-[calc((100vw-72rem)/2+1.5rem)] pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {GALLERY_IMAGES.map((img, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`group relative shrink-0 snap-center rounded-2xl overflow-hidden transition-all duration-500 ${
              i === current
                ? "w-[320px] md:w-[420px] aspect-[4/3] ring-2 ring-[var(--terracotta)] ring-offset-2 ring-offset-[var(--espresso)]"
                : "w-[240px] md:w-[300px] aspect-[4/3] opacity-60 hover:opacity-85"
            }`}
          >
            <img
              src={img.src}
              alt={lang === "zh" ? img.zh : img.en}
              loading={i < 5 ? "eager" : "lazy"}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Caption overlay on active slide */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-5 transition-opacity duration-500 ${
                i === current ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            >
              <p className="text-white text-[13px] font-medium font-[family-name:var(--font-zh)] leading-snug">
                {lang === "zh" ? img.zh : img.en}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="mx-auto max-w-6xl px-6 mt-8">
        <div className="flex items-center gap-1.5 justify-center md:justify-start">
          {GALLERY_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-400 ${
                i === current
                  ? "w-6 h-1.5 bg-[var(--terracotta)]"
                  : "w-1.5 h-1.5 bg-white/25 hover:bg-white/40"
              }`}
              aria-label={`Photo ${i + 1}`}
            />
          ))}
        </div>
        {/* Mobile counter */}
        <p className="mt-4 text-[12px] text-white/35 md:hidden text-center tabular-nums">
          {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </p>
      </div>
    </section>
  );
}

/* ─── Visit ─── */
function Visit({ lang }: { lang: "zh" | "en" }) {
  return (
    <section id="visit" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-5 gap-16">
          <div className="md:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--terracotta)] mb-4 font-semibold">
              {lang === "zh" ? "店家資訊" : "Restaurant Info"}
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-tight leading-tight mb-10">
              {lang === "zh" ? (
                <span className="font-[family-name:var(--font-zh)]">AMIGOS早午餐</span>
              ) : (
                "Restaurant Info"
              )}
            </h2>

            <div className="space-y-6 text-[var(--muted)]">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--espresso)] font-semibold mb-1">
                  {lang === "zh" ? "地址" : "Address"}
                </p>
                <p className="font-[family-name:var(--font-zh)]">
                  {lang === "zh" ? "屏東市濟南街 14 號" : "No. 14, Jinan St., Pingtung City"}
                </p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--espresso)] font-semibold mb-1">
                  {lang === "zh" ? "營業時間" : "Hours"}
                </p>
                <p className="font-[family-name:var(--font-zh)] font-medium text-[var(--espresso)]">
                  {lang === "zh" ? "每日 7:30 — 13:30" : "Daily 7:30 AM — 1:30 PM"}
                </p>
                <a href="https://www.facebook.com/amigosyan" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[12px] text-[var(--terracotta)] mt-1 font-[family-name:var(--font-zh)] hover:text-[var(--terracotta-light)] transition-colors">
                  {lang === "zh" ? "每月休息日提前公告在 Facebook 粉專 👉" : "Monthly rest days posted on our Facebook 👉"}
                </a>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--espresso)] font-semibold mb-1">
                  {lang === "zh" ? "電話" : "Phone"}
                </p>
                <a href="tel:08-766-9690" className="font-[family-name:var(--font-accent)] text-xl text-[var(--espresso)] hover:text-[var(--terracotta)] transition-colors">
                  (08) 766-9690
                </a>
              </div>
            </div>

            <div className="mt-10 flex gap-3">
              <a
                href="https://www.facebook.com/amigosyan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--espresso)] px-5 py-2.5 text-[12px] font-semibold tracking-wider uppercase text-[var(--espresso)] hover:bg-[var(--espresso)] hover:text-white transition-colors"
              >
                <MessageCircleMore className="h-4 w-4" />
                <span>Facebook</span>
              </a>
              <a
                href="https://maps.app.goo.gl/DPaBLB2GdnHyErC1A"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--espresso)] px-5 py-2.5 text-[12px] font-semibold tracking-wider uppercase text-[var(--espresso)] hover:bg-[var(--espresso)] hover:text-white transition-colors"
              >
                <MapPin className="h-4 w-4" />
                <span>Google Maps</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="rounded-2xl aspect-[4/3] overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=Amigos%E6%97%A9%E5%8D%88%E9%A4%90+%E5%B1%8F%E6%9D%B1%E5%B8%82%E6%BF%9F%E5%8D%97%E8%A1%9714%E8%99%9F&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={lang === "zh" ? "Amigos 早午餐 Google Maps 位置" : "Amigos Brunch Google Maps Location"}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function Reserve({ lang }: { lang: "zh" | "en" }) {
  return (
    <section id="reserve" className="py-24 md:py-32 bg-[var(--linen)]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative rounded-3xl overflow-hidden">
          <img src={ASSETS.panini4} alt="Panini" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[var(--espresso)]/80" />

          <div className="relative z-10 px-8 py-20 md:px-16 md:py-28 text-center">
            <p className="text-[11px] uppercase tracking-[0.35em] text-white/50 mb-4 font-medium">
              {lang === "zh" ? "預約" : "Reserve"}
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-white text-4xl md:text-6xl tracking-tight leading-tight max-w-2xl mx-auto">
              {lang === "zh" ? (
                <span className="font-[family-name:var(--font-zh)]">
                  現烤酥脆帕里尼出爐！<br />您準備好了嗎？
                </span>
              ) : (
                <>Hot-pressed crunchy panini is waiting for you.<br />Ready?.</>
              )}
            </h2>
            <p className="mt-6 text-white/55 max-w-lg mx-auto leading-relaxed font-[family-name:var(--font-zh)]">
              {lang === "zh"
                ? "兩個人的早午餐、十個人的聚餐、公司團體訂餐，一通電話就搞定。"
                : "Brunch for two, a gathering of ten, or a corporate group order. One call is all it takes."}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <ReservationPicker
                lang={lang}
                label={
                  <>
                    <Phone className="h-4 w-4" />
                    <span>{lang === "zh" ? "現在就訂位" : "Book Your Table Now"}</span>
                  </>
                }
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-[13px] font-semibold text-[var(--espresso)] tracking-wide hover:bg-[var(--terracotta)] hover:text-white transition-colors"
                panelClassName="left-1/2 -translate-x-1/2"
              />
              <a
                href="https://maps.app.goo.gl/DPaBLB2GdnHyErC1A"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-3.5 text-[13px] font-semibold text-white tracking-wide hover:bg-white/10 transition-colors"
              >
                <MapPin className="h-4 w-4" />
                <span>{lang === "zh" ? "Google Maps 導航" : "Get Directions"}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer({ lang }: { lang: "zh" | "en" }) {
  return (
    <footer className="border-t border-[var(--sand)] bg-[var(--espresso)] text-white py-14 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p className="font-[family-name:var(--font-display)] text-2xl italic">Amigos</p>
            <p className="mt-2 text-[13px] text-white/50 leading-relaxed font-[family-name:var(--font-zh)]">
              {lang === "zh"
                ? "和朋友放慢節奏，好好吃一餐的地方。"
                : "Where you slow down with friends and enjoy a proper meal."}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-semibold mb-4">
              {lang === "zh" ? "快速連結" : "Quick Links"}
            </p>
            <div className="space-y-2 text-[13px] text-white/65 font-[family-name:var(--font-zh)]">
              <a href="#menu" className="block hover:text-white transition-colors">{lang === "zh" ? "菜單" : "Menu"}</a>
              <a href="#catering" className="block hover:text-white transition-colors">{lang === "zh" ? "團體訂餐" : "Group Orders"}</a>
              <a href="#visit" className="block hover:text-white transition-colors">{lang === "zh" ? "店家資訊" : "Visit Us"}</a>
              <a href="https://www.facebook.com/amigosyan" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                <MessageCircleMore className="h-4 w-4" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Contact info */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-semibold mb-4">
              {lang === "zh" ? "聯絡我們" : "Contact"}
            </p>
            <div className="space-y-2 text-[13px] text-white/65 font-[family-name:var(--font-zh)]">
              <p>{lang === "zh" ? "屏東市濟南街 14 號" : "No. 14, Jinan St., Pingtung City"}</p>
              <a href="tel:08-766-9690" className="block hover:text-white transition-colors">(08) 766-9690</a>
              <p>{lang === "zh" ? "每日 7:30 — 13:30" : "Daily 7:30 AM — 1:30 PM"}</p>
              <p className="text-[12px] text-[var(--terracotta-light)]">
                {lang === "zh" ? "店休請依粉專當月公告為主" : "Closed days per Facebook announcement"}
              </p>
            </div>
            <div className="mt-4 flex gap-3">
              <a
                href="https://maps.app.goo.gl/DPaBLB2GdnHyErC1A"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[12px] text-white/50 hover:text-white transition-colors"
              >
                <MapPin className="h-3.5 w-3.5" />
                <span>{lang === "zh" ? "立即導航" : "Directions"}</span>
              </a>
              <a
                href="https://m.me/amigosyan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[12px] text-white/50 hover:text-white transition-colors"
              >
                <MessageCircleMore className="h-3.5 w-3.5" />
                <span>{lang === "zh" ? "傳訊息詢問" : "Message Us"}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-[11px] text-white/30">
          © 2026 Amigos Brunch. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* ─── Sticky mobile CTA ─── */
function StickyMobileCTA({ lang }: { lang: "zh" | "en" }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="mobile-sticky-shell safe-bottom fixed z-50 rounded-[28px] border border-[var(--sand)] bg-[var(--warm-white)]/96 px-3 py-3 shadow-[0_18px_45px_rgba(44,36,32,0.16)] backdrop-blur-md md:hidden">
      <div className="grid grid-cols-2 gap-3">
        <ReservationPicker
          lang={lang}
          label={
            <>
              <Phone className="h-4 w-4" />
              <span>{lang === "zh" ? "立即訂位" : "Reserve Now"}</span>
            </>
          }
          wrapperClassName="block min-w-0"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--terracotta)] py-3 text-white text-[13px] font-semibold tracking-wide"
          panelClassName="bottom-full left-0 right-0 mb-3 mt-0 min-w-0"
        />
        <a
          href="https://maps.app.goo.gl/DPaBLB2GdnHyErC1A"
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-w-0 w-full items-center justify-center gap-2 rounded-full border border-[var(--espresso)] py-3 text-[var(--espresso)] text-[13px] font-semibold tracking-wide"
        >
          <MapPin className="h-4 w-4" />
          <span>{lang === "zh" ? "導航" : "Directions"}</span>
        </a>
      </div>
    </div>
  );
}

/* ─── Page ─── */
export default function AmigosBrunchCafeWebsite() {
  const [lang, setLang] = useState<"zh" | "en">("zh");

  return (
    <div className="mobile-sticky-offset min-h-screen">
      <Header lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <TrustBar lang={lang} />
      <Story lang={lang} />
      <Gallery lang={lang} />
      <MenuSection lang={lang} />
      <SocialProof lang={lang} />
      <Catering lang={lang} />
      <Visit lang={lang} />
      <Reserve lang={lang} />
      <Footer lang={lang} />
      <StickyMobileCTA lang={lang} />
    </div>
  );
}
