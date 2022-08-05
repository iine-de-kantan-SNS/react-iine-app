import image from '../ojisan.png'
import styled from 'styled-components';
const Image = () => {

    return(
        <>
        <Sasuke src={image}/>
        </>
    )
}

export default Image;

const Sasuke = styled.img`
    background-color: red;
`