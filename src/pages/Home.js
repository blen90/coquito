// import React from 'react';
// import './style.css';
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardText,
//   MDBCardImage
// } from 'mdb-react-ui-kit';

// export default function App() {
//   return (

//     <MDBCard className='card'>
//       <MDBCardImage src={process.env.PUBLIC_URL + '/assets/images/coquitolasheslogo2.png'} alt="img1" className="coquitolashes2"/>
//       <MDBCardBody>
//         <MDBCardText>
//           Some quick example text to build on the card title and make up the bulk of the card's content.
//         </MDBCardText>
//       </MDBCardBody>
//     </MDBCard>
//     // <div className="container text-center justify-content-center col-6-md col-3-sm">
//     //   <div className="card-body">
//     //     <img src={process.env.PUBLIC_URL + '/assets/images/coquitolasheslogo2.png'} alt="img1" className="coquitolashes1"></img>    
//     //   </div>
//     //   <br></br>
//     //   <div className="card-body">
//     //     <img src={process.env.PUBLIC_URL + '/assets/images/coquitolasheslogo2.png'} alt="img1" className="coquitolashes1"></img>    
//     //   </div>
//     //   <br></br>
//     //   <div className="card-body">
//     //     <img src={process.env.PUBLIC_URL + '/assets/images/coquitolasheslogo2.png'} alt="img1" className="coquitolashes1"></img>    
//     //   </div>

//     // </div>
//   );
// }


import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <div className="container text-center">
    <MDBCard justify-content-center col-3-sm>
      <MDBRipple rippleColor='light' rippleTag='div' justify-content-center col-6-md col-3-sm>
      <MDBCardImage src={process.env.PUBLIC_URL + '/assets/images/coquitolasheslogo2.png'} alt="img1" className="coquitolashes2"/>
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
    </MDBCard>
    </div>
  );
}


