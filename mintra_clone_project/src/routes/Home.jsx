import { useSelector } from "react-redux";
import BuyItems from "../components/buyItems";

const Home = () => {
  const items = useSelector((state) => state.items);
  return (
    <main>
      <div className="items-container">
        {items.map((item) => (
          <BuyItems item={item} key={item.id} />
        ))}
      </div>
    </main>
  );
};

export default Home;
