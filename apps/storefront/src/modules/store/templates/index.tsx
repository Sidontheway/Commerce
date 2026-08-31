import { Suspense } from "react"

import { OptionValueIds } from "@lib/util/product-option-filters"
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

import PaginatedProducts from "./paginated-products"

const StoreTemplate = ({
  sortBy,
  page,
  countryCode,
  optionValueIds,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
  optionValueIds?: OptionValueIds
}) => {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  return (
    <main
      className="bg-[#fffaf2] text-[#40251f]"
      data-testid="category-container"
    >
      <section className="border-b border-[#d8c9b8] bg-[#f7f2e9] px-6 py-16 small:px-12 small:py-24">
        <div className="content-container">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#a35b3e]">
            The complete edit
          </p>
          <h1
            className="max-w-3xl font-serif text-5xl font-normal leading-[0.98] small:text-7xl"
            data-testid="store-page-title"
          >
            All products
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[#745d50] small:text-lg">
            Thoughtful objects, tactile layers, and small details for a home
            with its own rhythm.
          </p>
        </div>
      </section>
      <div className="content-container flex flex-col gap-8 py-10 small:flex-row small:items-start small:py-16">
        <aside className="border-b border-[#d8c9b8] pb-8 small:sticky small:top-24 small:min-w-[220px] small:border-b-0 small:border-r small:pb-0 small:pr-8">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#a35b3e]">
            Refine your search
          </p>
          <RefinementList sortBy={sort} />
        </aside>
        <section className="w-full">
          <div className="mb-8 flex items-end justify-between border-b border-[#d8c9b8] pb-5">
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#745d50]">
                A considered selection
              </p>
              <h2 className="font-serif text-3xl font-normal small:text-4xl">
                Find something meaningful
              </h2>
            </div>
          </div>
          <Suspense fallback={<SkeletonProductGrid />}>
            <PaginatedProducts
              sortBy={sort}
              page={pageNumber}
              countryCode={countryCode}
              optionValueIds={optionValueIds}
            />
          </Suspense>
        </section>
      </div>
    </main>
  )
}

export default StoreTemplate
