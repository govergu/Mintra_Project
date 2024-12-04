import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../store/itemSlice";
import { FetchActions } from "../store/fetching";
const Fetch = () => {
  const fetchStatus = useSelector((state) => state.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(FetchActions.markFetchingStarted());
    fetch("http://localhost:8080/items", {})
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(itemActions.addInitialItems(items[0]));
        dispatch(FetchActions.markFetchingDone());
        dispatch(FetchActions.markFetchingFinished());
      });
    return () => {
      controller.abort();
    };
  }, [fetchStatus]);
  return <></>;
};

export default Fetch;
