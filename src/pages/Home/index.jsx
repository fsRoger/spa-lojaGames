import { useState, useEffect } from "react"
import { Card } from '../../components/Card';
import Footer from '../../components/Footer';
import { Navbar } from "../../components/Navbar";
import { getAllGames } from '../../services/productServices';
import { StyledGrid } from './style';
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [product, setProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
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

  const filteredProducts = product.filter(item =>
    item.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <StyledGrid >
        {filteredProducts.map((item, i) => (
          <>
            <div
              key={i}
              onClick={() =>
                navigate("/details", {
                  state: { id: item._id },
                })
              }
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

