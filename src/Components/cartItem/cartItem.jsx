import "./cartItem.scss";

const CartItem = ({ item }) => {
  const { name, qty, imageUrl, price } = item;

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {qty} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;