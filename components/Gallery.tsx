"use client";
import { useCallback, useEffect, useState } from "react";
import { CaretLeft, CaretRight, Images, X } from "@phosphor-icons/react";
import { asset, photos } from "@/lib/property";

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const close = () => setOpen(null);
  const step = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + photos.length) % photos.length)), []);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [open, step]);

  const [hero, ...rest] = photos;
  if (!hero) return null;
  const preview = rest.slice(0, 4);

  return (
    <>
      <div className="relative grid gap-2 sm:h-[26rem] sm:grid-cols-4 sm:grid-rows-2">
        <button onClick={() => setOpen(0)} className="overflow-hidden rounded-card sm:col-span-2 sm:row-span-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset(hero.src)} alt={hero.alt} className="h-64 w-full object-cover transition hover:scale-105 sm:h-full" />
        </button>
        {preview.map((p, i) => (
          <button key={p.src} onClick={() => setOpen(i + 1)} className="hidden overflow-hidden rounded-card sm:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset(p.src)} alt={p.alt} loading="lazy" className="h-full w-full object-cover transition hover:scale-105" />
          </button>
        ))}
        <button onClick={() => setOpen(0)} className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold shadow">
          <Images size={18} weight="bold" /> View all {photos.length} photos
        </button>
      </div>

      {open !== null && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex flex-col bg-black/95 text-white">
          <div className="flex items-center justify-between p-4">
            <span className="text-sm">{open + 1} / {photos.length} · {photos[open].alt}</span>
            <button onClick={close} aria-label="Close" className="rounded-full p-2 hover:bg-white/10"><X size={24} /></button>
          </div>
          <div className="relative flex min-h-0 flex-1 items-center justify-center px-12">
            <button onClick={() => step(-1)} aria-label="Previous" className="absolute left-2 rounded-full p-3 hover:bg-white/10"><CaretLeft size={28} /></button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset(photos[open].src)} alt={photos[open].alt} className="max-h-full max-w-full object-contain" />
            <button onClick={() => step(1)} aria-label="Next" className="absolute right-2 rounded-full p-3 hover:bg-white/10"><CaretRight size={28} /></button>
          </div>
          <div className="flex gap-2 overflow-x-auto p-4">
            {photos.map((p, i) => (
              <button key={p.src} onClick={() => setOpen(i)} className={`h-16 w-24 shrink-0 overflow-hidden rounded ${i === open ? "ring-2 ring-white" : "opacity-60 hover:opacity-100"}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset(p.src)} alt="" loading="lazy" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
