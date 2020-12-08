import styled from 'styled-components'

export const Title = styled.h2`
    color: ${props => props.theme.colors.darkPrimary};
    font: 500 ${props => props.theme.fontSizes.medium} ${props => props.theme.fonts.join(", ")};
    text-align: ${props => props.align};
`;