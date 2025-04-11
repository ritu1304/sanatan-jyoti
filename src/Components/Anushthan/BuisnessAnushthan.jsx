import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./BuisnessAnushthan.css";
import cardPNG from "../../assets/buisness anushthan card.png";
import banner from "../../assets/buisness banner.png";
import whatsappIcon from "../../assets/whatsapp icon.png";
import Accordion from "../Home/HomeFaq";
import emailIcon from "../../assets-webp/email-icon.webp";
import addressIcon from "../../assets-webp/adddress-icon.webp";
import phoneIcon from "../../assets-webp/mobile-icon.webp";
const anushthanData = [
  {
    image: cardPNG,
    title: "Mars Appeasement Chant",
    description:
      "Due to the inauspicious effects of Mars, a person may have to face...",
    price: "500/-",
    time: "30 Days",
  },
  {
    image: cardPNG,
    title: "Saturn Peace Ritual",
    description:
      "Pacify Saturn to bring balance and remove obstacles from life...",
    price: "800/-",
    time: "21 Days",
  },
  {
    image: cardPNG,
    title: "Mercury Healing Pooja",
    description: "For intellect, communication, and career enhancement...",
    price: "600/-",
    time: "11 Days",
  },
  {
    image: cardPNG,
    title: "Venus Prosperity Pooja",
    description: "Gain harmony in relationships and attract abundance...",
    price: "750/-",
    time: "15 Days",
  },
  {
    image: cardPNG,
    title: "Mars Appeasement Chant",
    description:
      "Due to the inauspicious effects of Mars, a person may have to face...",
    price: "500/-",
    time: "30 Days",
  },
  {
    image: cardPNG,
    title: "Saturn Peace Ritual",
    description:
      "Pacify Saturn to bring balance and remove obstacles from life...",
    price: "800/-",
    time: "21 Days",
  },
  {
    image: cardPNG,
    title: "Mercury Healing Pooja",
    description: "For intellect, communication, and career enhancement...",
    price: "600/-",
    time: "11 Days",
  },
  {
    image: cardPNG,
    title: "Venus Prosperity Pooja",
    description: "Gain harmony in relationships and attract abundance...",
    price: "750/-",
    time: "15 Days",
  },
];
const problems = [
  "Business-Related Problems",
  "Health-Related Problems",
  "Financial Problems",
  "Love-Related Problems",
  "Family Problems",
  "Child-Related Problems",
  "Employment-related Problems",
  "Legal case-related Problems",
  "Attainment of good fortune",
  "Attainment of an ideal life partner",
  "Personality Enhancement",
  "Lack of focus in studies",
  "Marriage-related issues",
  "Planetary peace and strength",
  "Removal of tantric obstacles",
];

const BusinessAnushthan = () => {
  return (
    <div className="bg-blog-sec">
      <div className="anushthan-container">
        <div className="anushthan-content">
          <div className="title" style={{ paddingTop: "20px" }}>
            Buisness Anushthan
          </div>
          <div className="form-container">
            <div className="input-group-wrapper">
              <div className="input-group-buisness">
                <label>Select Anushthan</label>
                <input type="text" placeholder="Search Sri Suktam..." />
              </div>
              <div className="input-group-buisness">
                <label>Select Puja</label>
                <input type="text" placeholder="Search Ghar ka Dosh..." />
              </div>
            </div>
            <button className="submit-btn-buisness">Submit</button>
          </div>
          {/* <div className="underline"></div> */}
          <div className="carousel-container-buisness">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              //   navigation
              pagination={{ clickable: true }}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
            >
              {anushthanData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="card">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="card-image"
                    />
                    <button className="book-button">Book Now</button>
                    <div className="card-content">
                      <h3 className="card-title">{item.title}</h3>
                      <p className="card-description">{item.description}</p>
                      <div className="card-footer">
                        <span>
                          <b>Price:</b> {item.price}
                        </span>
                        <span>
                          <b>Time:</b> {item.time}
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <center>
            <div className="anushthan-form mobile-visible">
              <h3 className="form-title">Book Anushthan</h3>
              <ul>
                {problems.map((problem, index) => (
                  <li key={index}>{problem}</li>
                ))}
              </ul>
            </div>
          </center>
          <div>
            <div className="title-puja">Content Section</div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className="anushthan-form desktop-visible">
          <h3 className="form-title">Book Anushthan</h3>
          <ul>
            {problems.map((problem, index) => (
              <li key={index}>{problem}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="contact-banner">
        <div className="overlay">
          <h2>Send us a message now for contact!</h2>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
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

export default BusinessAnushthan;
