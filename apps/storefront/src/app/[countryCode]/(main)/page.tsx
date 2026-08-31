import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "The Ritual Edit | Thoughtful objects for everyday living",
  description:
    "Hand-finished pieces, thoughtful textiles, and everyday rituals gathered from makers around the world.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  // console.log(collections,"region", region,"console")

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <section className="border-b border-[#d8c9b8] bg-[#f7f2e9] px-6 py-16 text-center text-[#40251f] small:px-12 small:py-24">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#a35b3e]">
          A slower way to shop
        </p>
        <p className="mx-auto max-w-2xl font-serif text-2xl leading-tight small:text-4xl">
          Small treasures for rooms that feel like you.
        </p>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[#745d50]">
          Discover pieces with texture, history, and a place in your daily
          rituals.
        </p>
      </section>
      <section id="featured" className="bg-[#fffaf2] py-12 small:py-20">
        <div className="content-container mb-2 flex items-end justify-between border-b border-[#d8c9b8] pb-5">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#a35b3e]">
              Curated for you
            </p>
            <h2 className="font-serif text-3xl font-normal text-[#40251f] small:text-5xl">
              Featured collections
            </h2>
          </div>
          <span className="hidden pb-1 text-xs uppercase tracking-[0.18em] text-[#745d50] small:block">
            Find your everyday ritual
          </span>
        </div>
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </section>
    </>
  )
}
