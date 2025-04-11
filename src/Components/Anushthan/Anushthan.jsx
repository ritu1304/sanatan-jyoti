import React from "react";
import "./Anushthan.css";
import panditImg from "../../assets/anushthan form panditji.png";
import { useState } from "react";
import arrow1 from "../../assets/arrow 1.png";
import arrow2 from "../../assets/arrow 2.png";
import arrow3 from "../../assets/arrow 3.png";
import pandit1 from "../../assets/Pandit 1.png";
import pandit2 from "../../assets/pandit 2.png";
import pandit3 from "../../assets/pandit 3.png";
import yagya from "../../assets/yagya pandit.png";
import muhuratBg from "../../assets/muhurat-background.png";
import ganeshJi from "../../assets/Cartoon portrait of hindu god.png";
import whatsAppIcon from "../../assets/whatsapp icon.png";
import AnushthanCatImg from "../../assets-webp/anushthan category.webp";
import Accordion from "../Home/HomeFaq";
import emailIcon from "../../assets-webp/email-icon.webp";
import addressIcon from "../../assets-webp/adddress-icon.webp";
import phoneIcon from "../../assets-webp/mobile-icon.webp";
const AnushthanPage = () => {
  const [activeTab, setActiveTab] = useState("Vedic Anushthan");
  const tabs = [
    "Vedic Anushthan",
    "Health Issue",
    "Carrier Issue",
    "Business Issue",
    "Court Cases",
    "Job Issue",
    "Love life Issue",
    "Marriage Issue",
  ];
  const anushthanData = [
    {
      category: "Business-Related Problems",
      description:
        "Financial instability, frequent losses, lack of customers, obstacles in investments, partnership disputes, or stagnation in business growth that hinder success.",
      items: [
        { title: "Ghar ki shanti", icon: AnushthanCatImg },
        { title: "Family Issue", icon: AnushthanCatImg },
        { title: "Court Issue", icon: AnushthanCatImg },
        { title: "Job Issue", icon: AnushthanCatImg },
        { title: "Marriage Issue", icon: AnushthanCatImg },
      ],
    },
    {
      category: "Health-Related Problems",
      description:
        "Frequent illnesses, delays in treatment, chronic diseases, mental stress, lack of energy, or physical and mental issues caused by an unhealthy lifestyle.",
      items: [
        { title: "Ghar ki shanti", icon: AnushthanCatImg },
        { title: "Family Issue", icon: AnushthanCatImg },
        { title: "Court Issue", icon: AnushthanCatImg },
        { title: "Job Issue", icon: AnushthanCatImg },
        { title: "Marriage Issue", icon: AnushthanCatImg },
      ],
    },
    {
      category: "Business-Related Problems",
      description:
        "Financial instability, frequent losses, lack of customers, obstacles in investments, partnership disputes, or stagnation in business growth that hinder success.",
      items: [
        { title: "Ghar ki shanti", icon: AnushthanCatImg },
        { title: "Family Issue", icon: AnushthanCatImg },
        { title: "Court Issue", icon: AnushthanCatImg },
        { title: "Job Issue", icon: AnushthanCatImg },
        { title: "Marriage Issue", icon: AnushthanCatImg },
      ],
    },
    {
      category: "Health-Related Problems",
      description:
        "Frequent illnesses, delays in treatment, chronic diseases, mental stress, lack of energy, or physical and mental issues caused by an unhealthy lifestyle.",
      items: [
        { title: "Ghar ki shanti", icon: AnushthanCatImg },
        { title: "Family Issue", icon: AnushthanCatImg },
        { title: "Court Issue", icon: AnushthanCatImg },
        { title: "Job Issue", icon: AnushthanCatImg },
        { title: "Marriage Issue", icon: AnushthanCatImg },
      ],
    },
    {
      category: "Business-Related Problems",
      description:
        "Financial instability, frequent losses, lack of customers, obstacles in investments, partnership disputes, or stagnation in business growth that hinder success.",
      items: [
        { title: "Ghar ki shanti", icon: AnushthanCatImg },
        { title: "Family Issue", icon: AnushthanCatImg },
        { title: "Court Issue", icon: AnushthanCatImg },
        { title: "Job Issue", icon: AnushthanCatImg },
        { title: "Marriage Issue", icon: AnushthanCatImg },
      ],
    },
    {
      category: "Health-Related Problems",
      description:
        "Frequent illnesses, delays in treatment, chronic diseases, mental stress, lack of energy, or physical and mental issues caused by an unhealthy lifestyle.",
      items: [
        { title: "Ghar ki shanti", icon: AnushthanCatImg },
        { title: "Family Issue", icon: AnushthanCatImg },
        { title: "Court Issue", icon: AnushthanCatImg },
        { title: "Job Issue", icon: AnushthanCatImg },
        { title: "Marriage Issue", icon: AnushthanCatImg },
      ],
    },
  ];

  return (
    <div className="bg-blog-sec">
      <div className="anushthan-container">
        <div className="anushthan-content">
          <section className="anushthan-section">
            <div className="anushthan-heading">
              <h1>Vedic Anushthan</h1>
              <p>
                Auspicious rituals dedicated to achieving desired results,
                performed with devotion and commitment, along with divine
                worship for success and blessings.
              </p>
            </div>

            <div className="anushthan-tabs">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={activeTab === tab ? "active" : ""}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="anushthan-description">
              <p>
                Anushthan refers to Vedic rituals and divine worship performed
                to achieve desired results. These sacred ceremonies help in
                reducing problems arising from physical, mental, familial,
                business, and planetary imbalances. Through Anushthan, one can
                seek relief from fear, distress, illness, financial loss, and
                other difficulties.
              </p>
              <p>
                For Anushthan to be truly effective, it must be conducted with
                precision by expert Acharyas following Vedic traditions. Any
                errors in the process can lead to adverse effects. At Sanatan
                Jyoti, all Anushthans are performed strictly as per the Vedic
                scriptures by Gurukul-trained, highly skilled Acharyas.
              </p>
              <p>
                Life naturally has ups and downs, but when challenges persist,
                seeking a solution becomes essential. Vedic Anushthans help
                remove negative influences and bring happiness, peace, and
                prosperity. If you are facing obstacles in life, consult our
                experienced astrologers. They will guide you to the most
                suitable Anushthan for your specific concerns, leading to
                positive transformations in your life.
              </p>
            </div>
          </section>
          <div className="anushthan-form mobile-visible">
            <h3 className="form-title">Book Anushthan</h3>
            <img src={panditImg} alt="Pandit" className="form-image" />
            <form>
              <div className="form-row">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" placeholder="Name" />
                </div>
                <div className="form-group">
                  <label>Anushthan</label>
                  <select>
                    <option>Select</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Mobile Number</label>
                <div className="mobile-wrapper">
                  <span className="country-code">+91</span>
                  <input type="tel" placeholder="9876543218" />
                  {/* <select className="dropdown-dummy">
                <option>▼</option>
              </select> */}
                </div>
              </div>

              <div className="form-group">
                <label>Enter OTP</label>
                <input type="text" placeholder="987654" />
              </div>

              <div className="form-group">
                <label>Enter your Email</label>
                <input type="email" placeholder="sanatanjyotii@gmail.com" />
              </div>

              <button type="submit" className="submit-btn">
                Book Your Anushthan
              </button>
            </form>
          </div>
          <div>
            <div>
              <div className="title-puja">Anushthan Booking Process</div>
              <div className="underline-puja widthAnushthan"></div>
            </div>
            {/* <div className="astrology-container">
              <div className="pandit-img pandit-img-1">
                <img src={pandit1} alt="Pandit Ji" />
              </div>
              <div className="step step-1">
                <h2>Talk to Pandit Ji First</h2>
                <p>
                  Get in touch with our experienced astrologers over the phone
                  to seek guidance for any personal, professional, or
                  life-related astrological issues.
                </p>
              </div>
              <div className="arrow arrow-1">
                <img src={arrow1} alt="Arrow" />
              </div>

              <div className="pandit-img pandit-img-2">
                <img src={pandit2} alt="Pandit Ji Talking" />
              </div>
              <div className="step step-2">
                <h2>
                  Discuss <span className="highlight">Problems, Remedies</span>
                </h2>
                <p>
                  Share your personal, family, or astrological concerns and
                  receive appropriate Vedic solutions for your problems.
                </p>
              </div>
              <div className="arrow arrow-2">
                <img src={arrow2} alt="Arrow" />
              </div>

              <div className="pandit-img pandit-img-3">
                <img src={pandit3} alt="Pandit Ji Suggesting" />
              </div>
              <div className="step step-3">
                <h2>
                  <span className="highlight">Free Pooja</span> Suggestions by
                  Pandit ji
                </h2>
                <p>
                  Based on your Kundali and concerns, Acharya Ji will provide
                  free guidance on suitable Pooja and Anushthan for effective
                  results.
                </p>
              </div>
              <div className="arrow arrow-3">
                <img src={arrow3} alt="Arrow" />
              </div>

              <div className="pandit-img pandit-img-4">
                <img src={yagya} alt="Pandit Performing Ritual" />
              </div>
            </div> */}

            <div>
              {/* <center> */}{" "}
              <div className="vedic-banner">
                Note: If you have booked a pooja with us, then we will not
                charge any kundali prediction fee till your pooja is done
                (either it's 6 days, 7 days, 15 days, etc.).
              </div>
              {/* </center> */}
            </div>
            <div className="anushthan-container-cate">
              <div className="title">Anushthan Categories</div>
              <div className="underline"></div>
              <p className="description">
                Our ancient traditions describe various Anushthans designed to
                address specific life challenges and fulfill desires. These
                rituals are categorized based on different problems, allowing
                you to choose the most suitable Anushthan as per your needs.
              </p>

              {/* <div className="search-bar">
                <input type="text" placeholder="Search Health Issue..." />
                <button className="submit-btn-cate">Submit</button>
                <button className="talk-btn">Talk to Acharya Ji</button>
              </div> */}
              <div className="anushthan-container-btns">
                <label className="label-cat">Choose Anushthan</label>
                <input
                  type="text"
                  placeholder="Search Health Issue..."
                  className="search-input-health"
                />
                <button className="submit-button">Submit</button>
                <button className="whatsapp-button">
                  <img src={whatsAppIcon} className="whatsapp-icon-btn" />
                  Talk to Acharya Ji
                </button>
              </div>

              {anushthanData.map((section, idx) => (
                <div key={idx} className="anushthan-section-cate">
                  <div className="section-header">
                    <h2>
                      {idx + 1}. {section.category}
                    </h2>
                    <a href="#">View All</a>
                  </div>
                  <p className="section-description">{section.description}</p>
                  <div className="rituals-list">
                    {section.items.map((item, i) => (
                      <div className="ritual-card" key={i}>
                        <div className="ritual-image-wrapper">
                          <img
                            src={item.icon}
                            alt={item.title}
                            className="ritual-image"
                          />
                          <img
                            src={muhuratBg}
                            alt="Frame"
                            className="ritual-frame"
                          />
                        </div>
                        <h3 className="ritual-title">{item.title}</h3>
                        <p className="ritual-price">INR 5001/-</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="anushthan-form desktop-visible">
          <h3 className="form-title">Book Anushthan</h3>
          <img src={panditImg} alt="Pandit" className="form-image" />
          <form>
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Name" />
              </div>
              <div className="form-group">
                <label>Anushthan</label>
                <select>
                  <option>Select</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Mobile Number</label>
              <div className="mobile-wrapper">
                <span className="country-code">+91</span>
                <input type="tel" placeholder="9876543218" />
                {/* <select className="dropdown-dummy">
                <option>▼</option>
              </select> */}
              </div>
            </div>

            <div className="form-group">
              <label>Enter OTP</label>
              <input type="text" placeholder="987654" />
            </div>

            <div className="form-group">
              <label>Enter your Email</label>
              <input type="email" placeholder="sanatanjyotii@gmail.com" />
            </div>

            <button type="submit" className="submit-btn">
              Book Your Anushthan
            </button>
          </form>
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

export default AnushthanPage;
