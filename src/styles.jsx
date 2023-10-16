import styles from "styled-components";

export const Container = styles.div`
  color: ${(props) => props.theme.fontColor};

  text-align: center;
  
  .img-avatar{
    width: 112px;
    border-radius: 50%;
  }
`;
