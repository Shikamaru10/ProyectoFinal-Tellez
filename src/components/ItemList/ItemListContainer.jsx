import { useState, useEffect } from "react";
import "./itemlist.css";
import getItems, { getItemsByCategory } from "../../Services/firestore";
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import Loader from "../Loaders/Loader";

function ItemListContainer() {
  const [products, setProducts] = useState(null);
  const { idCategory } = useParams();

  async function getItemsAsync() {
    if( !idCategory){
      let respuesta = await getItems()
      setProducts(respuesta)
    }
    else{
    let respuesta = await getItemsByCategory(idCategory);
    setProducts(respuesta)}
  }

  useEffect(() => {
    getItemsAsync();
  }, [idCategory]);

  return (
    <div className="catalogo">
      {products ? <ItemList products={products} /> : <Loader />}
    </div>
  );
}

export default ItemListContainer;
