import ContactButtons from "@/components/ContactButtons";
import Gallery from "@/components/Gallery";
import Nav from "@/components/Nav";
import { Amenities, Compare, Facts, HowItWorks, Location, Nearby, Requirements, Research, Testimonials, TrustStrip } from "@/components/Sections";
import { availableLabel, money, photos, property as p, site } from "@/lib/property";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Accommodation",
    name: p.title,
    description: p.description.join(" "),
    numberOfRooms: p.bedrooms,
    availabilityStarts: p.availableFrom,
    petsAllowed: p.petsAllowed,
    address: { "@type": "PostalAddress", addressLocality: p.city, addressRegion: p.region, postalCode: "30115", addressCountry: p.country },
    image: photos.slice(0, 10).map((x) => `${site.url}${x.src}`),
    amenityFeature: p.amenities.map((a) => ({ "@type": "LocationFeatureSpecification", name: a, value: true })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main id="top">
        <section className="mx-auto max-w-6xl px-4 pb-10 pt-10">
          <p className="eyebrow mb-3">Home for rent in Canton, GA · Available {availableLabel}</p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-pine-deep sm:text-6xl">{p.title}</h1>
          <p className="mt-3 max-w-2xl text-lg text-ink-soft">{p.tagline}</p>
          <div className="mt-3"><Location /></div>
          <div id="photos" className="mt-8 scroll-mt-20"><Gallery /></div>
        </section>

        <TrustStrip />

        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-[1fr_340px]">
          <div className="grid gap-12">
            <section className="grid gap-5">
              <Facts />
              <div className="grid gap-3 text-ink">{p.description.map((t) => <p key={t}>{t}</p>)}</div>
            </section>
            {p.amenities.length > 0 && <section><h2 className="mb-4 text-2xl font-semibold text-pine-deep">Amenities</h2><Amenities /></section>}
            <section><h2 className="mb-4 text-2xl font-semibold text-pine-deep">Rental requirements</h2><Requirements /></section>
            <section id="nearby" className="scroll-mt-20"><h2 className="mb-4 text-2xl font-semibold text-pine-deep">What's nearby</h2><Nearby /></section>
            <section id="research" className="scroll-mt-20"><h2 className="mb-4 text-2xl font-semibold text-pine-deep">Research the area</h2><Research /></section>
            <Compare />
            <section id="faq" className="scroll-mt-20">
              <h2 className="mb-4 text-2xl font-semibold text-pine-deep">Good to know</h2>
              <div className="grid gap-4">
                {p.faqs.map((f) => (
                  <details key={f.q} className="group card p-4 shadow-none">
                    <summary className="cursor-pointer font-medium">{f.q}</summary>
                    <p className="mt-2 text-ink-soft">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>

          <aside className="h-fit card p-6 lg:sticky lg:top-20">
            <p className="chip mb-3">Available {availableLabel}</p>
            <p className="font-display text-4xl font-semibold text-pine-deep">{money(p.monthlyRate)}<span className="text-base font-normal text-ink-soft"> / month</span></p>
            <p className="mb-5 text-sm text-ink-soft">{money(p.securityDeposit)} deposit (1 month) · {p.minStayMonths}+ month lease · {money(p.applicationFee)} application &amp; background check fee · pay stubs required</p>
            <ContactButtons />
          </aside>
        </div>

        <HowItWorks />
        <Testimonials />

        <section id="inquiry" className="mx-auto max-w-3xl scroll-mt-16 px-4 py-14 text-center">
          <h2 className="section-title mb-2">Interested? Message me on WhatsApp</h2>
          <p className="mb-6 text-ink-soft">Send your move-in date and who will be living here. I reply within 24 hours.</p>
          <ContactButtons />
        </section>
      </main>

      <footer className="border-t border-line py-8 text-sm text-ink-soft">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4">
          <span>© {new Date().getFullYear()} {p.brand}</span>
                  </div>
      </footer>
    </>
  );
}
