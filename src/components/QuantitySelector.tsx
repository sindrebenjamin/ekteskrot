const QuantitySelector = ({
  quantity,
  handleQuantity,
}: {
  quantity: number;
  handleQuantity: any;
}) => {
  function handleChange(e: any) {
    const value = parseInt(e.target.value, 10);

    if (e.target.value === "") {
      handleQuantity(1);
    }

    if (!isNaN(value)) {
      handleQuantity(value);
    }
  }
  return (
    <form className="">
      <div className="relative flex items-center max-w-[8rem]">
        <button
          onClick={() => handleQuantity(quantity - 1)}
          disabled={quantity === 1}
          type="button"
          id="decrement-button"
          data-input-counter-decrement="quantity-input"
          className="bg-gray-100 disabled:opacity-50 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100  focus:ring-2 focus:outline-none"
        >
          <svg
            className="w-3 h-3 text-gray-900 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 2"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h16"
            />
          </svg>
        </button>
        <input
          type="text"
          id="quantity-input"
          data-input-counter=""
          aria-describedby="helper-text-explanation"
          className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block py-2.5 w-[52px]"
          value={quantity}
          onChange={handleChange}
        />
        <button
          onClick={() => handleQuantity(quantity + 1)}
          type="button"
          id="increment-button"
          data-input-counter-increment="quantity-input"
          className="bg-gray-100   hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"
        >
          <svg
            className="w-3 h-3 text-gray-900 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 1v16M1 9h16"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default QuantitySelector;
