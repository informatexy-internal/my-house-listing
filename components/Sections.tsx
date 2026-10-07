import {
  Bed, Bathtub, Users, Ruler, CheckCircle, XCircle, HandCoins, ChatCircleText,
  FileText, Key, Car, ShoppingCart, ArrowSquareOut, Tree, GraduationCap, Handshake, Quotes, PawPrint, ShieldCheck, Clock, MapPin,
} from "@phosphor-icons/react/ssr";
import { money, property as p } from "@/lib/property";

export function TrustStrip() {
  const items = [
    { icon: HandCoins, title: "No platform fees", sub: "Book direct with the owner" },
    { icon: Clock, title: "Reply in 24h", sub: "A real person, not a bot" },
    { icon: PawPrint, title: "Pet friendly", sub: "Pets welcome with a pet fee" },
    { icon: ShieldCheck, title: "Application & checks", sub: `${money(p.applicationFee)} fee · pay stubs required` },
  ];
  return (
    <section className="bg-pine-deep text-paper">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-6 md:grid-cols-4">
        {items.map(({ icon: I, title, sub }) => (
          <div key={title} className="flex items-center gap-3">
            <I size={32} weight="duotone" className="shrink-0 text-clay-mist" />
            <div><p className="font-semibold">{title}</p><p className="text-sm text-pine-mist">{sub}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Facts() {
  const facts = [
    { icon: Bed, label: `${p.bedrooms} bedrooms` },
    { icon: Bathtub, label: `${p.bathrooms} baths` },
    { icon: Users, label: "Good for families" },
    { icon: Ruler, label: `${p.sqft} sq ft` },
    { icon: PawPrint, label: p.petsAllowed ? "Pets allowed (fee)" : "No pets" },
  ];
  return (
    <ul className="flex flex-wrap gap-3">
      {facts.map(({ icon: I, label }) => (
        <li key={label} className="chip"><I size={20} weight="duotone" />{label}</li>
      ))}
    </ul>
  );
}

export function Amenities() {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {p.amenities.map((a) => (
        <li key={a} className="flex items-center gap-2"><CheckCircle size={22} weight="fill" className="text-clay" />{a}</li>
      ))}
    </ul>
  );
}

export function HowItWorks() {
  const steps = [
    { icon: ChatCircleText, title: "Message me on WhatsApp", text: "Tell me your move-in date and who is coming." },
    { icon: Handshake, title: "We confirm", text: "I confirm availability and answer questions, usually same day." },
    { icon: FileText, title: "Apply & get approved", text: `Adults submit the application (${money(p.applicationFee)} fee) and recent pay stubs, and pass a background check. Then sign the lease and pay the ${money(p.securityDeposit)} deposit.` },
    { icon: Key, title: "Move in", text: "Keys in hand, clean and ready on move-in day." },
  ];
  return (
    <section id="how" className="scroll-mt-16 bg-sand py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="section-title">Booking direct is simple</h2>
        <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: I, title, text }, i) => (
            <li key={title} className="card p-6">
              <div className="mb-3 flex items-center gap-3"><I size={32} weight="duotone" className="text-clay" /><span className="text-sm font-semibold text-clay">Step {i + 1}</span></div>
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-1 text-ink-soft">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Compare() {
  const rows = [
    ["Booking platform fees", "None", "Added to every booking"],
    ["Talk to the owner", "Directly", "Through the platform"],
    ["Lease terms", "Direct with the owner", "Set by the platform"],
    ["Deposit & lease", "One simple lease", "Platform terms"],
  ];
  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold text-pine-deep">Why book direct</h2>
      <div className="overflow-hidden rounded-card border border-line">
        <div className="grid grid-cols-3 bg-sand p-3 text-sm font-semibold"><span /><span className="text-pine">This listing</span><span className="text-ink-soft">Booking platforms</span></div>
        {rows.map(([k, a, b]) => (
          <div key={k} className="grid grid-cols-3 items-center border-t border-line p-3 text-sm">
            <span className="font-medium">{k}</span>
            <span className="flex items-center gap-1 text-pine"><CheckCircle size={18} weight="fill" />{a}</span>
            <span className="flex items-center gap-1 text-ink-soft"><XCircle size={18} />{b}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Testimonials() {
  if (p.testimonials.length === 0) return null;
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="mb-6 section-title">What guests say</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {p.testimonials.map((t) => (
          <figure key={t.name} className="card p-6">
            <Quotes size={28} weight="fill" className="text-clay" />
            <blockquote className="mt-2 text-ink">{t.quote}</blockquote>
            <figcaption className="mt-3 text-sm font-semibold">{t.name} <span className="font-normal text-ink-soft">· {t.detail}</span></figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function Location() {
  return <p className="flex items-center gap-2 text-ink-soft"><MapPin size={20} weight="duotone" />{p.city}, {p.region} · {p.addressHint}</p>;
}

export function Requirements() {
  return (
    <ul className="grid gap-3">
      {p.requirements.map((r) => (
        <li key={r} className="flex items-start gap-2"><CheckCircle size={22} weight="fill" className="mt-0.5 shrink-0 text-clay" />{r}</li>
      ))}
    </ul>
  );
}

const nearbyIcons = { car: Car, cart: ShoppingCart, tree: Tree, school: GraduationCap };

export function Nearby() {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        {p.nearby.map((g) => {
          const I = nearbyIcons[g.icon as keyof typeof nearbyIcons];
          return (
            <div key={g.group} className="card-tint p-5">
              <h3 className="mb-3 flex items-center gap-2 font-semibold text-pine-deep"><I size={24} weight="duotone" className="text-clay" />{g.group}</h3>
              <ul className="grid gap-1.5 text-sm">
                {g.items.map((i) => (
                  <li key={i.name} className="flex justify-between gap-3"><span>{i.name}</span><span className="shrink-0 text-ink-soft">{i.mi} mi</span></li>
                ))}
              </ul>
              {"note" in g && g.note && <p className="mt-3 text-xs text-ink-soft">{g.note}</p>}
            </div>
          );
        })}
      </div>
      <p className="mt-3 text-xs text-ink-soft">Approximate straight-line distances within 5 miles. Drive times vary.</p>
    </div>
  );
}

export function Research() {
  return (
    <div>
      <ul className="grid gap-2 sm:grid-cols-2">
        {p.research.map((r) => {
          const I = r.icon === "school" ? GraduationCap : ShieldCheck;
          return (
            <li key={r.href}>
              <a href={r.href} target="_blank" rel="noopener noreferrer" className="card flex items-center gap-3 p-4 text-sm font-medium text-pine-deep shadow-none hover:bg-sand">
                <I size={22} weight="duotone" className="shrink-0 text-clay" />
                <span className="grow">{r.label}</span>
                <ArrowSquareOut size={16} className="shrink-0 text-ink-soft" />
              </a>
            </li>
          );
        })}
      </ul>
      <p className="mt-3 text-xs text-ink-soft">Third-party sites, not run by {p.brand}. Ratings and statistics change; check current data and confirm school zoning with the Cherokee County School District.</p>
    </div>
  );
}
