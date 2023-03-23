import {
  Header,
  Aboutme,
  Experiences,
  Features,
  Projects,
  Contactme,
} from "../compons";
import { Layout } from "../layout";
import styled from "styled-components";
import { useRouter } from "next/router";

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

export default function IndexPage() {
  const location = useRouter();

  return (
    <Layout location={location}>
      <StyledMainContainer className="fillHeight">
        <Header />
        <Aboutme />
        <Experiences />
        <Features />
        <Projects />
        <Contactme />
      </StyledMainContainer>
    </Layout>
  );
}
