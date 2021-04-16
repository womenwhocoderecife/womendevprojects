import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding: 2rem;
  display: flex;
  padding-top: 10rem;
  background-color: ${(props) => props.theme.colors.lightViolet};

  @media (max-width: 1024px) {
    display: grid;
  }
`;

export const Image = styled.img`
  width: 50%;
  padding: 2%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Form = styled.form`
  width: 50%;
  padding: 2%;

  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: left;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.darkPrimary};
  font: 500 32px Roboto, sans-serif;
  margin: 0;
`;

export const FormGroup = styled.div`
  width: 100%;
  margin: 5px;
  position: relative;
`;

export const LabelGroup = styled.div`
  display: flex;
  align-items: flex-end;
  color: ${(props) => props.theme.colors.primary};
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: normal;
  pointer-events: none;
  padding-left: 5px;
  transition: all 0.2s ease;
`;

export const Input = styled.input`
  font-size: 1em;
  padding: 10px 10px 10px 5px;
  -webkit-appearance: none;
  display: block;
  background: #fafafa;
  color: var(--secondary-color);
  width: 100%;
  border: none;
  border-radius: 0;
  margin-bottom: 5px;
  background-image: none !important;
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 5px;
  font-size: 14px;
  margin-top: 5px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  min-height: 2ch;
`;

export const Submit = styled.button`
  font-size: 14px;
  color: ${(props) => props.theme.colors.lightSecondary};
  border: 1px ${(props) => props.theme.colors.darkPrimary};
  border-radius: 3px;
  background: ${(props) => props.theme.colors.darkPrimary};
  padding: 10px;
  width: 100%;

  :hover {
    cursor: pointer;
    background-image: linear-gradient(
      to bottom,
      transparent,
      rgba(0, 0, 0, 0.1)
    );
  }

  :active {
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.1)
    );
  }
`;
