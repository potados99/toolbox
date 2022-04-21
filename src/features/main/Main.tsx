import styled from "styled-components";
import { Outlet } from "react-router-dom";
import GlobalNavbar from "../../components/GlobalNavbar";

export default function Main() {
  return (
    <>
      <GlobalNavbar />

      <Content>
        <Outlet />
      </Content>
    </>
  );
}

const Content = styled.div`
  max-width: 400px;
  padding: 10px;
  margin: 48px auto auto;
`;
