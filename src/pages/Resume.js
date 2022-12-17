import './style.css';

export default function Resume() {
    return (
        <div className="resume col-12-lg col-6-md col-3-sm text-center">
            <h1>Learned Technologies</h1>
            <div className="skill-container ">
                <li className="skill"><a href="https://www.w3schools.com/html/default.asp" target="_blank" rel="noreferrer"><img className="skill-logo display:inline" src={process.env.PUBLIC_URL + '/assets/icons/html.jpg'} alt="logo"></img></a></li>
                <li className="skill"><a href="https://www.w3schools.com/css/default.asp" target="_blank" rel="noreferrer"><img className="skill-logo display:inline" src={process.env.PUBLIC_URL + '/assets/icons/css.jpg'} alt="logo"></img></a></li>
                <li className="skill"><a href="https://www.w3schools.com/js/default.asp" target="_blank" rel="noreferrer"><img className="skill-logo display:inline" src={process.env.PUBLIC_URL + '/assets/icons/js.jpg'} alt="logo"></img></a></li>
                <li className="skill"><a href="https://nodejs.org/en/docs/" target="_blank" rel="noreferrer"><img className="skill-logo display:inline" src={process.env.PUBLIC_URL + '/assets/icons/node.jpg'} alt="logo"></img></a></li>
                <li className="skill"><a href="https://handlebarsjs.com/" target="_blank" rel="noreferrer"><img className="skill-logo display:inline" src={process.env.PUBLIC_URL + '/assets/icons/handlebars.jpg'} alt="logo"></img></a></li>
                <br></br>
                <li className="skill"><a href="https://dev.mysql.com/doc/" target="_blank" rel="noreferrer"><img className="skill-logo display:inline" src={process.env.PUBLIC_URL + '/assets/icons/mysql.jpg'} alt="logo"></img></a></li>
                <li className="skill"><a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img className="skill-logo display:inline" src={process.env.PUBLIC_URL + '/assets/icons/mongo.jpg'} alt="logo"></img></a></li>
                <li className="skill"><a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img className="skill-logo display:inline" src={process.env.PUBLIC_URL + '/assets/icons/react.jpg'} alt="logo"></img></a></li>
                <li className="skill"><a href="https://graphql.org/" target="_blank" rel="noreferrer"><img className="skill-logo display:inline" src={process.env.PUBLIC_URL + '/assets/icons/graphql.jpg'} alt="logo"></img></a></li>
                <li className="skill"><a href="https://www.postman.com/" target="_blank" rel="noreferrer"><img className="skill-logo display:inline" src={process.env.PUBLIC_URL + '/assets/icons/postman.jpg'} alt="logo"></img></a></li>
                <br></br>
                <a href="https://drive.google.com/file/d/1vxI0WKS72aUv3eu5J7W_ErC3y2p8jZSy/view?usp=sharing" target="_blank" rel="noreferrer">Link to Resume on Google Drive</a>
            </div>
        </div>
    );
}





