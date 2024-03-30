import { useState, useEffect } from "react"

import { Card } from '../../components/Card';
import Footer from '../../components/Footer';
import { Navbar } from "../../components/Navbar";
import { getAllGames } from '../../services/productServices';
import { StyledGrid } from './style';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


export default function Home() {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  async function findAllGames() {
    const productResponse = await getAllGames();
    setProduct(productResponse.data);

    console.log(productResponse.data);
  }

  useEffect(() => {
    findAllGames();

  }, []);

  console.log("produtos", product)

  return (
    <>
      <StyledGrid >
        {product.map((item, i) => (
          <>
            <div
              // to={`/details/${item.id}`} key={item.id}
              onClick={() =>
                navigate("/details", {
                  state: { id: item._id },
                })
              }
              key={i}
            >
              <Card
                nome={item.nome}
                linkImagem={item.linkImagem}
                descricao={item.descricao}
                preco={item.preco}
                plataformas={item.plataformas}
              />
            </div>
          </>
        ))}
      </StyledGrid>
      <Footer />
    </>
  )
}

