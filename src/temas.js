import {
  fundoClaro,
  conteudoClaro,
  textoFundoClaro,
  fundoEscuro,
  conteudoEscuro,
  textoFundoEscuro,
  COR_PRINCIPAL,
  COR_PRINCIPAL_ESCURA
} from "./estilos";

export const temaClaro = {
  body: fundoClaro,
  inside: conteudoClaro,
  text: textoFundoClaro,
  principal: COR_PRINCIPAL,
  filter: "",
  
};

export const temaEscuro = {
  body: fundoEscuro,
  principal: COR_PRINCIPAL_ESCURA,
  inside: conteudoEscuro,
  text: textoFundoEscuro,
  filter: "invert(100%)",
};
