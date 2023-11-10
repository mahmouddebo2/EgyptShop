"use client";
import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { useState } from "react";

interface Props {
  images: any;
}

export default function ImageGallery({ images }: Props) {
  const [bigImage, setBigImage] = useState(images[0]);
  const handleSmallImageClick = (image:any)=> {
    setBigImage(image)
  }
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: any, idx: any) => (
          <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={urlFor(image).url()}
              width={200}
              height={200}
              alt="Products"
              className="h-full w-full object-cover object-center cursor-pointer"
              onClick={()=> handleSmallImageClick(image)}
            />
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
            <Image
            src={urlFor(bigImage).url()}
            alt="Products Images"
            width={500}
            height={500}
            className="w-full h-full object-center"
            />
            <span className="absolute left-0 top-0 bg-red-500 rounded-br-lg py-1.5 px-3 text-sm uppercase tracking-wider text-white">Sale</span>
      </div>
    </div>
  );
}
