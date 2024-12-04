import { useSelector } from "react-redux";
import BagItem from "../components/bagitem";
import BagSummary from "../components/bagsummary";

const Bag = () => {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const FinalItems = items.filter((item) => {
    const ItemIndex = bagItems.indexOf(item.id);
    return ItemIndex >= 0;
  });
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {FinalItems.map((item) => (
              <BagItem item={item} key={item.id} />
            ))}
          </div>
          <BagSummary />
        </div>
      </main>
    </>
  );
};

export default Bag;
