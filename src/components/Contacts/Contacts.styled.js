import styled from 'styled-components';

export const Contact = styled.li`
  display: flex;
  gap: 15px;
  align-items: center;

  ::before {
    content: '📞';
    font-size: 1.2em;
  }
`;