import React from 'react';
import './style.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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


// 

export default function App() {
  return (

    <Carousel>
      <div>
        <img src={process.env.PUBLIC_URL + '/assets/images/coquitologo1.jpg'} className='coquito'/>
        <p className="coquitologo1">Classic Lashes</p>
      </div>
      <div>
      <img src={process.env.PUBLIC_URL + '/assets/images/coquitologo1.jpg'} className='coquito'/>
        <p className="coquitologo1">Classic Lashes</p>
      </div>
      <div>
      <img src={process.env.PUBLIC_URL + '/assets/images/coquitologo1.jpg'} className='coquito'/>
        <p className="coquitologo1">Classic Lashes</p>
      </div>
    </Carousel>
  );
};
