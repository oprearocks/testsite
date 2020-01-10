import styled from 'styled-components';

export const IntroWrapper = styled.div`
  background: #ddd;
  width: 100%;

  .introImage {
    background-size: cover;
    min-height: 200px;
  }

  .introText {
    /* max-width: 570px; */
    padding: 40px 20px 20px 40px;

    @media screen and (max-width: 768px) {
      /* max-width: 100%; */
      padding: 20px 20px 20px 20px;
    }
  }
`;
