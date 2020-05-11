import styled from 'styled-components'

export const LayoutWrapper = styled.section`
  display: flex;
`
/** VH = view height, pega a altura da tela 100 e igual a 100% */
export const LayoutMain = styled.main`
  background: #16202c;
  min-height: 100vh;
  transition: background, color 0.5s;
  padding: 0 3.75ren 0 20rem;
  width: 100%;
`
