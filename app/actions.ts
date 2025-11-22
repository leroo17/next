import { Product } from "./models/product.model";
import { Query } from "./models/query.model";

export const getData = async (query: Query) => {
  console.log(query);
  
  const response = await fetch('https://ozon-be655-default-rtdb.europe-west1.firebasedatabase.app/goods.json');
  const data = await response.json();
  return data.filter((product: Product) => {
    if(query.category) {
      if(query.category !== product.category) {
        return false
      }
    }

    if(query.search) {
      if(!product.title.includes(query.search)) {
        return false
      }
    }
    return true
  })
}