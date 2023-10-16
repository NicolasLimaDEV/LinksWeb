import styles from 'styled-components'

export const Content = styles.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 20px;
  
  > a {
    width: 250px;
    margin: 8px;
    padding: 10px 20px;
    border: none;
    background-color: ${(props) => props.theme.colorSecondy};
    border-radius: 5px;
    border: 1px solid ${(props) => props.theme.colorSecondy};
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    transition: .2s all;

    &:hover{
      background-color: transparent;
      color: ${(props) => props.theme.colorSecondy};
      transition: .2s all;
    }

    }
  }
`