import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartProductCard from "../components/CartProductCard";
import {
  Container,
  Section,
  StyledH1,
  StyledH2,
} from "../components/TailwindComponents";
import { Product } from "../interfaces";
import ButtonLink from "../components/ButtonLink";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext)!;

  function handleDeleteItemFromCart(item: Product) {
    const nextItems = cart.filter((i) => i.id !== item.id);
    setCart(nextItems);
  }

  function getTotalSum(products: Product[]) {
    const total = products.reduce((total: number, product: Product) => {
      return total + product.price * product.quantity;
    }, 0);

    return parseFloat(total.toFixed(2));
  }

  const totalSum = getTotalSum(cart);

  return (
    <main className="min-h-screen">
      <Section $noXPadding={true}>
        <Container>
          <StyledH1 className="ml-4 sm:ml-0 mb-4 md:mb-6 lg:mb-8">
            Cart
          </StyledH1>
          {cart.length < 1 && (
            <p className="ml-4 sm:ml-0">This cart b EMPTY.</p>
          )}
          <div className="md:flex md:justify-between md:gap-8 lg:gap-12">
            <div className="sm:rounded overflow-hidden sm:border-l sm:border-r h-fit w-full">
              {cart.map((item, index) => {
                return (
                  <CartProductCard
                    isFirst={index < 1}
                    key={item.id}
                    product={item}
                    handleDelete={handleDeleteItemFromCart}
                  />
                );
              })}
            </div>
            {cart.length > 0 && (
              <div className="bg-gray-50 p-4 border sm:rounded mt-12 md:mt-0 h-fit w-full md:max-w-[500px]">
                <StyledH2>Summary</StyledH2>
                <div className="flex flex-col gap-4">
                  <SummaryLine
                    extraClasses=""
                    title="Subtotal"
                    number={totalSum}
                  />
                  <SummaryLine extraClasses="" title="Shipping" number={100} />
                  <div className="h-[2px] bg-gray-200 my-1"></div>
                  <SummaryLine
                    extraClasses="font-bold"
                    title="Total"
                    number={totalSum + 100}
                  />
                </div>
                <ButtonLink
                  linkTo={"/checkout"}
                  size="w-full py-3 mb-2 mt-4 text-sm"
                  color="bg-amber-700 text-white"
                  hoverState="hover:bg-amber-800"
                  onClick={() => setCart([])}
                >
                  Go to checkout
                </ButtonLink>
                <ButtonLink
                  size="w-full py-3 text-sm"
                  color="border-2 border-amber-600 text-amber-700"
                  hoverState="hover:bg-amber-800 hover:border-amber-800 hover:text-white"
                  linkTo={"/"}
                  onClick=""
                >
                  Keep shopping
                </ButtonLink>
              </div>
            )}
          </div>
        </Container>
      </Section>
    </main>
  );
};

export default Cart;

const SummaryLine = ({
  title,
  number,
  extraClasses,
}: {
  title: string;
  number: number;
  extraClasses: string;
}) => {
  return (
    <div className={`${extraClasses} flex justify-between`}>
      <p>{title}</p>
      <p>{number},-</p>
    </div>
  );
};
