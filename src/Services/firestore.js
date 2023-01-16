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
  const docRef = doc(DB, "productos", idParams )

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

export async function exportArrayToFirestore(){
  const products = [ 
    {
      id: 1,
      title: "GT 1030",
      price: 70,
      stock: 29,
      category: "Tarjetas",
      imgurl: "/imgs/gt1030.jpg",
      description: "Tarjeta de video de 2gb de vram",
    },
    {
      id: 2,
      title: "GTX 1660",
      price: 150,
      stock: 15,
      category: "Tarjetas",
      imgurl: "/imgs/gtx1660.jpg",
      description:"Tarjeta de video de 6gb de vram",
    },
    {
      id: 3,
      title: "RTX 3090",
      price: 400,
      stock: 9,
      category: "Tarjetas",
      imgurl: "/imgs/rtx3090.jpg",
      description:"Tarjeta de video de 12 gb de vram",
    },
    {
      id: 4,
      title: "INTEL core i3",
      price: 50,
      stock: 23,
      category: "Procesadores",
      imgurl: "/imgs/Intel.jpg",
      description: "Procesador intel de gama baja",
    },
    {
      id: 5,
      title: "INTEL Core i5",
      price: 100,
      stock: 26,
      category: "Procesadores",
      imgurl: "/imgs/Intel.jpg",
      description:"Procesador intel de gama media",
    },
    {
      id: 6,
      title: "INTEL Core i7",
      price: 200,
      stock: 14,
      category: "Procesadores",
      imgurl: "/imgs/Intel.jpg",
      description:"Procesador intel de gama alta",
    },
  
  ]
  const collectionRef = collection(DB, "productos")
  


}