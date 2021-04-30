import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 15px;
  width: 100%;
  height: 100vh;
`;

export const FirstSection = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  margin-bottom: 15px;

  @media (max-width: 600px) {
    margin-bottom: 10px;
  }

  .block-red {
    background-color: red;
    width: 25%;
    margin-right: 15px;

    @media (max-width: 600px) {
        width: 40%;
        margin-right: 10px;
    }
  }

  .block-gray {
    background-color: gray;
    width: 75%;

    @media (max-width: 600px) {
        width: 60%;
    }
  }
`;

export const SecondSection = styled.div`
  display: flex;
  width: 100%;
  height: 45%;
  background-color: #D3D3D3;
  margin-bottom: 15px;

  @media (max-width: 600px) {
    margin-bottom: 10px;
  }
`;

export const ThirdSection = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: auto auto auto;
  width: 100%;
  height: 45%;


  @media (max-width: 500px) {
    grid-template-columns: auto;
    grid-template-rows: max-content;
    grid-gap: 10px;
  }

  .grid-item {
     background-color: #808080;
  }
`;