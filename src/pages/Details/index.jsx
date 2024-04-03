import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getProductById } from '../../services/productServices';

import StoreMap from '../../components/StoreMap';
import ModalPurchase from '../../components/ModalPurchase';
import DiscountQRCode from '../../components/DiscountQRCode';

import { ContainerMap, DetailsContainer, LojasStyled } from './style';
import { Navbar } from '../../components/Navbar';


export default function Details() {
  const [product, setProduct] = useState();
  const { state } = useLocation();
  const [locations, setLocations] = useState([]);
  const [storeNames, setStoreNames] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  async function fetchApiKey() {
    try {
      const response = await fetch(`https://api-lojagames.up.railway.app/details`);
      const data = await response.json();
      return data.apiKey;
    } catch (error) {
      console.error('Erro ao buscar a API key:', error);
      throw error;
    }
  }

  async function fetchProduct() {
    try {
      const apiKey = await fetchApiKey();
      const response = await getProductById(state.id);

      setProduct(response.data.product);

      const locationsPromises = response.data.product?.lojas.map(storeName => fetchStoreLocation(storeName, apiKey));
      const resolvedLocations = await Promise.all(locationsPromises);
      const validLocations = resolvedLocations.filter(loc => loc);
      const validStoreNames = response.data.product?.lojas.filter((_, index) => resolvedLocations[index]).map(name => name);
      setLocations(validLocations);
      setStoreNames(validStoreNames);
    } catch (error) {
      console.error("Erro ao buscar o produto:", error);
    }
  }

  async function fetchStoreLocation(storeName, apiKey) {
    let data;
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
  const closeModal = () => {
    setModalOpen(false);
  }

  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  }).format(product.preco);

  return (
    <>
      <Navbar />
      <DetailsContainer >
        <div className='section'>
          <div className='imagem'>
            <h2>{product.nome}</h2>
            <img src={product.linkImagem} alt={product.nome} />
            <div>
              <button
                onClick={() => setModalOpen(true)}
                className='compre'>
                Comprar
              </button>
              <p className='preco'>Preço: {formattedPrice}</p>
              <p className='plataformas'>Plataformas: {product.plataformas ? product.plataformas.join(", ") : "N/A"}</p>
            </div>
          </div>
          <div className='descricao'>
            <p className="descricao">{product.descricao}</p>
          </div>
        </div>

        {modalOpen && <ModalPurchase closeModal={closeModal} productId={state.id} />}
        <DiscountQRCode />

      </DetailsContainer>
      <LojasStyled>
        <h3> Compre online ou nas seguintes lojas:</h3>
        <p >{product.lojas}</p>
      </LojasStyled>
      <ContainerMap >
        {locations.map((location, index) => (
          <StoreMap key={index} locations={[location]} storeNames={[storeNames[index]]} />
        ))}
      </ContainerMap >
    </ >
  );
}


