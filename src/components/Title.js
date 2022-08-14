import styled from "styled-components";
import { Link } from "react-router-dom";
const Title = () => {
    return(
        <>
        
        <Link to="/main">to Main</Link>
        <br />
        <Link to="/signage">to Signage</Link>
        <StyledH1>あああ</StyledH1>
        
        </>        
    )
}

export default Title;

const StyledH1 = styled.h1`
    color: red;
`