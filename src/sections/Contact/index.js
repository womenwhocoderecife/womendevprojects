import React from 'react';
import { useForm } from '../../Hooks/useForm';

import contactImage from '../../assets/images/contact.JPEG';

import {
  Container,
  Image,
  Form,
  Title,
  FormGroup,
  LabelGroup,
  Label,
  Input,
  Textarea,
  Submit,
} from './styles';

export default function index() {
  const {
    inputs,
    handleInputChange,
    handleSubmit,
    success,
  } = useForm();

  if (success) {
    alert('Enviado com sucesso!');
  }
  return (
    <Container id="contact">
      <Image
        src={contactImage}
        alt="Mão de uma mulher digitando no computador"
      />
      <Form onSubmit={handleSubmit}>
        <Title>
          Se você representa uma organização ou iniciativa que deseja
          iniciar um projeto conosco, entre em contato pelo formulário
          a seguir:
        </Title>

        <FormGroup>
          <LabelGroup>
            <Label htmlFor="name">Nome</Label>
            <span>*</span>
          </LabelGroup>
          <Input
            id="name"
            type="text"
            required
            name="name"
            placeholder="Nome"
            onChange={handleInputChange}
            value={inputs.name}
          />
        </FormGroup>

        <FormGroup>
          <LabelGroup>
            <Label htmlFor="email">E-mail</Label>
            <span>*</span>
          </LabelGroup>
          <Input
            id="email"
            type="email"
            name="email"
            required
            placeholder="E-mail"
            onChange={handleInputChange}
            value={inputs.email}
          />
        </FormGroup>

        <FormGroup>
          <LabelGroup>
            <Label htmlFor="subject">Assunto</Label>
            <span>*</span>
          </LabelGroup>
          <Input
            id="subject"
            type="text"
            name="subject"
            required
            placeholder="Assunto"
            onChange={handleInputChange}
            value={inputs.subject}
          />
        </FormGroup>

        <FormGroup>
          <LabelGroup>
            <Label htmlFor="message">Mensagem</Label>
            <span>*</span>
          </LabelGroup>
          <Textarea
            id="message"
            name="message"
            required
            data-gramm="false"
            placeholder="Mensagem"
            onChange={handleInputChange}
            value={inputs.message}
          />
        </FormGroup>
        <Submit id="submit" type="submit" value="Enviar">
          Enviar
        </Submit>
      </Form>
    </Container>
  );
}
