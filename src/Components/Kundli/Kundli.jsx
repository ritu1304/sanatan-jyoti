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
          <div className="container">
            <center>
              <div className="title">
                What is a Janam Kundli (Birth Chart) ? 
              </div>
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
