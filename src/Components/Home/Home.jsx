// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import PanditJiIMG from "../../assets/PNG IMAGE 1.png";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import whatsappTextIcon from "../../assets/Group 1000007210.png";
// import stepArr from "../../assets/right-arrow-1-svgrepo-com (3).svg";
// import frame1 from "../../assets/Frame.png";
// import frame2 from "../../assets/Frame.svg";
// import leftA from "../../assets/left Arrow.svg";
// import rightA from "../../assets/right Arrow.svg";
// import cardBg from "../../assets/Mask group.png";
// import bg1 from "../../assets/background 1.jpg";
// import bg2 from "../../assets/background2.jpg";
// import bg3 from "../../assets/background3.jpg";
// import firstImg from "../../assets/1st screen 1.svg";
// import secondImg from "../../assets/2nd screen 1.svg";
// import thirdImg from "../../assets/3rdd screen 1.svg";
// import fourthImg from "../../assets/4th screen 1.svg";
// import kundliImg1 from "../../assets/kundli.png";
// import mandapImg from "../../assets/MAndap 2.png";
// import "./Home.css";
// import AnushthanCatImg from "../../assets/anushthan category.png";
// import AstrologerImg from "../../assets/—Pngtree—phone call icon logo symbol_9010273 1.svg";
// import kundliImg from "../../assets/—Pngtree—male presenting customer relationship management_3659867 1.svg";
// import marriageImg from "../../assets/wmremove-transformed 2.svg";
// import pujaImg from "../../assets/—Pngtree—pooja plate and kalash with_8955323 1.svg";
// import stepsImg from "../../assets/OBJECTS (1).png";
// import arrowSVG from "../../assets/arrowss green.svg";
// import arrowSingleSVG from "../../assets/Arrow single green.svg";
// import whatsappSVG from "../../assets/whatsapp icon.svg";
// import sunriseSVG from "../../assets/sunrise.svg";
// import sunsetSVG from "../../assets/sunset.svg";
// import moonriseSVG from "../../assets/moonrise.svg";
// import moonsetSVG from "../../assets/moonset.svg";
// import kaalSVG from "../../assets/kaal.svg";
// import nakshatraSVG from "../../assets/nakshatra.svg";
// import tithiSVG from "../../assets/tithi.svg";
// import harshIMG from "../../assets/harsh.jpg";
// import ReadMoreReadLess from "../ReadMoreReadLess/ReadMoreReadLess";
// import Accordion from "./HomeFaq";
// import emailIcon from "../../assets/email-icon.svg";
// import addressIcon from "../../assets/adddress-icon.svg";
// import phoneIcon from "../../assets/mobile-icon.svg";
// import stepImg from "../../assets/step vertical.svg";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import frame1 from "../../assets-webp/Frame.webp";
import frame2 from "../../assets-webp/Frame.webp";
import leftA from "../../assets-webp/left Arrow.webp";
import rightA from "../../assets-webp/right Arrow.webp";
import cardBg from "../../assets-webp/Mask group.webp";
import bg1 from "../../assets-webp/background 1.webp";
import muhuratBg from "../../assets-webp/muhurat-background.webp";
import bg2 from "../../assets-webp/background2.webp";
import bg3 from "../../assets-webp/background3.webp";
import firstImg from "../../assets-webp/1st screen 1.webp";
import secondImg from "../../assets-webp/2nd screen 1.webp";
import thirdImg from "../../assets-webp/3rdd screen 1.webp";
import fourthImg from "../../assets-webp/4th screen 1.webp";
import kundliImg1 from "../../assets-webp/kundli.webp";
import mandapImg from "../../assets-webp/MAndap 2.webp";
import "./Home.css";
import AnushthanCatImg from "../../assets-webp/anushthan category.webp";
import AstrologerImg from "../../assets/—Pngtree—phone call icon logo symbol_9010273 1.png";
import kundliImg from "../../assets-webp/—Pngtree—male presenting customer relationship management_3659867 1.webp";
import marriageImg from "../../assets-webp/wmremove-transformed 2.webp";
import pujaImg from "../../assets/—Pngtree—pooja plate and kalash with_8955323 1.png";
import stepsImg from "../../assets-webp/OBJECTS (1).webp";
import arrowSVG from "../../assets-webp/arrowss green.webp";
import arrowSingleSVG from "../../assets-webp/Arrow single green.webp";
import whatsappSVG from "../../assets-webp/whatsapp icon.webp";
import sunriseSVG from "../../assets-webp/sunrise.webp";
import sunsetSVG from "../../assets-webp/sunset.webp";
import moonriseSVG from "../../assets-webp/moonrise.webp";
import moonsetSVG from "../../assets-webp/moonset.webp";
import kaalSVG from "../../assets-webp/kaal.webp";
import nakshatraSVG from "../../assets-webp/nakshatra.webp";
import tithiSVG from "../../assets-webp/tithi.webp";
import harshIMG from "../../assets-webp/harsh.webp";
import ReadMoreReadLess from "../ReadMoreReadLess/ReadMoreReadLess";
import Accordion from "./HomeFaq";
import emailIcon from "../../assets-webp/email-icon.webp";
import addressIcon from "../../assets-webp/adddress-icon.webp";
import phoneIcon from "../../assets-webp/mobile-icon.webp";
import stepImg from "../../assets-webp/step-vertical.webp";

const images = [frame1, frame2, frame1, frame2];
const categories = [
  { title: "Talk With Astrologer", icon: AstrologerImg },
  { title: "Download Kundli", icon: kundliImg },
  { title: "Marriage Prediction", icon: marriageImg },
  { title: "Book a Puja", icon: pujaImg },
];
const blogs = [
  {
    title: "नरक चौदस या छोटी दिवाली",
    description:
      "नरक चतुर्दशी कार्तिक मास के कृष्ण पक्ष की चतुर्दशी को मनायी जाती है। इसे छोटी दिवाली के नाम से भी जाना जाता है क्योंकि नरक चौदस दिवाली के एक दिन पहले मनाया जाता है। नरक चौदस को दीपदान करने से अकाल मृत्यु नहीं होती।  ",
    background: bg1,
  },
  {
    title: "दीपावली",
    description:
      "दीपावली का पर्व अंधकार से प्रकाश की ओर जाने का प्रतीक है। यह त्यौहार बुराई पर अच्छाई की विजय का संदेश देता है।",
    background: bg2,
  },
  {
    title: "गोवर्धन पूजा",
    description:
      "गोवर्धन पूजा प्रकृति के प्रति हमारी श्रद्धा को प्रकट करता है। इस दिन गोवर्धन पर्वत की पूजा की जाती है।",
    background: bg3,
  },
];
const rituals = [
  { title: "Ghar ki shanti", price: "INR 5001/-", image: AnushthanCatImg },
  { title: "Family Issue", price: "INR 5001/-", image: AnushthanCatImg },
  { title: "Court Issue", price: "INR 5001/-", image: AnushthanCatImg },
  { title: "Job Issue", price: "INR 5001/-", image: AnushthanCatImg },
  { title: "Marriage Issue", price: "INR 5001/-", image: AnushthanCatImg },
];
const slides = [
  {
    image: harshIMG,
    name: "Harsh Rastogi, Resident - Bisauli, Budaun, Uttar Pradesh",
    date: "23/07/2024",
    review:
      "मैंने अभी Recent में सनातन ज्योति से ऑनलाइन रुद्राभिषेक अनुष्ठान कराया। यह सनातन ज्योति के साथ मेरा और मेरे परिवार का पहला experience  था जो कि बहुत ही अच्छा रहा। इस अनुष्ठान से मुझे और मेरे परिवार को बहुत शांति और संतोष मिला। पूरे कार्यक्रम के दौरान आचार्य जी ने विधि पूर्वक पूजन सम्पन्न किया साथ ही उनके मंत्रों का उच्चारण भी स्पष्ट और एक लय में था। जिसे सुनकर मन अपने आप मंत्रमुग्ध हो गया।  ऐसा लग रहा था जैसे हम खुद मंदिर में बैठकर पूजा कर रहे हों। लाइव प्रसारण की क्वालिटी भी बहुत अच्छी थी, जिससे हमें सब कुछ clear दिखाई और सुनाई दे रहा था।इस अनुभव से हम बहुत खुश हैं और सनातन ज्योति की टीम का धन्यवाद करते हैं। आपकी सेवा ने हमें घर बैठे ही दिव्य अनुभव प्रदान किया।",
  },
  {
    image:
      "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/review1.jpg",
    name: "Sarika, Resident - Amrapali Sapphire, Noida, Uttar Pradesh",
    date: "04/04/2024",
    review:
      "वैसे तो पंचांग को समझना बहुत कठिन होता है परंतु सनातन ज्योति के पंचांग की सरलता और सटीकता ने मुझे काफी प्रभावित किया है। इसमें पूरे साल के लिए मिलने वाली समय, तिथि, और मुहूर्त की जानकारी वास्तव में बिल्कुल सही होती है, जिससे मुझे अपने धार्मिक और सांस्कृतिक कार्यों की सही तिथि व समय के लिए इधर उधर भटकना नहीं पड़ता है। अब तो मेरे लिए यह मेरा विश्वसनीय स्रोत बन चुका है साथ ही अब मैं इस पंचांग का प्रयोग करने की सलाह अपने सभी रिश्तेदारों को देती हूँ।",
  },
  {
    image:
      "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/review2.jpg",
    name: "Jitendra Kumar Nigam, Resident - Gurugram, Haryana",
    date: "08/04/2024",
    review:
      " मैं ज्यादातर अपने सभी कार्य पंचांग में शुभ तिथि और समय देखकर ही करता हूँ। क्योंकि मेरा मानना है कि मेहनत के साथ साथ हमारे जीवन पर ग्रह, नक्षत्रों का भी प्रभाव पड़ता है । सनातन ज्योति के पंचांग के कारण मुझे सही समय व तिथि का पता चलने लगा जिससे हमारे सभी महत्त्वपूर्ण कार्य सही मुहूर्त और समय के अनुसार हो पाते हैं। मैं सनातन ज्योति का धन्यवाद करता हूँ कि उन्होंने हमारे लिए इतना उपयोगी पंचांग बनाया ।",
  },
  {
    image:
      "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/review3.jpg",
    name: "Satish Kumar Narayanan, Resident-  Pune , Maharastra",
    date: "13/04/2024",
    review:
      "This Anushthan was journey of the positive vibration and spirituality for all the days….  Wonderful, ‘atma’, touching experience while the Vedic recitations were recited by the Panditji…  The orange and the yellow flowers blossomed my spirit. The Panchaamrit process upgraded my spirit…  I felt enhanced by the names of all the Gods…said in my presence, even though I was sitting so far.  What a holy, clean mind and heart absorbing of positivity….  I did it late, but experience was beyond words with the help of ‘Sanatan Jyoti’. Thanks to the team of Sanatan Jyoti, to make me live this experience!!",
  },
];
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? blogs.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === blogs.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleReadMore = () => {
    alert(`Read more about: ${blogs[currentIndex].title}`);
  };

  return (
    <div className="bg-blog-sec">
      <div className="carousel-wrapper">
        <div className="carousel-container">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="custom-swiper"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                {/* <div className="carousel-slide-content">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="carousel-image"
                  />
                  <div className="carousel-overlay-text">
                    <h1 className="carousel-title">Vedic Puja & Anushthan</h1>
                    <p className="carousel-subtitle">
                      Online Pooja & Anushthan Booking
                    </p>
                    <button className="carousel-btn">Book Now</button>
                  </div>
                  <img
                    src={PanditJiIMG} // Replace with your actual image path
                    alt="Panditji"
                    className="panditji-overlay"
                  />
                </div> */}

                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="carousel-image"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="category-container">
          {categories.map((category, index) => (
            <div
              className={`category-item ${index > 0 ? "divider" : ""}`}
              key={index}
              onClick={() => alert(category.title)} // OnClick event
            >
              <img
                src={category.icon}
                alt={category.title}
                className="category-icon"
              />

              <span className="category-title">{category.title}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="blog-container">
        <div className="leftSec">
          <h2 className="blog-title">Our Blogs</h2>
          <p>
            'Sanatan Jyoti' unveils the hidden teachings of the Vedas,
            Upanishads, and Puranas through its blog. It aims to bring out the
            true meanings behind festivals, dates, and religious beliefs. Join
            Sanatan Jyoti today to gain spiritual knowledge! 
          </p>
          <button className="blog-read-more">Read More</button>
        </div>
        <div className="rightSec">
          <div className="blog-curve"></div>
          <div
            className="blog-content"
            style={{
              backgroundImage: `url(${blogs[currentIndex].background})`,
            }}
          >
            <img
              src={leftA}
              onClick={prevSlide}
              className="arrow-button"
              alt="Previous"
            />
            <div>
              <h3 className="blog-heading">{blogs[currentIndex].title}</h3>
              <p className="blog-text">{blogs[currentIndex].description}</p>
              <button className="blog-read-more1" onClick={handleReadMore}>
                Read More
              </button>
            </div>
            <img
              src={rightA}
              onClick={nextSlide}
              className="arrow-button"
              alt="Next"
            />
          </div>
        </div>
      </div>
      <div className="astro-Prediction">
        <center>
          <h2>No #1 Astrology Prediction</h2>
        </center>
        <p>
          Sanatan Jyoti is a prestigious and trusted Vedic astrology institution
          that provides accurate astrological consultations based on ancient
          Vedic traditions. Here, detailed horoscope analysis, Kundali matching,
          Muhurat determination, and in-depth planetary studies are conducted to
          make precise predictions. If you seek accurate and reliable guidance
          for important decisions in your life, connect with Sanatan Jyoti today
          and discover the right path to your destiny! 
        </p>
      </div>
      <div className="container">
        <div className="vedic-anushthan-wrap">
          <div>
            <div className="title">Vedic Anushthan</div>
            <div className="underline"></div>
          </div>
          {/* <div className="search-section"> */}
          <div className="cat-wrap">
            <div className="input-group">
              <label className="label">Anushthan Category</label>
              <input
                type="text"
                placeholder="Search Health Issue..."
                className="search-input"
              />
            </div>
            <div className="submit-btn">Submit</div>
          </div>
          <div className="view-all">View All</div>
        </div>

        <p className="description">
          Rituals (Anushthan) are an effective means of Vedic ceremonies and
          divine worship that help remove planetary defects, family conflicts,
          business losses, and other life challenges. At{" "}
          <strong>Sanatan Jyoti</strong>, all rituals are conducted by
          Gurukul-trained priests following complete Vedic methods. For
          information on various rituals, refer to our list and connect with us
          today for the right ritual!
        </p>

        <div className="rituals-list">
          {rituals.map((ritual, index) => (
            <div key={index} className="ritual-card">
              <div className="ritual-image-wrapper">
                <img
                  src={ritual.image}
                  alt={ritual.title}
                  className="ritual-image"
                />
                <img src={muhuratBg} alt="Frame" className="ritual-frame" />
              </div>
              <h3 className="ritual-title">{ritual.title}</h3>
              <p className="ritual-price">{ritual.price}</p>
            </div>
          ))}
          {/* {rituals.map((ritual, index) => ( 
          <div key={index} className="ritual-card">
            <img
              src={ritual.image}
              alt={ritual.title}
              className="ritual-image"
            />
            <h3 className="ritual-title">{ritual.title}</h3>
            <p className="ritual-price">{ritual.price}</p>
          </div>
          ))} */}
        </div>

        <div className="view-all-mobile">View All Anushthan</div>
      </div>
      <center>
        {" "}
        <div className="vedic-banner">
          Customized Vedic Anushthan Pooja guidance by an expert priest of
          Sanatan Jyoti
        </div>
      </center>
      <div className="puja-container">
        <div className="title-puja">
          Why Sanatan Jyoti Anushthan Puja is More powerfull?
        </div>
        <div className="underline-puja"></div>
        <div className="stepper-wrapper">
          <div className="stepper-img1">
            <img src={stepImg} alt="Stepper" />
          </div>

          <div className="stepper-container">
            <div className="stepper-text left">
              <div className="step">
                <h3>Problem Discussion</h3>
                <p>
                  The experienced astrologers of Sanatan Jyoti identify the root
                  cause of your problems through in-depth analysis and detailed
                  consultation, providing precise solutions to bring positive
                  changes in life.
                </p>
              </div>
              <div className="step">
                <h3>Dasha Analysis</h3>
                <p>
                  The astrologers of Sanatan Jyoti carefully examine the
                  planetary periods (Dasha and Antardasha) in your birth chart,
                  clarifying the root causes of problems, auspicious and
                  inauspicious influences, and potential opportunities, enabling
                  you to make the right decisions at the right time for success.
                </p>
              </div>
            </div>
            <div className="stepper-image">
              <img src={stepsImg} alt="Stepper" />
            </div>
            <div className="stepper-text right">
              <div className="step">
                <h3>Kundli Analysis</h3>
                <p>
                  After understanding the problem, the expert astrologers of
                  Sanatan Jyoti prepare your birth chart based on your birth
                  date and conduct a thorough study to determine the real causes
                  of your difficulties.
                </p>
              </div>
              <div className="step">
                <h3>Free Anushthan Suggestions</h3>
                <p>
                  After understanding the root causes of the problem, Sanatan
                  Jyoti recommends special Vedic rituals that not only resolve
                  issues but also attract positive energy and good fortune into
                  your life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="puja-book-container">
        {/* Steps and Arrows */}
        <div className="blog-title1">How it Works</div>
        <span>See how it works and simplify your puja booking experience.</span>
        <div className="step-wrapper">
          <div className="step-circle">Step 1</div>
          <img src={arrowSVG} alt="Arrow" className="arrow-svg" />

          <img src={arrowSingleSVG} alt="Arrow" className="arrow-svg1" />
          {/* <img src={arrowSingleSVG} alt="Arrow" className="arrow-svg1" /> */}
          <div className="step-circle">Step 2</div>
          <img src={arrowSVG} alt="Arrow" className="arrow-svg" />
          <img src={arrowSingleSVG} alt="Arrow" className="arrow-svg1" />

          <div className="step-circle">Step 3</div>
          <img src={arrowSVG} alt="Arrow" className="arrow-svg" />
          <img src={arrowSingleSVG} alt="Arrow" className="arrow-svg1" />

          <div className="step-circle">Step 4</div>
        </div>

        {/* Step Images */}
        <div className="step-wrapper images">
          <img src={firstImg} alt="Step 1" className="step-img" />
          <img src={secondImg} alt="Step 2" className="step-img" />
          <img src={thirdImg} alt="Step 3" className="step-img" />
          <img src={fourthImg} alt="Step 4" className="step-img" />
        </div>
      </div>
      {/* <div className="puja-book-container">
        <div className="step-wrapper">
          <div className="step-circle">Step 1</div>
          <img src={arrowSVG} />

          <div className="step-circle">Step 2</div>
          <img src={arrowSVG} />
          <div className="step-circle">Step 2</div>
          <img src={arrowSVG} />
          <div className="step-circle">Step 4</div>
        </div>
        <div className="step-wrapper">
          <img src={firstImg} />
          <img src={secondImg} />
          <img src={thirdImg} />
          <img src={fourthImg} />
        </div>
      </div> */}
      <div className="container11">
        <div className="left-section">
          <div>
            <div className="title11">Kundli</div>
            <div className="underline-kundli"></div>
            <p className="description1">
              Your horoscope is the celestial map of your life, providing an
              accurate analysis of birth, marriage, career, health, and
              planetary positions. At Sanatan Jyoti, experienced astrologers
              offer precise guidance. Get your horoscope analyzed today! It will
              help you make the right decisions by providing insights into
              auspicious and inauspicious yogas, planetary periods, and
              mahadashas.
            </p>
            <button className="cta-button">Get Your Free Kundli Now</button>
          </div>
          <img src={kundliImg1} alt="Kundli" className="kundli-img" />
        </div>

        <div className="divider-kun"></div>

        <div className="right-section">
          <img src={mandapImg} alt="Match-Making" className="matchmaking-img" />
          <div>
            <h2 className="title11">Match-Making</h2>
            <div className="underline-matchmaking"></div>
            <p className="description1">
              Horoscope matching is an important and integral part of Indian
              marital tradition, laying the foundation for a happy and
              harmonious married life. Choosing the right life partner is one of
              the most crucial and decisive decisions of life. With Sanatan
              Jyoti, do online horoscope matching and choose your ideal life
              partner. Sanatan Jyoti analyzes the mental, emotional, and
              physical compatibility of the bride and groom, helping you select
              a partner who is best suited for you.
            </p>
            <button className="cta-button">
              Get Your Free Match-Making Details Now
            </button>
          </div>
        </div>
      </div>
      <div>
        <center>
          {" "}
          <div className="vedic-banner1">
            Discuss your Problem with Pandit ji whatsapp
            <img src={whatsappSVG} className="whatsapp-icon" />
          </div>
        </center>
      </div>

      <div className="astro-Prediction">
        <center>
          <div className="today-pan">Today Panchang</div>
          <div className="underline-puja width-change"></div>
          <p>11/01/2023,Wednesday, New Delhi</p>
        </center>

        <div className="pan-wrap">
          <p className="today-panchang-desc">
            <img src={sunriseSVG} alt="sunrise" />
            Sunrise : 07:15 AM
          </p>
          <p className="today-panchang-desc">
            <img src={sunsetSVG} alt="sunset" />
            Sunset : 05:43 PM
          </p>
          <p className="today-panchang-desc">
            <img src={moonriseSVG} alt="moonrise" />
            Moonrise : 07:15 AM
          </p>
          <p className="today-panchang-desc">
            <img src={moonsetSVG} alt="moonset" />
            Moonset : 05:43 PM
          </p>
          <p className="today-panchang-desc">
            <img src={kaalSVG} alt="rahu-kaal" />
            Rahu Kaal : 14:12:17 | 15:49:37
          </p>
          <p className="today-panchang-desc">
            <img src={nakshatraSVG} alt="nakshatra" />
            Nakshatra : Magha (upto 11:50 AM), Purva Phalguni
          </p>
          <p className="today-panchang-desc">
            <img src={tithiSVG} alt="tithi" />
            Tithi : Krishna Chaturthi (upto 02:31 PM), Panchami
          </p>
        </div>
      </div>
      <div className="astro-Prediction">
        <center>
          <div className="today-pan">Customer Reviews</div>
          <div className="underline-puja width-change"></div>
          <p>What our customers say about their experience with us. </p>
        </center>
        <div className="carousel-container-review">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            // slidesPerView={3} // Show 3 slides at a time
            // navigation
            pagination={{ clickable: true }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {slides.map((slide, index) => (
              // <SwiperSlide key={index}>
              //   <div className="review-card">
              //     <div className="review-header">
              //       <img src={slide.image} alt="User" className="user-img" />
              //       <div>
              //         <div className="stars">⭐⭐⭐⭐⭐</div>
              //         <p className="review-date">{slide.date}</p>
              //       </div>
              //     </div>
              //     <ReadMoreReadLess text={slide.review} />
              //   </div>
              // </SwiperSlide>
              <SwiperSlide key={index}>
                <div className="review-card" style={{ minHeight: "200px" }}>
                  <div className="review-header">
                    <img src={slide.image} alt="User" className="user-img" />
                    <div>
                      <div className="stars">⭐⭐⭐⭐⭐</div>
                      <p className="review-date">{slide.date}</p>
                    </div>
                  </div>
                  <ReadMoreReadLess text={slide.review} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="container">
        <center>
          <div className="title">Astrology Services 2025 </div>
        </center>
        <ReadMoreReadLess
          text=" Astrology has been an important part of Sanatan Dharma since ancient
          times. It helps people live a balanced and prosperous life by
          understanding the effects of planets and stars. Astrology is an
          ancient Vedic science that studies how planets, constellations, zodiac
          signs, and celestial events influence our thoughts, decisions, and
          life situations. The position and movement of planets deeply affect
          different aspects of life, such as health, education, career,
          marriage, and spiritual growth. Astrology carefully studies these
          influences and provides guidance and remedies to bring balance and
          positivity to life.    <br />
          <br />  Sanatan Jyoti offers authentic and accurate astrology services
          to help you find answers to your life’s questions and problems. Our
          experienced astrologers study the positions of planets and stars based
          on Vedic astrology principles. They provide precise and effective
          guidance in important areas like career, marriage, education,
          business, health, and finance. Whether your concerns are personal,
          professional, or spiritual, our services will guide you in the right
          direction and help you achieve clarity and success in life.  <br />
          <br />  Our Astrology Services:  
          <br /> 1. Rituals (Anushthan) <br />
           The word Anushthan means performing sacred rituals and worshiping
          divine energies with a firm resolve to achieve desired results. It
          helps remove physical illnesses, mental stress, fears, pain, and
          obstacles in life. Many times, people face challenges like family
          conflicts, negative planetary effects, legal issues, business losses,
          severe diseases, and fear of untimely death. In such situations,
          Anushthan acts as an effective solution, helping to bring peace,
          prosperity, and success in life. <br />  Anushthan is a sacred process
          that awakens divine energy and fulfills wishes. To achieve its full
          benefits, it must be performed following Vedic methods under the
          guidance of experienced scholars. If not done properly, with mistakes
          in rituals, it may have negative effects.
          <br />
             At Sanatan Jyoti, Anushthans are conducted by expert scholars
          trained in Gurukul, following Vedic traditions and procedures. These
          scholars are well-versed in sacred rituals and ensure that every
          Anushthan is performed with complete purity and devotion, helping
          individuals gain maximum benefits. 
          <br />  Types of Anushthan and Their Benefits: 
          <br />  Business-related problems 
          <br />  Health-related problems
          <br />
             Financial problems 
          <br />  Love-related problems 
          <br />  Family problems 
          <br />  Issues related to childbirth 
          <br />  Employment-related problems 
          <br />  Legal case-related problems 
          <br />  Attainment of good fortune  <br />
           Attainment of an ideal life partner 
          <br />  Personality enhancement 
          <br />  Lack of focus in studies 
          <br />  Marriage-related issues 
          <br />  Planetary peace and strength 
          <br />  Removal of tantric obstacles 
          <br />  Each Anushthan has a specific purpose, helping to bring
          balance, happiness, prosperity, and spiritual growth in life. These
          rituals are conducted by experienced priests under the guidance of
          expert astrologers, ensuring their purity, authenticity, and
          effectiveness.  2. Horoscope Analysis:  A horoscope is an astrological
          chart prepared based on an individual's date of birth. It analyzes the
          positions and movements of planets to predict a person’s life events. 
          It provides insights into major aspects of life, such as health,
          career, family, relationships, education, wealth, and travel. Every
          individual’s horoscope is associated with one of the 12 zodiac signs,
          determined by their date of birth. Each zodiac sign has a ruling
          planet that influences the person’s nature and life. For example, Mars
          is the ruling planet of Aries, symbolizing energy and enthusiasm. 
          Horoscopes also consider the current planetary positions (Dasha and
          Mahadasha). This helps indicate the direction a person’s life might
          take and highlights challenges, opportunities, and potential gains or
          losses.  Sanatan Jyoti’s online horoscope service is a reliable
          platform for those facing challenges in life or seeking solutions. It
          combines astrological knowledge and technology to provide accurate
          guidance and effective solutions. 
          <br />  Features of the Service: 
          <br />  Accurate Kundali Creation:  Your horoscope is prepared based
          on your date, time, and place of birth.  Planetary movements and their
          Dasha-Mahadasha are analyzed to make precise predictions.
          <br />
             Detailed information about your zodiac sign, its impact, and
          significant aspects of your life is provided.  Along with your
          horoscope, you receive detailed interpretations and forecasts to help
          you plan better.  Personalized Guidance:  Our expert astrologers offer
          solutions for various aspects of life, such as career, education,
          health, family, relationships, and wealth.  They help you understand
          current challenges and opportunities in your life.  Convenience at
          Home:  The service is entirely online, allowing you to get answers to
          your questions from anywhere, anytime.  With a user-friendly design,
          all information is just a click away. 
          <br />  Balance and Peace in Life:  This service not only resolves
          problems but also helps bring balance and peace to your life.  It
          assists in making better decisions and taking advantage of future
          opportunities.  Why Choose This Service?  Reliability: Accurate
          guidance from experienced astrologers.  Ease of Use: Access the
          service anytime, anywhere.  Comprehensive Solutions: Guidance on all
          aspects of life.  With expert analysis, you can make the right
          decisions and lead a happy life.  Kundali Guna Milan  Marriage is not
          just the union of two individuals, but also the joining of two
          families. It is a sacred bond based on lifelong cooperation, love, and
          harmony. Kundali Guna Milan plays an important role in strengthening
          and ensuring the success of this bond. This process is based on the
          Vedic astrology system called Ashtakoota, which evaluates the
          compatibility of two individuals. Our astrologers analyze the birth
          charts of both individuals and assess compatibility based on eight
          important factors:  Varna: It indicates the mental and social
          compatibility of the individuals. Varna matching ensures how easily
          and harmoniously they will interact with each other.  Vashya: This
          factor represents the strength of physical and emotional bonds between
          the couple. It suggests how strong their attraction and harmony will
          be. 
          <br />  Tara: Tara evaluates the compatibility related to health,
          prosperity, and longevity. It indicates how the couple will handle
          life's challenges.  <br />
           Yoni: Yoni matching shows physical compatibility and sexual harmony.
          It helps in building mutual understanding, coordination, and intimacy
          between the couple.  Grah Maitri: This assesses the friendship of
          planets in both horoscopes. It shows how much understanding and
          cooperation will exist in the relationship.  Gan: This factor reveals
          the similarity in temperament and personality of the couple. There are
          three types of Gan: Dev (calm nature), Manushya (normal nature), and
          Rakshas (energetic nature).  Bhakoot: Bhakoot assesses the couple's
          family life, financial stability, and the long-term success of the
          relationship. It indicates whether their relationship will maintain
          stability and harmony.  Naadi: Naadi matching shows the compatibility
          related to children and health. It ensures balance in both
          individuals' vital energies (prana), which helps prevent future health
          or child-related issues.  Each factor is assigned points, and the
          total score determines the level of compatibility.  Total Guna
          Matching Out of 36 points, at least 18 points are considered necessary
          for a compatible marriage.  18 or more points: Compatible for
          marriage.  Less than 18 points: There may be obstacles in marriage,
          but these can be addressed with astrological remedies. 
          <br />  Why is Kundali Guna Milan Important? Guna Milan ensures that: 
          <br />  There is mental, emotional, and physical harmony between the
          couple.  Peace and balance will remain in their family life.  Any
          unforeseen problems can be avoided in the future.  Kundali Guna Milan
          is not just a point-scoring process; it is a detailed and ancient
          science that ensures the success and prosperity of relationships. With
          the right astrological guidance, this process can lay the foundation
          for a happy and prosperous married life.  Sanatan Jyoti's precise Guna
          Milan services help you begin your marital journey on a happy note. 
          Manglik Dosh -  Mangal Dosh (also known as Manglik Dosh) occurs in
          Vedic astrology when the planet Mars is located in the 1st, 4th, 7th,
          8th, or 12th house in a person's birth chart. It is considered to have
          an adverse impact on marital life and other aspects of life. A person
          affected by Mangal Dosh is referred to as Manglik.  Mars is
          considered a symbol of power, energy, courage, and aggression in
          astrology. When Mars is positioned in any of the mentioned houses, it
          can cause stress, disagreements, and imbalance in marital life. This
          may lead to difficulties in marriage, financial issues, or sometimes
          negative effects on the health and longevity of the spouse.  The
          impact of Mangal Dosh is not limited to marriage alone; it can also
          affect health, financial stability, and mental peace. Sometimes, it
          can cause unexpected obstacles and challenges in life.  Effects of
          Mangal Dosh  Mars represents energy, courage, and aggression. Its
          specific position can lead to stress and imbalance in marital life,
          which may cause:  Disagreements and conflicts in marital life. 
          Financial problems and mental stress.  Negative impact on the health
          and longevity of the spouse.  Unexpected challenges and obstacles in
          life.  Types of Mangal Dosh  Complete Mangal Dosh  When Mars is in the
          1st, 4th, 7th, 8th, or 12th house.  It has a significant impact on
          marriage, finances, and health.  Partial Mangal Dosh  When Mars is in
          an inauspicious house, but other benefic planets (like Jupiter or the
          Moon) reduce its negative effects.  Its impact is milder and more
          limited.  Sanatan Jyoti's In-depth Analysis and Solutions for Mangal
          Dosh  Sanatan Jyoti provides detailed analysis and solutions for
          Mangal Dosh. Our services include:  Comprehensive Birth Chart
          Analysis  In-depth evaluation of the position of Mars and its
          effects.  Dosh Shanti Remedies  Mars peace rituals and specific mantra
          chanting.  Practical advice to reduce its negative effects.  Practical
          Guidance  Guidance on a positive lifestyle and auspicious activities
          to counter Mangal Dosh.  Benefic Remedies  Astrological advice to
          enhance the effects of benefic planets like Jupiter or the Moon. 
          Sanatan Jyoti's goal is not only to resolve doshas but to ensure
          stability, peace, and happiness in marital and personal life. With the
          right remedies and guidance, Mangal Dosh can be neutralized
          effectively.  Kaal Sarp Dosh Remedy-   Kaal Sarp Dosh is an
          astrological condition that occurs when all planets in a birth chart
          are positioned between Rahu and Ketu, preventing them from fully
          exerting their effects. This dosh can lead to obstacles, struggles,
          and mental stress, impacting family, social, and financial life. 
          Sanatan Jyoti's Kaal Sarp Dosh Astrology Services focus on the
          following points:  Identifying different types of Kaal Sarp Dosh
          (Anant, Kulik, Shankhpal, etc.).  Effective remedies such as Nag Bali
          Pooja and Maha Rudrabhishek.  Practical suggestions for lifestyle
          changes to mitigate its effects.  Sade Sati -  In astrology, Sade Sati
          begins when Saturn (Shani) moves through the 12th, 1st, and 2nd houses
          from your Moon sign (Janma Chandra). Since Saturn stays in one zodiac
          sign for about 2.5 years, it takes a total of 7.5 years to pass
          through these three houses. This period is called Sade Sati.       
          During Sade Sati, you may face challenges and difficulties in life,
          but there is no need to fear. It is a time to work hard and grow. Many
          people achieve success through dedication and perseverance during this
          period.   Sade Sati teaches discipline and helps people become more
          diligent. Even stubborn and arrogant individuals often learn to value
          hard work during this time. Sanatan Jyoti's Sade Sati astrology
          services focus on the following aspects:    a. Personalized analysis
          of Saturn's transit.    b. Remedies like Saturn peace rituals (Shani
          Shanti Puja) and gemstone recommendations.    c. Guidance on using
          Saturn's energy positively.    7. Kundli matching-  Kundli matching is
          an essential part of Indian marriage traditions. It forms the
          foundation of a happy and harmonious married life. Choosing the right
          life partner is one of the most important decisions, and Vedic
          astrology plays a key role in this process.  Kundli matching, also
          known as horoscope matching, is an ancient and trusted method in Vedic
          astrology. It assesses the mental, emotional, and physical
          compatibility between two individuals.  With modern technology, online
          Kundli matching has become more accessible and convenient. This
          traditional process is now simpler and better suited to the modern
          age, making it easier to find the right life partner effectively. 
          Sanatan Jyoti’s matching astrology services focus on: a. Compatibility
          for business partnerships. b. Compatibility for friendships. c.
          Improving relationships between parents and children.  Benefits of
          Consulting with Sanatan Jyoti:  Accurate Predictions and Personal
          Guidance Our astrologers have deep expertise in Vedic astrology. They
          provide precise predictions and suggestions based on your birth
          chart.  Effective Solutions for Life’s Challenges Practical and
          effective remedies, such as mantras, gemstones, rituals, and lifestyle
          changes, are offered to address your challenges.  Confidential and
          Professional Advice Your personal information and concerns are handled
          with complete confidentiality and professionalism.  Holistic Approach
          to Life’s Well-Being We focus not just on predictions but also guide
          you toward emotional, financial, and spiritual growth.  Convenient
          Online Consultation Our services are accessible and easy to use
          through phone calls, video calls, and online platforms.  Quick
          Guidance from Expert Astrologers Get instant advice from experienced
          astrologers through phone consultations. "
        />
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
          <h3>Connect with Us</h3>
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
};

export default Carousel;
