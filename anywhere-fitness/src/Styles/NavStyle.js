import styled from 'styled-components'

const NavStyle = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 130px;
    width: 100vw;
    padding: 10px 30px;
    background-color: #292734;
    border-bottom: 8px solid #ff0073;
    margin-bottom: 20px;

    .logo {
        transition: all 0.3s ease-in-out;

        &: hover {
            filter: saturate(10%) brightness(95%);
            transition: all 0.3s ease-in-out;
        } 
    }

    .logo div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        font-family: 'Roboto Condensed'; 
        font-weight: 700;
        sans-serif;
    }

    .logo div span {
        font-family: 'Roboto', sans-serif;
	    font-style: italic;
        font-weight: 300;
        font-size: 1rem;
        letter-spacing: 4px;
    }
`;

export default NavStyle;