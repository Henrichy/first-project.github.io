
import styled from 'styled-components'

const SocialMediaWrap = styled.div`
display:flex;
justify-content: space-between;
margin: 0 auto;
max-width: 1100px;
align-items: center;

@media screen and (max-width: 820px){
    flex-direction: column;
}
`

export default SocialMediaWrap
