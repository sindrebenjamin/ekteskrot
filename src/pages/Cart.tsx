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

const Cart = () => {
  const { cart, setCart } = useContext(CartContext)!;

  console.log(cart);

  function handleDeleteItemFromCart(item: Product) {
    const nextItems = cart.filter((i) => i.id !== item.id);
    setCart(nextItems);
  }

  return (
    <div>
      <Section $noXPadding={true}>
        <Container>
          <StyledH1>Cart</StyledH1>
          <div className="sm:rounded overflow-hidden sm:border-l sm:border-r">
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
          <div className="bg-gray-50 p-4 border">
            <StyledH2>Summary</StyledH2>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Cart;
