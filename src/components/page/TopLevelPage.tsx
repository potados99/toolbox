import NavBar from "../navigation/NavBar";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Destinations } from "../../common/types";

type Props = {
  title: string;
  links: Destinations;
};

export default function TopLevelPage({ title, links }: Props) {
  return (
    <>
      <NavBar title={title} links={links} />

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
