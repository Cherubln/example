"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { MdAddShoppingCart } from "react-icons/md";

type Props = {
  productClass: "flowers" | "plants";
  productID: string;
  imageUrl: StaticImageData;
  title: string;
  price: number;
  description?: string;
};

const ProductCard = ({
  productClass,
  productID,
  imageUrl,
  title,
  price,
  description,
}: Props) => {
  return (
    <Link href={`/${productClass}/${productID}`}>
      <div className="card card-compact hover:bg-base-100  transition-colors duration-300 glass shadow max-w-xs ">
        <figure>
          <Image src={imageUrl} alt="car!" className="h-60" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-between items-center">
            <span className="font-semibold text-xl">${price.toFixed(2)}</span>

            <button
              className="btn btn-outline btn-sm btn-primary"
              onClick={(e) => {
                e.preventDefault();
                console.log(productID);
              }}
            >
              <MdAddShoppingCart size={22} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
