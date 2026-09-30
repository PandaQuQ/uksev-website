"use client";

import { useMemo, useState } from "react";
import { productBrands, products, type Product } from "@/data/products";
import { ProductCard } from "./ProductCard";

type StockFilter = "all" | "uk" | "sale";
type SortKey = "featured" | "name" | "brand" | "price-asc" | "price-desc";

function priceKey(i: Product) {
  return i.price == null ? Infinity : i.price;
}

export function ShopToolbar() {
  const [q, setQ] = useState("");
  const [brand, setBrand] = useState("All");
  const [stock, setStock] = useState<StockFilter>("all");
  const [sort, setSort] = useState<SortKey>("featured");

  const list = useMemo(() => {
    const query = q.trim().toLowerCase();
    let filtered = products.filter((i) => {
      if (brand !== "All" && i.brand !== brand) return false;
      if (stock === "uk" && !i.stock) return false;
      if (stock === "sale" && i.was == null) return false;
      if (query) {
        const hay = `${i.brand} ${i.name} ${i.code} ${i.spec}`.toLowerCase();
        if (!hay.includes(query)) return false;
      }
      return true;
    });

    filtered = [...filtered].sort((a, b) => {
      if (sort === "name") return a.name.localeCompare(b.name);
      if (sort === "brand")
        return a.brand.localeCompare(b.brand) || a.name.localeCompare(b.name);
      if (sort === "price-asc") return priceKey(a) - priceKey(b);
      if (sort === "price-desc") {
        const pa = a.price == null ? -1 : a.price;
        const pb = b.price == null ? -1 : b.price;
        return pb - pa;
      }
      return a.featured - b.featured;
    });

    return filtered;
  }, [q, brand, stock, sort]);

  const clear = () => {
    setBrand("All");
    setQ("");
    setSort("featured");
    setStock("all");
  };

  return (
    <>
      <div className="mb-[18px] grid grid-cols-1 gap-3 md:grid-cols-[1.4fr_auto_auto]">
        <div className="relative">
          <span
            className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-sm text-muted"
            aria-hidden
          >
            ⌕
          </span>
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search model, brand, code…"
            autoComplete="off"
            className="w-full rounded-full border border-hair bg-ground-2 py-3 pr-4 pl-10 text-[13px] outline-none focus:border-amber"
          />
        </div>
        <select
          value={stock}
          onChange={(e) => setStock(e.target.value as StockFilter)}
          aria-label="Stock filter"
          className="min-w-[160px] appearance-none rounded-full border border-hair bg-ground-2 bg-[length:5px_5px,5px_5px] bg-[position:calc(100%-16px)_55%,calc(100%-11px)_55%] bg-no-repeat py-3 pr-9 pl-4 text-[10.5px] tracking-[0.1em] uppercase outline-none focus:border-amber"
          style={{
            backgroundImage:
              "linear-gradient(45deg,transparent 50%,var(--ink-2) 50%),linear-gradient(135deg,var(--ink-2) 50%,transparent 50%)",
          }}
        >
          <option value="all">Stock · All</option>
          <option value="uk">UK Stock only</option>
          <option value="sale">Guide sale</option>
        </select>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortKey)}
          aria-label="Sort"
          className="min-w-[160px] appearance-none rounded-full border border-hair bg-ground-2 bg-[length:5px_5px,5px_5px] bg-[position:calc(100%-16px)_55%,calc(100%-11px)_55%] bg-no-repeat py-3 pr-9 pl-4 text-[10.5px] tracking-[0.1em] uppercase outline-none focus:border-amber"
          style={{
            backgroundImage:
              "linear-gradient(45deg,transparent 50%,var(--ink-2) 50%),linear-gradient(135deg,var(--ink-2) 50%,transparent 50%)",
          }}
        >
          <option value="featured">Sort · Featured</option>
          <option value="name">Name A–Z</option>
          <option value="brand">Brand A–Z</option>
          <option value="price-asc">Price · low–high</option>
          <option value="price-desc">Price · high–low</option>
        </select>
      </div>

      <div className="mb-5 flex flex-wrap gap-2 border-b border-hair pb-5">
        {productBrands.map((b) => (
          <button
            key={b}
            type="button"
            onClick={() => setBrand(b)}
            className={`cursor-pointer rounded-full border px-3.5 py-2 text-[10.5px] tracking-[0.12em] uppercase transition-colors ${
              b === brand
                ? "border-amber text-amber"
                : "border-hair text-ink-2 hover:border-amber hover:text-amber"
            }`}
          >
            {b}
          </button>
        ))}
      </div>

      <div className="mb-[18px] flex items-baseline justify-between text-[10.5px] tracking-[0.12em] text-muted uppercase">
        <span>
          {list.length} ride{list.length === 1 ? "" : "s"}
        </span>
        <button
          type="button"
          onClick={clear}
          className="cursor-pointer border-0 bg-transparent text-[10.5px] tracking-[0.12em] text-amber uppercase"
        >
          Clear all
        </button>
      </div>

      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {list.length === 0 ? (
          <div className="col-span-full rounded-2xl border border-dashed border-hair py-12 text-center text-sm text-ink-2">
            No rides match. Clear filters or try another search.
          </div>
        ) : (
          list.map((p) => <ProductCard key={p.code} product={p} />)
        )}
      </div>
    </>
  );
}
