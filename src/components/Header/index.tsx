import { HeaderContainer, HeaderContent, NewTranactionButton } from "./styles";
import logoImg from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <NewTranactionButton>Nova Transação</NewTranactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
