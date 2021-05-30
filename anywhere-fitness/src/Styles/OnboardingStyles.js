import styled from 'styled-components';

const Styles = styled.div `
    .slider {
        position: relative;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .image {
        width: 550px;
        height: 550px;
        border-radius: 10px;
    }

    .right-arrow {
        position: absolute;
        top: 50%;
        right: 32px;
        font-size: 3rem;
        color: #000;
        z-index: 10;
        cursor: pointer;
        user-select: none;
    }

    .left-arrow {
        position: absolute;
        top: 50%;
        left: 32px;
        font-size: 3rem;
        color: #000;
        z-index: 10;
        cursor: pointer;
        user-select: none;
    }

    .slide {
        opacity: 0;
        transition-duration: 1s ease;
    }

    .slide.active {
        opacity: 1;
        transition-duration: 1s;
        transform: scale(1.08);
    }
`
export default Styles;