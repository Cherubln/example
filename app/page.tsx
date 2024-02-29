import Hero from "./Hero";
import Footer from "./components/footer";
import ProductCard from "./components/product-card";
import picture from "@/app/assets/OIL.jpg";
import picture1 from "@/app/assets/hero-again.webp";

export default function Home() {
  return (
    <div>
      <Hero />
      <section>
        <h2 className="text-2xl font-semibold text-center my-4">
          Most Popular
        </h2>
        <div className="my-10 px-3 py-5 bg-base-200 flex flex-col lg:flex-row items-center justify-center gap-5 flex-wrap">
          <ProductCard
            productClass="flowers"
            productID="1"
            title="SunFlower"
            description="If a dog chews shoes whose shoes does he choose?"
            imageUrl={picture}
            price={99}
          />
          <ProductCard
            productClass="plants"
            productID="1"
            title="SunFlower"
            description="If a dog chews shoes whose shoes does he choose?"
            imageUrl={picture1}
            price={99}
          />
          <ProductCard
            productClass="flowers"
            productID="1"
            title="SunFlower"
            description="If a dog chews shoes whose shoes does he choose?"
            imageUrl={picture}
            price={99}
          />
          <ProductCard
            productClass="plants"
            productID="1"
            title="SunFlower"
            description="If a dog chews shoes whose shoes does he choose?"
            imageUrl={picture1}
            price={99}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
