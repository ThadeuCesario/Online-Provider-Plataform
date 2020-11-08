import styled from "styled-components";

const TextBlock = styled.article`
  padding: 32px 64px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  .image-block {
    height: 100px;
    width: 100px;
    margin: 0 0 25px 0;
  }

  .title {
    text-transform: uppercase;
  }

  .subtitle {
    margin: 16px 0 0 0;
    line-height: 22px;
  }
`;

export default TextBlock;
