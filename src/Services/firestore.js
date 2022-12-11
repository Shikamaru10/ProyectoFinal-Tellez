import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where,addDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCJTIwehNFUoEy79pVpEMIYZaioMn-fBeI",
  authDomain: "tienda-de-hardware.firebaseapp.com",
  projectId: "tienda-de-hardware",
  storageBucket: "tienda-de-hardware.appspot.com",
  messagingSenderId: "806958021309",
  appId: "1:806958021309:web:85060cfa22caf2c6ecd5d4"
};

const app = initializeApp(firebaseConfig);
const DB = getFirestore(app)


export default async function getItems(){
    const colectionProductsRef = collection (DB, "productos")
    const documentSnapshot = await getDocs(colectionProductsRef)
    

    const documentsData = documentSnapshot.docs.map( doc => {
      return{
        ...doc.data(),
        id: doc.id,}
    })

return documentsData;

}

export async function getSingleItem(idParams){
  const docRef = doc(DB, "productos", "IdParams" )

  const docSnapshot = await getDoc (docRef) 

return{ 
  ...docSnapshot.data(),
  id: docSnapshot.id
 }
}

export async function getItemsByCategory(categoryParams) {
  const collectionRef = collection (DB, "productos")

  const q = query(collectionRef, where("category", "==", categoryParams ))

    const documentSnapshot = await getDocs(q)
    

    const documentsData = documentSnapshot.docs.map( doc => {
      return{
        ...doc.data(),
        id: doc.id,}
    })

return documentsData;

}

export async function createOrder(order) {
  const collectionRef = collection (DB, "orders")
  const docOrder = await addDoc(collectionRef, order)
  return (docOrder.id)

}
