import { useState } from "react";

import DiscountBubble from "./DiscountBubble";

const ProductPageImage = ({
  imageUrl,
  discount,
}: {
  imageUrl: string;
  discount: number;
}) => {
  const [zoomCoordinates, setZoomCoordinates] = useState({
    x: 0,
    y: 0,
    scale: 1,
  });

  function handleMouseMove(e: any) {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setZoomCoordinates({ x: x, y: y, scale: 1.5 });
  }

  function handleMouseLeave() {
    setZoomCoordinates({ x: 0, y: 0, scale: 1 });
  }

  return (
    <div
      className="max-w-[600px] relative cursor-zoom-in aspect-square bg-center bg-no-repeat border-[1px] border-amber-50 rounded-sm w-full"
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: `${zoomCoordinates.scale * 100}%`,
        backgroundPosition: `${zoomCoordinates.x}% ${zoomCoordinates.y}%`,
      }}
    >
      {discount > 0 && <DiscountBubble discount={discount} />}
    </div>
  );
};

export default ProductPageImage;
