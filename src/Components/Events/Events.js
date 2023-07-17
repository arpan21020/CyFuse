import './Events.css'
import Records from './Events.json'
import ListItems from './ListItems';
const Events=()=>{
    return(
        <>
        <div className="events-top">
            <h1>Events</h1>
        </div>
        <div className="sub-heading">
            <h2>Upcoming Events</h2>
        </div>
        <div className="sessions">
            {
                Records.map(record =>{
                    return(
                        <div className="box" key={record.id}>
                            <ListItems image={record.image} title={record.title} description={record.description}/>
                        </div>
                    )
                })
            }
        </div>
        </>
    );
}
export default Events