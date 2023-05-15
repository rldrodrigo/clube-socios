import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(0, 0, 0, .8);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  z-index: 10;
`;

export const Spinner = styled.div`
  border: 8px solid rgba(0, 0, 0, .2);
  border-left-color: white;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;
