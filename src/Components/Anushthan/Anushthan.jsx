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
const tabs = [
  {
    title: "Vedic Anushthan",
    description:
      "Auspicious rituals dedicated to achieving desired results, performed with devotion and commitment, along with divine worship for success and blessings.",
  },
  {
    title: "Health Issue",
    description:
      "Anushthan for improving health, removing negative energy, and promoting physical well-being.",
  },
  {
    title: "Carrier Issue",
    description:
      "Rituals to remove obstacles in career growth and attract better opportunities.",
  },
  {
    title: "Business Issue",
    description:
      "Helps in resolving business-related problems and attracting prosperity.",
  },
  {
    title: "Court Cases",
    description:
      "Special anushthans for legal issues to bring justice and peace.",
  },
  {
    title: "Job Issue",
    description:
      "Helps in getting a desired job or resolving job-related challenges.",
  },
  {
    title: "Love life Issue",
    description: "Rituals for love, harmony, and removing misunderstandings.",
  },
  {
    title: "Marriage Issue",
    description:
      "Anushthan for timely marriage or resolving marital conflicts.",
  },
];
const AnushthanPage = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [selectedAnushthan, setSelectedAnushthan] = useState("");

  const handleSelectChange = (e) => {
    setSelectedAnushthan(e.target.value);
  };

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
                  key={tab.title}
                  className={activeTab.title === tab.title ? "active" : ""}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            <div className="anushthan-description">
              <p>{activeTab.description}</p>
            </div>
          </section>
          <div className="center-wrapper">
            <div className="anushthan-form mobile-visible">
              <div className="form-title">Book Anushthan</div>
              <img src={panditImg} alt="Pandit" className="form-image" />
              <form>
                <div className="form-row">
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" placeholder="Name" />
                  </div>
                  <div className="form-group">
                    <label>Anushthan</label>
                    <select
                      value={selectedAnushthan}
                      onChange={handleSelectChange}
                    >
                      <option value="">Select</option>
                      <option value="Rudrabhishek">Rudrabhishek</option>
                      <option value="Mahamrityunjaya Jaap">
                        Mahamrityunjaya Jaap
                      </option>
                      <option value="Navgrah Shanti">Navgrah Shanti</option>
                      <option value="Kaal Sarp Dosh Nivaran">
                        Kaal Sarp Dosh Nivaran
                      </option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Mobile Number</label>
                  <div className="mobile-wrapper">
                    <span className="country-code">+91</span>
                    <input type="tel" placeholder="9876543218" />
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
          <div>
            <div>
              <div className="title-puja">Anushthan Booking Process</div>
              <div className="underline-puja widthAnushthan"></div>

              <div className="wrap-panditJi">
                <img src={pandit1} alt="panditji" />
                <div className="wrap-pandit-text">
                  {/* <h3>Talk to Pandit Ji First</h3> */}
                  <span className="orange">Talk </span>
                  <span className="brown">to </span>
                  <span className="orange">Pandit Ji </span>
                  <span className="brown">First</span>
                  <p>
                    Get in touch with our experienced astrologers over the phone
                    to seek guidance for any personal, professional, or
                    life-related astrological issues.
                  </p>
                </div>
                <img src={arrow1} alt="panditji" />
              </div>

              <div className="wrap-yagya-pandit">
                <img
                  src={yagya}
                  alt="yagya"
                  className="desktop-visible yagya"
                />

                <div className="wrap-text-pandit columnReverse">
                  <div className="wrap-pandit-text ">
                    {/* <h3>Discuss Problems, Remedies</h3> */}

                    <span className="brown">Discuss </span>
                    <span className="orange">Problems, </span>
                    <span className="brown">Remedies</span>
                    <p>
                      Share your personal, family, or astrological concerns and
                      receive appropriate Vedic solutions for your problems.
                    </p>
                  </div>
                  <img src={pandit2} alt="panditji" className="yagya1" />
                </div>
              </div>
              <center>
                <img src={arrow1} className="mobile-visible" />
              </center>
              <div className="wrap-panditJi arrow-change">
                <img
                  src={arrow3}
                  className="desktop-visible"
                  style={{ marginRight: "20px" }}
                />
                <img src={pandit3} />
                <div className="wrap-pandit-text">
                  {/* <h3>Free Pooja Suggestions by Pandit ji</h3> */}
                  <span className="orange">Free Pooja </span>
                  <span className="brown">Suggestions by Pandit ji</span>
                  <p>
                    Based on your Kundali and concerns, Acharya Ji will provide
                    free guidance on suitable Pooja and Anushthan for effective
                    results.
                  </p>
                </div>
                <img src={arrow2} className="desktop-visible" />
                <center>
                  <img src={arrow1} className="mobile-visible" />
                </center>
              </div>
              <center>
                <img
                  src={yagya}
                  alt="panditji-yagya"
                  className="mobile-visible yagya"
                  style={{ marginBottom: "20px" }}
                />
              </center>
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
              <div className="vedic-banner-Anu">
                Note: If you have booked a pooja with us, then we will not
                charge any kundali prediction fee till your pooja is done
                (either it's 6 days, 7 days, 15 days, etc.).
              </div>
              {/* </center> */}
            </div>
            <div className="anushthan-container-cate">
              <div className="title">Anushthan Categories</div>
              <div className="underline widthCategories"></div>
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
                <>
                  <div key={idx} className="anushthan-section-cate">
                    <div className="section-header">
                      <h2>
                        {idx + 1}. {section.category}
                      </h2>
                      <a href="#" className="desktop-visible">
                        View All
                      </a>
                    </div>
                    <p className="section-description">{section.description}</p>
                    <a href="#" className="mobile-visible viewAll">
                      View All Anushthan
                    </a>
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
                  <div className="underline widthSectionCat"></div>
                </>
              ))}
            </div>
          </div>
        </div>

        <div className="anushthan-form desktop-visible">
          <div className="form-title">Book Anushthan</div>
          <img src={panditImg} alt="Pandit" className="form-image" />
          <form>
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Name" />
              </div>
              <div className="form-group">
                <label>Anushthan</label>
                <select value={selectedAnushthan} onChange={handleSelectChange}>
                  <option value="">Select</option>
                  <option value="Rudrabhishek">Rudrabhishek</option>
                  <option value="Mahamrityunjaya Jaap">
                    Mahamrityunjaya Jaap
                  </option>
                  <option value="Navgrah Shanti">Navgrah Shanti</option>
                  <option value="Kaal Sarp Dosh Nivaran">
                    Kaal Sarp Dosh Nivaran
                  </option>
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
};

export default AnushthanPage;
