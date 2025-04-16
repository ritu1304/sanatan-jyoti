import { useState } from "react";
import kundliFormImg from "../../assets/kundli-form.png";
import "./Kundli.css";
import PanditJi from "../../assets/pandit ji 2.png";
import rightArrow from "../../assets/right-arrow-svgrepo-com.svg";
import AshwaniJi from "../../assets/ashwani shukla.png";

import HarshJi from "../../assets/harsh shukla.png";
import PawanJi from "../../assets/pawan shukla (1).png";
import RishabhJi from "../../assets/rishabh shukla.png";
import AmitJi from "../../assets/Amitamit@0.1x.png";
import VivekJi from "../../assets/Vivek pandit@0.5xvivek.png";
import SonuJi from "../../assets/Sonu Tiwarisonu@0.25x@0.1x.png";
import ReadMoreReadLess from "../ReadMoreReadLess/ReadMoreReadLess";

const tabs = [
  {
    title: "Basic Details",
    description:
      "The science of making Kundli (Astrological chart) and reading Horoscope is called Astrology. Astrology is also called Jyoti Shastra, Jyoti means light and the scripture which illuminates our life is called Jyotish Shastra. When a newborn baby is born, the map of the sky is called a horoscope, at that time which planet is where, all these are described in the horoscope. The human body is formed by the effects of these planets only. And the activities in his life are the result of a complex action of his karma and the movements of the planets. Kundli describes a person from birth to death.",
  },
  {
    title: "Horoscope Chart",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "Planetary Details",
    description:
      "The science of making Kundli (Astrological chart) and reading Horoscope is called Astrology. Astrology is also called Jyoti Shastra, Jyoti means light and the scripture which illuminates our life is called Jyotish Shastra. When a newborn baby is born, the map of the sky is called a horoscope, at that time which planet is where, all these are described in the horoscope. The human body is formed by the effects of these planets only. And the activities in his life are the result of a complex action of his karma and the movements of the planets. Kundli describes a person from birth to death.",
  },
  {
    title: "Dasha Report",
    description:
      "Rituals to remove obstacles in career growth and attract better opportunities.",
  },

  {
    title: "Dosha Report",
    description:
      "The science of making Kundli (Astrological chart) and reading Horoscope is called Astrology. Astrology is also called Jyoti Shastra, Jyoti means light and the scripture which illuminates our life is called Jyotish Shastra. When a newborn baby is born, the map of the sky is called a horoscope, at that time which planet is where, all these are described in the horoscope. The human body is formed by the effects of these planets only. And the activities in his life are the result of a complex action of his karma and the movements of the planets. Kundli describes a person from birth to death.",
  },
  {
    title: "Remedies",
    description:
      "The science of making Kundli (Astrological chart) and reading Horoscope is called Astrology. Astrology is also called Jyoti Shastra, Jyoti means light and the scripture which illuminates our life is called Jyotish Shastra. When a newborn baby is born, the map of the sky is called a horoscope, at that time which planet is where, all these are described in the horoscope. The human body is formed by the effects of these planets only. And the activities in his life are the result of a complex action of his karma and the movements of the planets. Kundli describes a person from birth to death.",
  },
  {
    title: "Daily Prediction",
    description: "Rituals for love, harmony, and removing misunderstandings.",
  },
  {
    title: "Ashtak Verga",
    description:
      "Anushthan for timely marriage or resolving marital conflicts.",
  },
];
const Kundli = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    dob: "",
    tob: "",
    birthPlace: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const cards = [
    {
      image: PanditJi,
      name: "Shree Ashutosh Mishra",
      description: "Shree Ashutosh Mishra Expertise",
      fullDesc: "Shree Ashutosh Mishra Desc",
    },

    {
      image: PawanJi,
      name: "Acharya Shree Pawan Shukla",

      description: "Acharya Shree Pawan Shukla Expertise",
      fullDesc: "Acharya Shree Pawan Shukla Desc",
    },
    {
      image: AshwaniJi,
      name: "Pandit Shree Ashwani Shukla",
      description: "Pandit Shree Ashwani Shukla Expertise",
      fullDesc: "Pandit Shree Ashwani Shukla Desc",
    },
    {
      image: RishabhJi,
      name: "Shree Rishabh Shukla",
      description: "Shree Rishabh Shukla Expertise",
      fullDesc: "Shree Rishabh Shukla Desc",
    },

    {
      image: HarshJi,
      name: "Pandit Shree Harsh Shukla",
      description: "Pandit Shree Harsh Shukla Expertise",
      fullDesc: "Pandit Shree Harsh Shukla Desc",
    },
    {
      image: AmitJi,
      name: "Shree AmitJi",
      description: "Shree AmitJi Expertise",
      fullDesc: "Shree AmitJi Desc",
    },
    {
      image: VivekJi,
      name: "Shree VivekJi",
      description: "Shree VivekJi Expertise",
      fullDesc: "Shree VivekJi Desc",
    },
    {
      image: SonuJi,
      name: "Shree SonuJi",
      description: "Shree SonuJi Expertise",
      fullDesc: "Shree SonuJi Desc",
    },
    {
      image: AmitJi,
      name: "Shree AmitJi",
      description: "Shree AmitJi Expertise",
      fullDesc: "Shree AmitJi Desc",
    },
    {
      image: VivekJi,
      name: "Shree VivekJi",
      description: "Shree VivekJi Expertise",
      fullDesc: "Shree VivekJi Desc",
    },
  ];

  const handleCardClick = (card) => {
    // navigate("/panditji-detail", { state: card });
  };

  return (
    <div className="bg-blog-sec">
      <div className="anushthan-container">
        <div className="anushthan-content">
          <section className="anushthan-section">
            <div className="anushthan-heading">
              <h1>Janma Kundli</h1>
              <p>
                A Kundli, also called a Kundali, is a unique astrological chart
                that provides insights into your life events, personality, and
                destiny.
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
              <img
                src={kundliFormImg}
                alt="kundli"
                className="form-image-kundli"
              />
              <div className="form-title-kundli">Enter your Kundli Details</div>
              <form>
                <div className="form-row">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Gender</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Date of Birth</label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Time of Birth</label>
                    <input
                      type="time"
                      name="tob"
                      value={formData.tob}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Select Birth Place</label>
                  <input
                    type="text"
                    name="birthPlace"
                    value={formData.birthPlace}
                    onChange={handleChange}
                    placeholder="Select Place"
                  />
                </div>
                <button className="submit-btn">Get your Kundli Now</button>
                <button className="free-sample">
                  Free 86 Pages Kundli Sample
                </button>
              </form>
            </div>
          </div>
          <div>
            <div className="sample-kundli-title">View Sample Kundli</div>
            <div>
              Now you can easily download an 86-page detailed kundli from our
              website. To do this, first log in, then go to the Kundali module
              and enter your birth details. After entering the details, click on
              the 'View and Download 86-Page Kundli' option. Once you click,
              your entered birth details will be displayed. Carefully verify
              that the birth details you have provided are correct. After
              verification, click on the 'Choose Language' option above the
              birth details and select the language in which you wish to
              download your kundli. Then click on the 'Download' option. Next,
              check the box below the email field, choose your payment method,
              and within moments, your complete detailed kundli will be
              available to you.
            </div>
            <div>
              <b>What is special about this horoscope?</b> <br />
              This horoscope not only analyzes your current situation but also
              guides your future. 
              <br />
              Here are the 11 keys insights you will find in this horoscope:{" "}
              <br />
              Discover which Yoga is present in your horoscope and how it can
              transform your life.
              <br /> Find out which planets in your horoscope will brighten your
              destiny and which ones may create obstacles.
              <br /> According to your horoscope, learn which gemstone can
              change your fortune.
              <br /> Know which colour and number will bring you success at
              every step. <br />
              Does your horoscope have Kaal Sarp Dosha? Understand its impact
              and the right remedies. <br />
              Are you Manglik? Learn about its effects and solutions.
              <br /> Is Pitra Dosha present in your horoscope? Find out how to
              identify and resolve it.
              <br /> Are you under the influence of Sade Sati? Learn ways to
              overcome its effects. <br />
              Which Dasha is creating favourable or challenging times for you?
              Find out.
              <br /> Your horoscope reveals the secrets of your future—when and
              how your destiny will shine.
              <br /> Is there a yoga for a government job in your horoscope?
              Discover the key to success.
            </div>
          </div>
          <div className="panditJi-banner">
            <div className="pandit-banner-title">
              Our Expert Panel - Your Guidance, Our Commitment
            </div>
            <p className="pandit-banner-desc">
              Sanatan Jyoti’s experienced Acharyas and Pandits are always ready
              to provide solutions to your life’s problems and offer appropriate
              guidance. Our panel consists of Acharyas and Pandits who possess
              expertise and profound experience in Vedic astrology,
              rituals-Anushthan, Kundali matching, planetary dosha remedies, and
              spiritual consultations. Whether you need guidance about your
              future, information about a specific ritual-Anushthan or puja, or
              wish to have it performed, our experts will cater to all your
              needs. Connect with Sanatan Jyoti and reap the benefits of Vedic
              wisdom.
            </p>

            <div className="">
              <div className="card-list1">
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className="card1"
                    onClick={() => handleCardClick(card)}
                  >
                    <div className="card-inner1">
                      <div className="card-front1">
                        <img
                          src={card.image}
                          alt={card.name}
                          className="card-image1"
                        />
                        <div className="card-info1">
                          <img
                            src={rightArrow}
                            className="card-button1"
                            alt="Arrow"
                          />
                          <h3 className="card-name1">
                            <b>{card.name}</b>
                          </h3>
                          <p className="card-experience1">{card.experience}</p>
                        </div>
                      </div>
                      <div className="card-back1">
                        <p className="card-description1">{card.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="anushthan-form desktop-visible">
          <img src={kundliFormImg} alt="kundli" className="form-image-kundli" />
          <div className="form-title-kundli">Enter your Kundli Details</div>
          <form>
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Time of Birth</label>
                <input
                  type="time"
                  name="tob"
                  value={formData.tob}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Select Birth Place</label>
              <input
                type="text"
                name="birthPlace"
                value={formData.birthPlace}
                onChange={handleChange}
                placeholder="Select Place"
              />
            </div>
            <button className="submit-btn">Get your Kundli Now</button>
            <button className="free-sample">Free 86 Pages Kundli Sample</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Kundli;
