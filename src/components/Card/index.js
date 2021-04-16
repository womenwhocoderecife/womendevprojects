import React from 'react';

import githubImage from '../../assets/icons/github.svg';
import instagramImage from '../../assets/icons/instagram.svg';
import twitterImage from '../../assets/icons/twitter.svg';
import linkedinImage from '../../assets/icons/linkedin.svg';

import {
  Container,
  Figure,
  Image,
  Title,
  Text,
  SocialNetwork,
  SocialNetworkItem,
} from './styles';

const mountSocialNetwork = (link, image) =>
  link ? (
    <SocialNetworkItem>
      <a href={link} target="_blank" rel="noreferrer">
        <Figure>
          <img src={image} alt="logo" />
        </Figure>
      </a>
    </SocialNetworkItem>
  ) : null;

const Card = ({
  name,
  description,
  photo,
  instagram,
  github,
  linkedin,
  twitter,
}) => (
  <Container>
    <Figure>
      <Image src={photo} alt={name} title={name} />
      <Title>{name}</Title>
    </Figure>

    <Text>{description}</Text>

    <SocialNetwork>
      {mountSocialNetwork(github, githubImage)}
      {mountSocialNetwork(instagram, instagramImage)}
      {mountSocialNetwork(twitter, twitterImage)}
      {mountSocialNetwork(linkedin, linkedinImage)}
    </SocialNetwork>
  </Container>
);

export default Card;
