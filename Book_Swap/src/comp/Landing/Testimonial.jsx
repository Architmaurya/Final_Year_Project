import Testimonials from 'react-testimonials';
function Testimonial() {

    const img1 = 'archit.jpg'; // Put the Image URLs
    const img2 = 'cat1'; // Put the Image URLs
    const img3 = 'cat3'; // Put the Image URLs
    const img4 = 'cat4'; // Put the Image URLs

    

    const review1=[img1, "Archit Maurya", "B.tech(4th year)", "Role:FrontEnd"];
    const review2=[img2, "Niskarsh Mani Pandey", "Creative Director", ""];
    const review3=[img3, "Shristi Verma", "Creative Director", ""];
    const review4=[img4, "Shivanshi Sahu", "Creative Director", ""];
    

  const items=[review1,review2,review3,review4]
    return (<>
        <div className="row testimonial_outer " >
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
                <div className="row main_testimonial">
                <Testimonials items={items} />

                </div>
            </div>
            <div className="col-sm-1"></div>
        </div>
    </>)
}

export default Testimonial;