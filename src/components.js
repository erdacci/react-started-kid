import styled, {css} from "styled-components";

export const Title = styled.h1`
font-size: 3rem;
text-decoration: underline;
${props => props.theme === 'dark' && css`
    background: black;
    color: white;
    `}
`