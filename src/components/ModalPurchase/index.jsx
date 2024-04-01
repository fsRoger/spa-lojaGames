import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { createPurchase } from '../../services/purchaseService';
import { toast } from "react-hot-toast";
import { StyledModal } from './style';

const ModalPurchase = ({ closeModal, productId }) => {
  const navigate = useNavigate();

  const schema = z.object({
    nome: z.string(),
    telefone: z.string(),
    endereco: z.string(),
    documento: z.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: zodResolver(schema),
  });

  const registerPurchase = async (data) => {
    data.produtoId = productId

    try {
      const res = await createPurchase(data);

      if (!res || res.data.mensagem !== "Compra efetuada com sucesso") {
        toast.dismiss();
        toast.error("Não foi possível realizar a compra!", {
          duration: 3000,
        });
        return
      }

      toast.dismiss();
      toast.success("Compra realizada com sucesso!", {
        duration: 3000,

      });
      // navigate("/");
    } catch (e) {
      toast.dismiss();
      toast.error("Não foi possível realizar a compra!", {
        duration: 3000,
      });
    }
  };

  return (
    <main>
      <StyledModal>
        <h1 className="compre"></h1>
        <button
          className="fechar" onClick={closeModal}>
          X
        </button>
        <form
          onSubmit={handleSubmit(registerPurchase)}
          className=""
        >
          <div className="modalForm">
            <label
              className="labelStyle"
              htmlFor="nome"
            >
              Nome
            </label>
            <input
              {...register("nome")}
              className="inputStyle"
              id="nome"
              type="text"
              name="nome"
              placeholder="..."
              required
            />
          </div>
          <div className="modalForm">
            <label
              className="labelStyle"
              htmlFor="telefone"
            >
              Telefone
            </label>
            <input
              {...register("telefone")}
              className="inputStyle"
              id="telefone"
              type="number"
              name="telefone"
              placeholder="..."
              required
            />
          </div>
          <div className="modalForm">
            <label
              className="labelStyle"
              htmlFor="endereco"
            >
              Endereço
            </label>
            <input
              {...register("endereco")}
              className="inputStyle"
              id="endereco"
              type="text"
              name="endereco"
              placeholder="..."
              required
            />
          </div>
          <div className="modalForm">
            <label
              className="labelStyle"
              htmlFor="documento"
            >
              Documento
            </label>
            <input
              {...register("documento")}
              className="inputStyle"
              id="documento"
              type="text"
              name="documento"
              placeholder="..."
              required
            />
          </div>
          <div className="">
            <button
              onClick={() => navigate("/")}
              className="sair"
            >
              Sair
            </button>
            <button
              type="submit"
              className="salvar"
            >
              Salvar
            </button>
          </div>
        </form>
      </StyledModal>
    </main>
  )
}

export default ModalPurchase