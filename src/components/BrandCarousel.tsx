import Image from "next/image";

const BrandCarousel = ({ images }: { images: string[] }) => {
  const IMAGES_URL = images;

  return (
    <div className="flex gap-10 overflow-hidden relative scroller">
      <ul className="scroller-inner flex items-center gap-10">
        {IMAGES_URL.map((url, index) => (
          <li
            className="flex items-center justify-center item w-24"
            key={index}
          >
            <Image
              src={url}
              alt={`Brand ${index + 1}`}
              key={index}
              width={150}
              height={100}
              className="object-center object-fill h-full w-full"
              unoptimized
            />
          </li>
        ))}
      </ul>
      <ul className="scroller-inner flex items-center gap-10">
        {IMAGES_URL.map((url, index) => (
          <li
            className="flex items-center justify-center item w-24"
            key={index}
          >
            <Image
              src={url}
              alt={`Brand ${index + 1}`}
              key={index}
              width={150}
              height={100}
              className="object-center object-fill h-full w-full"
              unoptimized
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrandCarousel;
