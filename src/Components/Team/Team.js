import './Team.css'

import membersList from './membersList.json'



const Team=()=>{
    
    return(
        <>
        <div className="team-top">
            <h1>Meet the Team</h1>
        </div>
        <div className="teamMemberscontainer">
        <div className="wrapper" >
            {
        membersList.map(record=>{
            return(
                <div className="box" key={record.id}>
            <div className="img-area" style={{ 
                backgroundImage: `url(${record.image})` }}>
            </div>
            <div className="content">
                <h4>{record.name}</h4>
                
                <p>{record.designation}</p>
                <div className="mem-icons">
                {/* <a href="http://" target="_blank" rel="noopener noreferrer"><i className="fa-regular fa-envelope" color="#fff"></i></a> */}
                <a href={record.instagram} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" id="insta" color="#fff"></i></a>
                <a href={record.linkedin} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in" id="linkedin" color="#fff"></i></a>
                </div>
            </div>
        </div>
            )
        })
    }
        
        
    </div>
    </div>
        </>
    );
}
export default Team;