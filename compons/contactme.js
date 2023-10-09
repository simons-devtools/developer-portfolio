import { profile } from "../config";
import styled from "styled-components";

const StyledContact = styled.section`
  text-align: center;
  padding: 153px 253px;
  .title {
    font-size: clamp(40px, 5vw, 60px);
  }
  p {
    line-height: 25px;
  }
  .email-link {
    margin-top: 50px;
    ${({ theme }) => theme.mixins.bigButton};
  }

  @media screen and (max-width: 768px) {
    padding: 100px 0px;
    .title {
      font-size: clamp(35px, 5vw, 50px);
    }
  }
`;

export default function Contact() {
  return (
    <StyledContact id="contact-section">
      <h2 className="numbered-heading overline">What&apos;s Next?</h2>
      <h2 className="title">Get In Touch</h2>

      <p>
        Although I&apos;m not currently looking for any new opportunities, my
        inbox is always open. Whether you have a question or just want to say
        hi, I&apos;ll try my best to get back to you!
      </p>

      <a href={`mailto:${profile.email}`} className="email-link">
        Say Hello
      </a>
    </StyledContact>
  );
}
