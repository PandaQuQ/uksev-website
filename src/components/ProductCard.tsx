import type { Product } from "@/data/products";
import { SITE, enquireMailto } from "@/lib/site";
import { Btn } from "./Btn";

export function ProductCard({ product }: { product: Product }) {
  const p = product;
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-hair bg-ground-2 transition-colors hover:border-[rgba(232,145,60,0.45)]">
      <div
        className="relative aspect-[4/3] bg-[#15181c] bg-cover bg-center"
        style={{ backgroundImage: `url(${p.img})` }}
      >
        {p.stock ? (
          <span className="absolute top-3 left-3 border-b border-teal pb-0.5 text-[10px] font-semibold tracking-[0.12em] text-teal uppercase">
            UK Stock
          </span>
        ) : (
          <span className="absolute top-3 left-3 border-b border-muted pb-0.5 text-[10px] font-semibold tracking-[0.12em] text-muted uppercase">
            Check stock
          </span>
        )}
        {p.was != null && (
          <span className="absolute top-3 right-3 text-[10px] font-semibold tracking-[0.12em] text-amber uppercase">
            Guide sale
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 px-4 pt-4 pb-[18px]">
        <div className="text-[10px] font-semibold tracking-[0.14em] text-amber uppercase">
          {p.code} · {p.brand}
        </div>
        <h3 className="font-display text-xl font-bold tracking-[-0.02em]">{p.name}</h3>
        <div className="flex-1 text-xs leading-[1.45] text-ink-2">{p.spec}</div>
        <div className="font-display mt-1 text-lg font-bold tracking-[-0.02em]">
          {p.was != null && (
            <s className="mr-1.5 text-[13px] font-medium text-muted">
              £{p.was.toLocaleString("en-GB")}
            </s>
          )}
          {p.priceLabel}
        </div>
        <div className="mt-2.5 grid grid-cols-[1.2fr_1fr] gap-2">
          <Btn
            href={enquireMailto(`${p.brand} ${p.name}`)}
            solid
            className="!px-2 !py-[11px] text-center"
          >
            Enquire
          </Btn>
          <Btn href={SITE.whatsapp} external className="!px-2 !py-[11px] text-center">
            WhatsApp
          </Btn>
        </div>
      </div>
    </article>
  );
}
