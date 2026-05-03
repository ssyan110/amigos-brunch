"use client";
import React, { useState, useEffect, useCallback } from "react";
import { ASSETS, FULL_MENU, HERO_SLIDES, CATERING_PACKAGES } from "@/lib/data";
import type { MenuCategory, MenuItem, MenuSubGroup } from "@/lib/data";

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
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[800ms] ease-in-out ${
            i === current && !isTransitioning ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--espresso)]/85 via-[var(--espresso)]/35 to-[var(--espresso)]/10" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 md:pb-24">
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-[11px] uppercase tracking-[0.4em] text-white/50 mb-5 font-medium">
            {lang === "zh" ? "屏東 · 義式帕里尼專門店" : "Pingtung · Italian Panini Specialist"}
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-white text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight max-w-3xl">
            {lang === "zh" ? (
              <span className="font-[family-name:var(--font-zh)]">
                一口熱壓，<br />開啟慢早晨
              </span>
            ) : (
              <>One warm bite,<br />a slow morning begins.</>
            )}
          </h1>
          <p className="mt-6 text-white/65 text-base md:text-lg max-w-xl leading-relaxed font-light">
            {lang === "zh"
              ? "以義式帕里尼為招牌，結合早午餐與咖啡。朋友相聚、公司聚餐——我們都準備好了。"
              : "Signature Italian panini, brunch plates, and coffee. Friends gathering, corporate meals — we're ready."}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="rounded-full bg-white px-7 py-3.5 text-[13px] font-semibold text-[var(--espresso)] tracking-wide hover:bg-[var(--terracotta)] hover:text-white transition-colors"
            >
              {lang === "zh" ? "瀏覽菜單" : "View Menu"}
            </a>
            <a
              href="#catering"
              className="rounded-full border border-white/40 px-7 py-3.5 text-[13px] font-semibold text-white tracking-wide hover:bg-white/10 transition-colors"
            >
              {lang === "zh" ? "團體訂餐方案" : "Group Orders"}
            </a>
          </div>

          {/* Slide indicators */}
          <div className="mt-10 flex gap-2">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrent(i); setIsTransitioning(false); }}
                className={`h-[3px] rounded-full transition-all duration-500 ${
                  i === current ? "w-8 bg-white" : "w-4 bg-white/30"
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--cream)]/95 backdrop-blur-md border-b border-[var(--sand)] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3 group">
          <span
            className={`font-[family-name:var(--font-display)] text-2xl italic tracking-tight transition-colors ${
              scrolled ? "text-[var(--espresso)]" : "text-white"
            } group-hover:text-[var(--terracotta)]`}
          >
            Amigos
          </span>
          <span
            className={`hidden sm:block text-[10px] uppercase tracking-[0.25em] font-medium mt-1 transition-colors ${
              scrolled ? "text-[var(--muted)]" : "text-white/60"
            }`}
          >
            Brunch &amp; Cafe
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-wide">
          {[
            { href: "#story", zh: "品牌故事", en: "Story" },
            { href: "#menu", zh: "菜單", en: "Menu" },
            { href: "#catering", zh: "團體訂餐", en: "Group Orders" },
            { href: "#visit", zh: "門市資訊", en: "Visit" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors font-[family-name:var(--font-zh)] ${
                scrolled ? "text-[var(--muted)] hover:text-[var(--espresso)]" : "text-white/70 hover:text-white"
              }`}
            >
              {lang === "zh" ? link.zh : link.en}
            </a>
          ))}
          <a
            href="#reserve"
            className="ml-2 rounded-full bg-[var(--terracotta)] px-5 py-2.5 text-white text-[12px] tracking-wider uppercase hover:bg-[var(--terracotta-light)] transition-colors"
          >
            {lang === "zh" ? "訂位" : "Reserve"}
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex gap-2 text-[11px] tracking-[0.15em] font-semibold uppercase">
            <button
              onClick={() => setLang("zh")}
              className={`transition-colors ${
                lang === "zh"
                  ? "text-[var(--terracotta)]"
                  : scrolled ? "text-[var(--muted)]" : "text-white/50"
              }`}
            >
              中
            </button>
            <span className={scrolled ? "text-[var(--sand)]" : "text-white/20"}>/</span>
            <button
              onClick={() => setLang("en")}
              className={`transition-colors ${
                lang === "en"
                  ? "text-[var(--terracotta)]"
                  : scrolled ? "text-[var(--muted)]" : "text-white/50"
              }`}
            >
              EN
            </button>
          </div>
          <button
            className={`md:hidden text-sm font-semibold tracking-wider uppercase transition-colors ${
              scrolled ? "text-[var(--espresso)]" : "text-white"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? "✕" : "Menu"}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[var(--cream)] border-t border-[var(--sand)] px-6 py-6 space-y-4 font-[family-name:var(--font-zh)]">
          <a href="#story" onClick={() => setMobileOpen(false)} className="block text-lg">品牌故事</a>
          <a href="#menu" onClick={() => setMobileOpen(false)} className="block text-lg">菜單</a>
          <a href="#catering" onClick={() => setMobileOpen(false)} className="block text-lg">團體訂餐</a>
          <a href="#visit" onClick={() => setMobileOpen(false)} className="block text-lg">門市資訊</a>
          <a href="#reserve" onClick={() => setMobileOpen(false)} className="inline-block mt-2 rounded-full bg-[var(--terracotta)] px-6 py-3 text-white text-sm">
            立即訂位
          </a>
        </div>
      )}
    </header>
  );
}


/* ─── Social proof bar ─── */
function TrustBar({ lang }: { lang: "zh" | "en" }) {
  const stats = [
    { num: "10", zh: "年在地經營", en: "Years in Pingtung" },
    { num: "20+", zh: "款帕里尼口味", en: "Panini Varieties" },
    { num: "4.2★", zh: "Google 評分", en: "Google Rating" },
    { num: "100%", zh: "手作美味", en: "Hand-made craft" },
  ];

  return (
    <section className="border-y border-[var(--sand)] bg-[var(--linen)]">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.num}>
              <p className="font-[family-name:var(--font-accent)] text-3xl md:text-4xl text-[var(--terracotta)]">
                {s.num}
              </p>
              <p className="mt-1 text-[12px] uppercase tracking-[0.15em] text-[var(--muted)] font-medium">
                {lang === "zh" ? s.zh : s.en}
              </p>
            </div>
          ))}
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
                <span className="font-[family-name:var(--font-zh)]">Amigos，<br />就是好朋友</span>
              ) : (
                <>Amigos means<br />good friends.</>
              )}
            </h2>
            <div className="space-y-5 text-[var(--muted)] leading-relaxed font-[family-name:var(--font-zh)]">
              <p>
                {lang === "zh"
                  ? "Amigos 早午餐以義式帕里尼為主軸，搭配早午餐拼盤、輕食三明治與手作飲品。我們相信好的食物不需要複雜，只需要用心。"
                  : "Amigos Brunch centers on Italian panini, paired with brunch plates, light sandwiches, and handcrafted drinks. Good food doesn't need to be complicated — just made with care."}
              </p>
              <p>
                {lang === "zh"
                  ? "位於屏東市濟南街，這裡是朋友聚會、家庭用餐、或一個人安靜享受早晨的理想角落。無論是日常用餐還是公司團體訂餐，我們都用同樣的心意準備每一份餐點。"
                  : "Located on Jinan Street in Pingtung — the perfect corner for friends, family, or a quiet morning alone. Whether it's a daily meal or a corporate group order, every dish is prepared with the same care."}
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

/* ─── Signature panini highlight ─── */
function SignatureHighlight({ lang }: { lang: "zh" | "en" }) {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-[var(--espresso)]">
      <img
        src={ASSETS.panini3}
        alt="Signature panini"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <p className="text-[11px] uppercase tracking-[0.4em] text-[var(--terracotta-light)] mb-5 font-medium">
          {lang === "zh" ? "招牌主角" : "Our Signature"}
        </p>
        <h2 className="font-[family-name:var(--font-display)] text-white text-4xl md:text-6xl lg:text-7xl tracking-tight leading-tight max-w-3xl mx-auto">
          {lang === "zh" ? (
            <span className="font-[family-name:var(--font-zh)]">
              義式帕里尼<br />酥脆、熱烤
            </span>
          ) : (
            <>Italian Panini<br />Crispy. Warm. Rich.</>
          )}
        </h2>
        <p className="mt-6 text-white/55 max-w-lg mx-auto leading-relaxed font-[family-name:var(--font-zh)]">
          {lang === "zh"
            ? "每一份帕里尼都經過熱壓至外酥內軟，搭配新鮮食材與手工醬料。20 多種口味，從經典到創意，總有一款適合你。"
            : "Every panini is hot-pressed to crispy perfection with fresh ingredients and house-made sauces. 20+ flavors from classic to creative — there's one for everyone."}
        </p>
        <a
          href="#menu"
          className="inline-block mt-8 rounded-full bg-[var(--terracotta)] px-8 py-3.5 text-[13px] font-semibold text-white tracking-wide hover:bg-[var(--terracotta-light)] transition-colors"
        >
          {lang === "zh" ? "查看完整菜單" : "See Full Menu"}
        </a>
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
    <div className="border-b border-[var(--sand)]">
      {/* Header — always visible */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 md:py-6 text-left group"
      >
        <div className="flex-1 min-w-0">
          <h3 className="text-lg md:text-xl font-semibold font-[family-name:var(--font-zh)] text-[var(--espresso)] group-hover:text-[var(--terracotta)] transition-colors">
            {lang === "zh" ? category.zh : category.en}
          </h3>
          {lang === "zh" && (
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--muted)] mt-0.5">
              {category.en}
            </p>
          )}
        </div>
        <div className="flex items-center gap-3 shrink-0 ml-4">
          <span className="text-[12px] text-[var(--muted)] tabular-nums">
            {itemCount} {lang === "zh" ? "項" : "items"}
          </span>
          <span
            className={`text-[var(--muted)] transition-transform duration-300 text-lg ${
              isOpen ? "rotate-45" : "rotate-0"
            }`}
          >
            +
          </span>
        </div>
      </button>

      {/* Expandable content */}
      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen ? "max-h-[3000px] opacity-100 pb-6" : "max-h-0 opacity-0"
        }`}
      >
        {/* Category note */}
        {category.note && (
          <p className="text-[13px] text-[var(--muted)] mb-4 pl-1 italic font-[family-name:var(--font-zh)]">
            {lang === "zh" ? category.note.zh : category.note.en}
          </p>
        )}

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
                <span className="font-[family-name:var(--font-zh)]">全日菜單</span>
              ) : (
                "All-Day Menu"
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
          <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--muted)] mb-6 font-semibold">
            {lang === "zh" ? "餐點" : "Food"}
          </p>
          <div className="border-t border-[var(--sand)]">
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
          <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--muted)] mb-6 font-semibold">
            {lang === "zh" ? "飲品" : "Drinks"}
          </p>
          <div className="border-t border-[var(--sand)]">
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
                  讓帕里尼<br />成為你的會議亮點
                </span>
              ) : (
                <>Make panini<br />your meeting highlight</>
              )}
            </h2>
            <div className="space-y-4 text-[var(--muted)] leading-relaxed font-[family-name:var(--font-zh)]">
              <p>
                {lang === "zh"
                  ? "公司會議、部門聚餐、員工福利——Amigos 提供客製化的團體訂餐方案。每份餐點都和店內品質一致，新鮮手作。"
                  : "Team meetings, department lunches, employee perks — Amigos offers group catering. Every dish matches our in-store quality, made fresh and delivered."}
              </p>
              <p>
                {lang === "zh"
                  ? "我們理解企業需求：準時送達、乾淨包裝、彈性菜單。讓您專注在重要的事，餐點就交給我們。"
                  : "We understand business needs: on-time delivery, clean packaging, flexible menus, proper invoicing. Focus on what matters — leave the food to us."}
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:08-766-9690"
                className="rounded-full bg-[var(--terracotta)] px-7 py-3.5 text-[13px] font-semibold text-white tracking-wide hover:bg-[var(--terracotta-light)] transition-colors"
              >
                {lang === "zh" ? "來電洽詢 (08) 766-9690" : "Call (08) 766-9690"}
              </a>
              <a
                href="https://www.facebook.com/amigosyan/photos"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[var(--espresso)] px-7 py-3.5 text-[13px] font-semibold text-[var(--espresso)] tracking-wide hover:bg-[var(--espresso)] hover:text-white transition-colors"
              >
                {lang === "zh" ? "Facebook 私訊" : "Message on Facebook"}
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
                <p className="mt-3 text-[12px] font-semibold text-[var(--terracotta)] uppercase tracking-wider">
                  {lang === "zh" ? "來電洽詢報價" : "Call to request for proposal"}
                </p>
              </div>
            ))}

            {/* Trust signals for B2B */}
            <div className="rounded-2xl bg-[var(--espresso)] p-7 text-white">
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-3 font-medium">
                {lang === "zh" ? "企業客戶信賴" : "Trusted by Businesses"}
              </p>
              <ul className="space-y-2 text-sm text-white/75 font-[family-name:var(--font-zh)]">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--terracotta-light)] mt-0.5">✓</span>
                  {lang === "zh" ? "提前 3 天預訂，準時送達" : "3-day advance booking, on-time delivery"}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--terracotta-light)] mt-0.5">✓</span>
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

/* ─── Gallery ─── */
function Gallery() {
  const allImages = [
    ASSETS.panini1, ASSETS.panini2, ASSETS.panini3, ASSETS.panini4,
    ASSETS.food1, ASSETS.food2, ASSETS.food3, ASSETS.food4,
  ];

  return (
    <section className="overflow-hidden">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
        {allImages.map((src, i) => (
          <div key={i} className="img-reveal aspect-square">
            <img src={src} alt={`Amigos food ${i + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
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
              {lang === "zh" ? "門市資訊" : "Visit Us"}
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-tight leading-tight mb-10">
              {lang === "zh" ? (
                <span className="font-[family-name:var(--font-zh)]">AMIGOS早午餐</span>
              ) : (
                "Come visit"
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
                <p className="text-[12px] text-[var(--terracotta)] mt-1 font-[family-name:var(--font-zh)]">
                  {lang === "zh"
                    ? "店休請依粉專當月公告為主"
                    : "Closed days announced monthly on our Facebook page"}
                </p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--espresso)] font-semibold mb-1">
                  {lang === "zh" ? "電話" : "Phone"}
                </p>
                <p className="font-[family-name:var(--font-accent)] text-xl text-[var(--espresso)]">
                  (08) 766-9690
                </p>
              </div>
            </div>

            <div className="mt-10 flex gap-3">
              <a
                href="https://www.facebook.com/amigosyan/photos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-[var(--espresso)] px-5 py-2.5 text-[12px] font-semibold tracking-wider uppercase text-[var(--espresso)] hover:bg-[var(--espresso)] hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://maps.app.goo.gl/DPaBLB2GdnHyErC1A"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-[var(--espresso)] px-5 py-2.5 text-[12px] font-semibold tracking-wider uppercase text-[var(--espresso)] hover:bg-[var(--espresso)] hover:text-white transition-colors"
              >
                Google Maps
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="img-reveal rounded-2xl aspect-[4/3] overflow-hidden">
              <img src={ASSETS.food3} alt="Amigos interior" className="w-full h-full object-cover rounded-2xl" />
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
                <span className="font-[family-name:var(--font-zh)]">給自己一個美味的早晨</span>
              ) : (
                "Craving a panini today?"
              )}
            </h2>
            <p className="mt-6 text-white/55 max-w-lg mx-auto leading-relaxed font-[family-name:var(--font-zh)]">
              {lang === "zh"
                ? "個人用餐、朋友聚會、或公司團體訂餐——歡迎來電或私訊預約。"
                : "Solo dining, friends gathering, or corporate group orders — call or message to reserve."}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href="tel:08-766-9690"
                className="rounded-full bg-white px-8 py-3.5 text-[13px] font-semibold text-[var(--espresso)] tracking-wide hover:bg-[var(--terracotta)] hover:text-white transition-colors"
              >
                {lang === "zh" ? "來電訂位 (08) 766-9690" : "Call (08) 766-9690"}
              </a>
              <a
                href="https://maps.app.goo.gl/DPaBLB2GdnHyErC1A"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/40 px-8 py-3.5 text-[13px] font-semibold text-white tracking-wide hover:bg-white/10 transition-colors"
              >
                {lang === "zh" ? "Google Maps 導航" : "Get Directions"}
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
    <footer className="border-t border-[var(--sand)] bg-[var(--cream)] py-12 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <p className="font-[family-name:var(--font-display)] text-xl italic text-[var(--espresso)]">
              Amigos
            </p>
            <p className="mt-1 text-[12px] text-[var(--muted)] font-[family-name:var(--font-zh)]">
              {lang === "zh" ? "屏東市濟南街 14 號" : "No. 14, Jinan St., Pingtung City"}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 text-[12px] text-[var(--muted)] tracking-wide">
            <a href="#menu" className="hover:text-[var(--espresso)] transition-colors font-[family-name:var(--font-zh)]">
              {lang === "zh" ? "菜單" : "Menu"}
            </a>
            <a href="#catering" className="hover:text-[var(--espresso)] transition-colors font-[family-name:var(--font-zh)]">
              {lang === "zh" ? "團體訂餐" : "Group Orders"}
            </a>
            <a href="https://www.facebook.com/amigosyan/photos" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--espresso)] transition-colors">
              Facebook
            </a>
            <a href="tel:08-766-9690" className="hover:text-[var(--espresso)] transition-colors">
              (08) 766-9690
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-[var(--sand)] text-[11px] text-[var(--muted)]">
          © 2026 Amigos Brunch. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ─── */
export default function AmigosBrunchCafeWebsite() {
  const [lang, setLang] = useState<"zh" | "en">("zh");

  return (
    <div className="min-h-screen">
      <Header lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <TrustBar lang={lang} />
      <Story lang={lang} />
      <SignatureHighlight lang={lang} />
      <MenuSection lang={lang} />
      <Gallery />
      <Catering lang={lang} />
      <Visit lang={lang} />
      <Reserve lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
