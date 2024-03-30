import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getProductById } from '../../services/productServices'; // Supondo que você tenha uma função getGameById
// import GoogleMap from '../../components/Googlemaps/GoogleMap';
import StoreMap from '../../components/StoreMap';
import ModalPurchase from '../../components/ModalPurchase';
import DiscountQRCode from '../../components/DiscountQRCode';


export default function Details() {
  // const { id } = useParams();
  // console.log(id)
  const [product, setProduct] = useState();
  const { state } = useLocation();
  const [locations, setLocations] = useState([]);
  const [storeNames, setStoreNames] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  async function fetchProduct() {
    try {
      const response = await getProductById(state.id);

      setProduct(response.data.product);

      const locationsPromises = response.data.product?.lojas.map(storeName => fetchStoreLocation(storeName));
      const resolvedLocations = await Promise.all(locationsPromises);
      const validLocations = resolvedLocations.filter(loc => loc); // Filtra locais válidos (não nulos)
      const validStoreNames = response.data.product?.lojas.filter((_, index) => resolvedLocations[index]).map(name => name); // Filtra nomes de lojas correspondentes aos locais válidos
      setLocations(validLocations);
      setStoreNames(validStoreNames);
    } catch (error) {
      console.error("Erro ao buscar o produto:", error);
    }
  }

  async function fetchStoreLocation(storeName) {
    const apiKey = 'AIzaSyCmuTYZXFdVUsjYteEdXKp8tutJV6iqNk4';
    let data
    await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(storeName)}&key=${apiKey}`).then((response) => response.json())
      .then((d) => {
        data = d
      });

    console.log("data", data)

    if (data.results && data.results.length > 0) {
      const location = data.results[0].geometry.location;
      return { lat: location.lat, lng: location.lng };
    }

    return null;
  }

  useEffect(() => {
    if (state?.id) {

      fetchProduct();

    }

  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  console.log("produto", product)
  console.log("locationssssssssssssss", location)
  const closeModal = () => {
    setModalOpen(false);
  }

  return (
    <>
      <div >
        <h2>{product.nome}</h2>
        <img src={product.linkImagem} alt={product.nome} />
        <p className="description">{product.descricao}</p>
        <p>Preço: {product.preco}</p>
        <p>Plataformas: {product.plataformas ? product.plataformas.join(", ") : "N/A"}</p>
        <span className="lojas">{product.lojas}</span>
        <button onClick={() => setModalOpen(true)}>Comprar</button>

        <DiscountQRCode />
        {/* <GoogleMap /> */}
        {locations.map((location, index) => (
          <StoreMap key={index} locations={[location]} storeNames={[storeNames[index]]} />
        ))}

      </div>

      {modalOpen && <ModalPurchase closeModal={closeModal} productId={state.id} />}
    </ >
  );
}


