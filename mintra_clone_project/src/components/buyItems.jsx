import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bag";

const BuyItems = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const ItemsFound = bagItems.indexOf(item.id) >= 0;
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {ItemsFound ? (
        <button
          style={{ width: "100%", marginTop: 8 }}
          className="btn btn-danger"
          onClick={() => dispatch(bagActions.removefrombag(item.id))}
        >
          Remove from Cart
        </button>
      ) : (
        <button
          style={{ width: "100%", marginTop: 8 }}
          className="btn btn-success"
          onClick={() => dispatch(bagActions.addtobag(item.id))}
        >
          Add to Bag
        </button>
      )}
    </div>
  );
};

export default BuyItems;
