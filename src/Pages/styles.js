import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        width: 100%;
        max-width: 300px;
        display: flex;
        flex-direction: column;
    }

    label {
        color: #666;
        font-size: 16px;
    }

    input {
        margin-top: 20px;
        border: 1px solid #ddd;
        border-radius: 4px;
        height: 48px;
        padding: 0 20px;
        font-size: 16px;
        color: #666;
    }

    input::placeholder {
        color: #999;
    }

    .botoes {
        display: inline-block;
        padding-top: 5px;
    }
  
`;
