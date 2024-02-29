import Image from "next/image";
import heroImage from "@/app/assets/hero.jpg";
import heroImage2 from "@/app/assets/hero-again.webp";
import heroImage3 from "@/app/assets/hero-image.jpg";
import { FaAngleRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="max-w-xs lg:max-w-sm">
          <div className="carousel rounded-lg shadow-2xl w-full">
            <div id="item1" className="carousel-item w-full">
              <Image src={heroImage} alt="Tailwind CSS Carousel component" />
            </div>
            <div id="item2" className="carousel-item w-full">
              <Image src={heroImage2} alt="Tailwind CSS Carousel component" />
            </div>
            <div id="item3" className="carousel-item w-full">
              <Image src={heroImage3} alt="Tailwind CSS Carousel component" />
            </div>
          </div>
          <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn btn-xs">
              1
            </a>
            <a href="#item2" className="btn btn-xs">
              2
            </a>
            <a href="#item3" className="btn btn-xs">
              3
            </a>
          </div>
        </div>
        <div>
          <h1 className="text-5xl font-bold">Bloom with us</h1>
          <p className="py-6">
            Meet our{" "}
            <span className="font-semibold">
              Flora Flables:
              <span className="italic"> the flower delivery expert. </span>
            </span>
            Whether you need a bouquet for a special day, an wedding
            anniversary, or just to brighten someone&apos;s day, we are ready to
            help. With a passion for flowers and a knack for arranging them, we
            can create stunning compositions that suit any occasion and style.
            We also offers vase-based plants that add a touch of greenery and
            freshness to your home or office. Order online or by phone and we
            will deliver your flowers or plants in no time, with a smile and a
            friendly greeting.
          </p>
          <button className="btn btn-primary uppercase">
            Order now <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
