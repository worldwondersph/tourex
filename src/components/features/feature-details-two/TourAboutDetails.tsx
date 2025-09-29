import Review from "../feature-details-one/about/Review"
import ReviewDetails from "../feature-details-one/about/ReviewDetails"
import ReviewFormArea from "../feature-details-one/about/ReviewFormArea"
import FeatureList from "../feature-details-one/FeatureList"
import FeatureSidebar from "../feature-details-one/FeatureSidebar"
import AboutSlider from "./about/AboutSlider"
import AboutText from "./about/AboutText"
import Amenities from "./about/Amenities"

const TourAboutDetails = () => {
   return (
      <div className="tg-tour-about-area">
         <div className="container">
            <div className="row">
               <div className="col-xl-9 col-lg-8">
                  <div className="tg-tour-about-wrap mr-55">
                     <AboutSlider />
                     <div className="tg-tour-details-feature-list-wrap mb-30">
                        <div className="row align-items-center">
                           <div className="col-lg-12">
                              <div className="tg-tour-details-video-feature-list tg-tour-details-video-feature-2-list">
                                 <FeatureList />
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="tg-tour-about-content tg-tour-about-2-content">
                        <AboutText />
                        <Amenities />
                        <div className="tg-tour-about-map tg-tour-about-2-inner mb-40">
                           <h4 className="tg-tour-about-title mb-15">Location</h4>
                           <p className="text-capitalize lh-28">Castle in one day is next to impossible. Designed specifically for trave arelimited time in London
                              ws you to check off a range of southern England‘s are historical</p>
                           <div className="tg-tour-about-map h-100">
                              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31078.361591144112!2d-74.0256365664179!3d40.705584751235754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1724572184688!5m2!1sen!2sbd" width="600" height="450" style={{border:"0"}} loading="lazy"></iframe>
                           </div>
                        </div>
                        <Review />
                        <div className="tg-tour-about-border mb-35"></div>
                        <ReviewDetails />
                        <div className="tg-tour-about-border mb-45"></div>
                        <ReviewFormArea />
                     </div>
                  </div>
               </div>
               <div className="col-xl-3 col-lg-4">
                  <div className="tg-tour-about-sidebar top-sticky mb-50">
                     <FeatureSidebar />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default TourAboutDetails
