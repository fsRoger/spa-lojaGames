import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { searchProduct } from '../../services/productServices';

import Footer from '../../components/Footer';
import { Card } from '../../components/Card'

export function Search() {
  const { title } = useParams();
  const [product, setProduct] = useState([]);


  async function search() {
    try {
      const productApi = await searchProduct(title);
      setProduct(productApi.data.foundProduct);//.data.foundPosts
      console.log(productApi.data);
    } catch (err) {
      console.log(err);
      setProduct([]);
    }
  }

  useEffect(() => {
    search();

  }, [title]);

  return (
    <>
      <div>
        {product.map((item) => (

          <>
            <Link to="/details/:id">
              <Card
                key={item.id}
                nome={item.nome}
                descricao={item.descricao}
                linkImagem={item.linkImagem}
                preco={item.preco}
                plataformas={item.plataformas}
                lojas={item.lojas}
              />
            </Link>
          </>
        ))}
      </div>
      <Footer />

    </>
  )
}

