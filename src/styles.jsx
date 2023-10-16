import styles from "styled-components";

export const Container = styles.div`
  color: ${(props) => props.theme.fontColor};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
  width: 100%;
  
  > h1{
    font-size: 25px;
  }

  > h3{
    font-size: 15px;
    font-weight: 300;

    margin-top: -15px;
  }

  .img-avatar{
    margin: 0 auto;
    width: 112px;
    border-radius: 50%;

    border: 4px solid ${(props) => props.theme.colorSecondy};
    box-shadow: 0px 0px 40px ${(props) => props.theme.colorSecondy};
  }

  > button{
    border: none;
    padding: 8px 15px;
    background-color: ${(props) => props.theme.colorSecondy};
    color: #fff;
    border: 1px solid ${(props) => props.theme.colorSecondy};
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    width: 130px;
    margin: 0 auto;
    transition: .2s all;

    &:hover{
      background-color: transparent;
      color: ${(props) => props.theme.colorSecondy};
      border: 1px solid ${(props) => props.theme.colorSecondy};
      font-weight: bold;
    }
  }

  > span{
    font-size: 15px;
    font-weight: 300;
    opacity: 0.7;
    margin-top: 35px;
  }
`;
