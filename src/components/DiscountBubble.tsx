const DiscountBubble = ({ discount }: { discount: number }) => {
  return (
    <div className="z-10 absolute top-2 right-2 md:top-4 md:right-4 rounded-full bg-red-500 text-white flex justify-center items-center h-12 w-12">
      {discount}%
    </div>
  );
};

export default DiscountBubble;
