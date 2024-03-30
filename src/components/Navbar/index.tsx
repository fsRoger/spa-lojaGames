import React from 'react';
import logo from "../../assets/logo.jpeg";
import { ButtomStyled, NavStyled, ImageLogo, InputSpace } from './style';

import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchSchema = z.object({
  title: z
    .string()
    .nonempty({ message: "A pesquisa não pode ser vazia" })
    .refine(value => !/^\s*$/.test(value), {
      message: "A pesquisa não pode ter apenas espaços",
    }),
});

export function Navbar() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(searchSchema)
  });

  const navigate = useNavigate();

  function onSearch(data) {
    const { title } = data;
    navigate(`/search/${title}`);
    reset();
  }

  return (
    <>
      <NavStyled>
        <form onSubmit={handleSubmit(onSearch)}>
          <InputSpace>
            <button type="submit">
              <i className='bi bi-search'></i>
            </button>
            <input {...register("title")} type='text' placeholder='Pesquise um jogo'></input>
          </InputSpace>

          <Link to="/"><ImageLogo src={logo} alt="Logo"></ImageLogo></Link>

          <ButtomStyled>Entrar</ButtomStyled>
        </form>
      </NavStyled>
      {errors.title && <span>{errors.title.message}</span>}
      <Outlet />
    </>
  );
}

