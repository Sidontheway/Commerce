import { ArrowUpRightMini, Star } from "@medusajs/icons"
import { Button, Heading } from "@modules/common/components/ui"

const Hero = () => {
  return (
    <section className="relative min-h-[78vh] overflow-hidden bg-[#40251f] text-[#fff9ed]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(45, 23, 19, .82) 0%, rgba(45, 23, 19, .42) 48%, rgba(45, 23, 19, .16) 100%), url(https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2200&q=85)",
        }}
      />
      <div className="relative z-10 flex min-h-[78vh] items-end px-6 pb-12 pt-32 small:px-12 small:pb-20 medium:px-20">
        <div className="max-w-2xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-[#e8b65a]">
            Objects with a little soul
          </p>
          <span className="block">
            <Heading
              level="h1"
              className="max-w-xl font-serif text-5xl font-normal leading-[1.02] text-[#fff9ed] small:text-7xl"
            >
              Bring a quieter energy home.
            </Heading>
            <Heading
              level="h2"
              className="mt-6 max-w-lg text-base font-normal leading-7 text-[#f3dbc0] small:text-xl"
            >
              Hand-finished pieces, thoughtful textiles, and everyday rituals
              gathered from makers around the world.
            </Heading>
          </span>
          <a href="#featured" className="mt-9 inline-block">
            <Button className="border-0 bg-[#e8b65a] text-[#40251f] hover:bg-[#fff9ed]">
              Explore the collection <ArrowUpRightMini />
            </Button>
          </a>
          <div className="mt-12 flex items-center gap-3 text-sm text-[#f3dbc0]">
            <span
              className="flex gap-1 text-[#e8b65a]"
              aria-label="Five star rating"
            >
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </span>
            <span>Made slowly. Chosen carefully.</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 right-6 z-10 hidden text-right text-xs uppercase tracking-[0.2em] text-[#f3dbc0] small:block">
        <span className="block text-[#e8b65a]">01 / 03</span>A considered edit
      </div>
    </section>
  )
}

export default Hero
