import './Footer.css'
const Footer=()=>{
    return(
        <div className="footer">
            <h2>CyFuse</h2>
            <p>Student branch</p>
            <p>IIIT Delhi, Okhla Industrial, Phase-III, New Delhi-110020</p>


            <div className="icons">
                <a href="https://www.facebook.com/cybertron.iiitd/" target="_blank"><i className="fa-brands fa-telegram" id="telegram"></i></a>
                <a href="https://www.instagram.com/cyfuse_iiitd/" target="_blank"><i className="fab fa-instagram" id="insta" color="#fff"></i></a>
                <a href="https://www.linkedin.com/company/cybertron-iiitd/" target="_blank"><i className="fab fa-linkedin-in" id="linkedin" color="#fff"></i></a>
                <a href="https://twitter.com/cybertron_iiitd" target="_blank"><i className="fab fa-twitter" id="twitter" color="#fff"></i></a>
            </div>
            <div className="copyrights">
             <p>© 2021 CyFuse. All rights reserved.</p>
             <p>Design and Developed by <a href="https://github.com/arpan21020?tab=repositories" target="_blank">Arpan Kumar</a></p>
            </div>
            
        </div>
    );
}
export default Footer