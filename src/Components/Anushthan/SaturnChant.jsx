import React, { useState } from "react";
import "./SaturnChant.css";
import anushthan from "../../assets/anusthan 1.png";
import singleSVG from "../../assets/fellow-member-svgrepo-com.png";
import groupSVG from "../../assets/teamwork-team-svgrepo-com.png";
import whatsappIcon from "../../assets/whatsapp icon.png";
import Accordion from "../Home/HomeFaq";
import emailIcon from "../../assets-webp/email-icon.webp";
import addressIcon from "../../assets-webp/adddress-icon.webp";
import phoneIcon from "../../assets-webp/mobile-icon.webp";

const tabContent = {
  about: `शनि ग्रह वास्तव में एक ऐसा ग्रह है जो न्याय प्रिय है, जो सभी राशियों पर एक धीमी गति से चक्कर लगाता है। अक्सर ऐसा देखा जाता है कि लोग शनि का नाम सुनते ही घबरा जाते हैं । क्योंकि शनि दंडाधिकारी हैं । शनि ग्रह का रंग काला है, सख्त बाल व अड़ियल और प्रचंड स्वभाव है। यह हताशा और निराशा के प्रतीक हैं। कुंडली में इनकी अशुभ स्थिति जीवन पर्यंत परेशान करने वाली है और अशुभ स्थिति में इनकी महादशा और साढ़ेसाती अत्यंत पीड़ा और निराशा देती है क्योंकि शनि ग्रह बहुत ही मंद गति से चलता है तो इनका प्रभाव पड़ने पर हर कार्य में देरी होने लगती है व कोई भी कार्य सफल नहीं होता है । इनकी उपस्थिति जातक के जीवन में निराशा भर देती है । इनसे उत्पन्न हुई परेशानियों का एक ही उपाय है इनकी प्रसन्नता । इनकी प्रसन्नता दो ही उपायों से आ सकती है एक है शांति जप और दूसरा दान। शनि दान बाँकी दान से अलग है अतः शनि दान के विषय में अधिक जानकारी प्राप्त करने हेतु सनातन ज्योति से संपर्क करें ।
वैसे तो शनि शांति के बहुत से मंत्र हैं परंतु इसका पूर्ण असर आपको तभी प्राप्त होगा जब इसके वैदिक मंत्र को पूर्ण वैदिक विधि द्वारा सम्पन्न किया जाए । इसलिए इस अनुष्ठान को दक्षता प्राप्त आचार्यों द्वारा ही सम्पन्न कराया जाना चाहिए। सनातन ज्योति सदैव योग्य एवं दक्षता प्राप्त आचार्यों द्वारा वैदिक मंत्रों के अनुसार जप कराती है ताकि जातक को जप का अधिकतम लाभ प्राप्त हो सके ।
शनि ग्रह की शांति व उसके पूर्ण फल को प्राप्त करके अपने जीवन को सुखमय बनाने के लिए आप भी घर बैठे शनि ग्रह शांति जप का आयोजन करा सकते है। यदि शनि ग्रह शांति जप के लिए आपके पास समय का आभाव है तो अब आपको परेशान होने की जरुरत नहीं है इसके लिए आप हमारी वेबसाईट पर ऑनलाइन शनि ग्रह शांति जप का पैकेज बुक कर सकते है और अपने कष्टों का निवारण कर व परेशानियों से मुक्त होकर पुरे श्रद्धा भाव से शनि ग्रह शांति जप का लाभ उठा सकते है।`,
  benefits: `शनि ग्रह वास्तव में एक ऐसा ग्रह है जो न्याय प्रिय है, जो सभी राशियों पर एक धीमी गति से चक्कर लगाता है। अक्सर ऐसा देखा जाता है कि लोग शनि का नाम सुनते ही घबरा जाते हैं । क्योंकि शनि दंडाधिकारी हैं । शनि ग्रह का रंग काला है, सख्त बाल व अड़ियल और प्रचंड स्वभाव है। यह हताशा और निराशा के प्रतीक हैं। कुंडली में इनकी अशुभ स्थिति जीवन पर्यंत परेशान करने वाली है और अशुभ स्थिति में इनकी महादशा और साढ़ेसाती अत्यंत पीड़ा और निराशा देती है क्योंकि शनि ग्रह बहुत ही मंद गति से चलता है तो इनका प्रभाव पड़ने पर हर कार्य में देरी होने लगती है व कोई भी कार्य सफल नहीं होता है । इनकी उपस्थिति जातक के जीवन में निराशा भर देती है । इनसे उत्पन्न हुई परेशानियों का एक ही उपाय है इनकी प्रसन्नता । इनकी प्रसन्नता दो ही उपायों से आ सकती है एक है शांति जप और दूसरा दान। शनि दान बाँकी दान से अलग है अतः शनि दान के विषय में अधिक जानकारी प्राप्त करने हेतु सनातन ज्योति से संपर्क करें ।
वैसे तो शनि शांति के बहुत से मंत्र हैं परंतु इसका पूर्ण असर आपको तभी प्राप्त होगा जब इसके वैदिक मंत्र को पूर्ण वैदिक विधि द्वारा सम्पन्न किया जाए । इसलिए इस अनुष्ठान को दक्षता प्राप्त आचार्यों द्वारा ही सम्पन्न कराया जाना चाहिए। सनातन ज्योति सदैव योग्य एवं दक्षता प्राप्त आचार्यों द्वारा वैदिक मंत्रों के अनुसार जप कराती है ताकि जातक को जप का अधिकतम लाभ प्राप्त हो सके ।
शनि ग्रह की शांति व उसके पूर्ण फल को प्राप्त करके अपने जीवन को सुखमय बनाने के लिए आप भी घर बैठे शनि ग्रह शांति जप का आयोजन करा सकते है। यदि शनि ग्रह शांति जप के लिए आपके पास समय का आभाव है तो अब आपको परेशान होने की जरुरत नहीं है इसके लिए आप हमारी वेबसाईट पर ऑनलाइन शनि ग्रह शांति जप का पैकेज बुक कर सकते है और अपने कष्टों का निवारण कर व परेशानियों से मुक्त होकर पुरे श्रद्धा भाव से शनि ग्रह शांति जप का लाभ उठा सकते है।`,
  process: `पूजा विधि: गणेश पूजन, शुद्धिकरण, मंत्र जाप, हवन...`,
  samagri: `पूजा सामग्री: तिल का तेल, काले वस्त्र, नीले फूल, शनि यंत्र...`,
  faq: `सामान्य प्रश्न: शनि पूजा कब करें? क्या नियम हैं?`,
};

function PujaComponent() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="bg-blog-sec">
      <div className="puja-container1">
        <div className="left-section1">
          <img src={anushthan} alt="Puja" className="puja-image" />
          <div className="nav-tabs">
            {Object.keys(tabContent).map((tab) => (
              <button
                key={tab}
                className={`tab-button ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "about"
                  ? "About Puja"
                  : tab === "benefits"
                  ? "Benefits"
                  : tab === "process"
                  ? "Process"
                  : tab === "samagri"
                  ? "Puja Samagri"
                  : "FAQ"}
              </button>
            ))}
          </div>
          <p className="tab-content">{tabContent[activeTab]}</p>
        </div>

        <div className="right-section1">
          <div className="chart-heading">Satrun Appeasement Chant</div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem
          </p>
          <center>
            <h3>Price:- 1000/-</h3>
          </center>
          <button className="talk-btn1">Talk to Acharya ji</button>
          <button className="book-btn1">Book Now</button>
          {/* <div className="policy-text">
            <input type="checkbox" /> By continuing with the payment, you accept
            and agree to our <a href="#">Anushthan Policy</a>.
          </div> */}
          <p className="policy-text">
            <input type="checkbox" /> By continuing with the payment, you accept
            and agree to our <a href="#">Anushthan Policy</a>.
          </p>
          <div className="features">
            <div className="wrap-group">
              <div className="wrap-icons-team">
                <img src={singleSVG} />
                <p> 25+ Years Experience</p>
              </div>
              <p>400+ Types of Puja</p>
            </div>
            <div className="wrap-group">
              <div className="wrap-icons-team">
                <img src={groupSVG} />
                <p> 500+ Expert</p>
              </div>
              <p>400+ Types of Puja</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-banner">
        <div className="overlay">
          <h2>Send us a message now for contact!</h2>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button1"
          >
            <img src={whatsappIcon} alt="WhatsApp" />
            +91 9876543210
          </a>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Accordion />
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Have a question?</h2>
          <p>
            'Sanatan Jyoti' is dedicated to the welfare of humans and all living
            beings. To connect with us or for more information, please email us
            or fill out the form – your message will be responded to promptly. 
          </p>
          <div className="contact-icon-flex">
            <div className="contact-item">
              <img src={emailIcon} alt="Email" />
              <span>
                <b>care@gauritechtrade.com</b>
              </span>
            </div>
            <div className="contact-item">
              <img src={phoneIcon} alt="Phone" />
              <span>
                <b>+91 9876543210</b>
              </span>
            </div>
            <div className="contact-item">
              <img src={addressIcon} alt="Address" />
              <span>
                <b> Gauritechtrade Consulting LLP</b>
                <br />
                Plot No. – 117, Ram Ganga Housing Society, Tikra Naramau, Kanpur
                Nagar, Bagdaudi Kachar, Bithoor, Kanpur Nagar, Uttar Pradesh,
                209217
              </span>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <div className="contact-form-title">Connect with Us</div>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email address" />
            <input type="tel" placeholder="Phone number" />
            <textarea placeholder="Message..."></textarea>
            <button type="submit">Submit Text</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PujaComponent;
