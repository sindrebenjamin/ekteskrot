import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartProductCard from "../components/CartProductCard";
import { Container, Section } from "../components/TailwindComponents";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext)!;

  function handleDeleteItemFromCart(item) {
    const nextItems = cart.filter((i) => i.id !== item.id);
    setCart(nextItems);
  }

  return (
    <div>
      <Section $noXPadding={true}>
        <Container>
          <h1>Cart</h1>
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
        </Container>
      </Section>
    </div>
  );
};

export default Cart;
