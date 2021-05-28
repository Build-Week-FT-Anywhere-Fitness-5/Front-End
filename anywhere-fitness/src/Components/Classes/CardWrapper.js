import Styles from '../../Styles/CardStyles';

const CardWapper = (props) => {
    const classes = ' card ' + props.className;

    return (
        <Styles className={classes}>
            {props.children}
        </Styles>
    )
}

export default CardWapper;