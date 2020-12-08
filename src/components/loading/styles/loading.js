import styled, { createGlobalStyle } from "styled-components/macro";

export const LockBody = createGlobalStyle`
    body {
        overflow: hidden;
    }
`;

export const ReleaseBody = createGlobalStyle`
    body{
        overflow: visible;
    }
`;

export const Spinner = styled.div``;
