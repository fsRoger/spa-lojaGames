import { useState, useEffect } from "react"
//import jogosData from '../../../dados';
import { Card } from '../../components/Card';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { getAllGames } from '../../services/jogosServices';
import { StyledGrid } from './style';


export default function Home() {
  const [news, setNews] = useState([]);

  async function findAllGames() {
    const response = await getAllGames();
    setNews(response.data.results);
  }

  findAllGames();
  console.log(news);


  return (
    <>
      <Navbar />
      <StyledGrid >
        {news.map((item) => (
          <Card
            key={item.id}
            title={item.nome}
            description={item.descricao}
            linkImagem={item.linkImagem}
            preco={item.preco}
            plataforma={item.plataforma}
            lojas={item.lojas}
          />
        ))}
      </StyledGrid>
      <Footer />



    </>
  )
}

