import CardWapper from './CardWrapper';

const ClassItem = (props) => {
    return (
        <CardWapper className="classes-item">
            <div className="classes-content">
                <h1>{props.Name}</h1>
                <h2>{props.Type}</h2>
                <h3>{props.Location}</h3>
                <h4>{props.IntensityLevel}</h4>
                <p>{props.StartTime}</p>
                <p>{props.Duration}</p>
            </div>
        </CardWapper>
    )
}

export default ClassItem;