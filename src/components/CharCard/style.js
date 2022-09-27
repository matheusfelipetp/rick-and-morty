import styled from 'styled-components';

export const Card = styled.li`
  background: ${({ status }) => (status === 'Alive' ? '#f1f7ff' : '#f8ccce')};
  color: ${({ status }) => (status === 'Alive' ? '#58a0a1' : '#a4595c')};
  list-style: none;
  padding: 0.5rem;
  border: 1px solid;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 318px;
  max-height: 243px;

  h2 {
    text-align: center;
    margin-bottom: 1rem;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  img {
    max-width: 60%;
    border-radius: 4px;
  }
`;
