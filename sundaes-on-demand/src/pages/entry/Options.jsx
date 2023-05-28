import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import ScoopOption from "./ScoopOption";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getInitialData = async () => {
      const data = await fetch(`http://localhost:3030/scoops`, {
        method: "get",
      })
        .then(async (response) => response.json())
        .catch((error) => {
          //TODO: handle error response
        });
      setItems(data);
    };
    getInitialData();
  }, [optionType]);

  //TODO: replace 'null' with ToppingOption when available
  const ItemComponent = optionType === "scoops" ? ScoopOption : null;
  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <Row>{optionItems}</Row>;
}
