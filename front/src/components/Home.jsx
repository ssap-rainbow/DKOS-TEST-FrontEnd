import { useEffect, useState } from "react";
import BottomSheet from "./bottomSheet/BottomSheet";
import Content from "./bottomSheet/Content";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState("");
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  useEffect(() => {
    axios
      .get("/api/home")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("ERROR: ", error);
      });
  }, []);

  return (
    <div>
      <p>{data}</p>
      <button onClick={handleClick}>요청서 작성하기</button>
      {open && (
        <BottomSheet isOpen={open} setIsOpen={setOpen}>
          <Content />
        </BottomSheet>
      )}
    </div>
  );
};

export default Home;
