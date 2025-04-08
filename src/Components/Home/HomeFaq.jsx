import React, { useState } from "react";
import "./faq.css";
const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="row">
      <div className="col-sm-3"></div>
      <div className="col-sm-6 col-lg-6 col-md-6">
        <div className="accordion-container">
          <h2>
            <b> Frequently Asked Questions </b>
          </h2>

          <div
            className={`accordion-item ${activeIndex === 0 ? "active" : ""}`}
            onClick={() => toggleAccordion(0)}
          >
            <div className="accordion-header">
              <span>Q. What is Astrology?</span>
              <span className="accordion-icon">
                {activeIndex === 0 ? "-" : "+"}
              </span>
            </div>
            {activeIndex === 0 && (
              <div className="accordion-content">
                Astrology is an ancient Vedic science
                <br />
                It is not just about knowing your destiny
              </div>
            )}
          </div>

          <div
            className={`accordion-item ${activeIndex === 1 ? "active" : ""}`}
            onClick={() => toggleAccordion(1)}
          >
            <div className="accordion-header">
              <span>Q. How Astrology Consultation helps me?</span>
              <span className="accordion-icon">
                {activeIndex === 1 ? "-" : "+"}
              </span>
            </div>
            {activeIndex === 1 && (
              <div className="accordion-content">
                Astrological consultation is a helpful
                <br />
                In times of doubt or challenges
                <br />
                This process brings positivity and confidence
              </div>
            )}
          </div>

          <div
            className={`accordion-item ${activeIndex === 2 ? "active" : ""}`}
            onClick={() => toggleAccordion(2)}
          >
            <div className="accordion-header">
              <span>
                Q. What is the best question to be asked to an Astrologer?
              </span>
              <span className="accordion-icon">
                {activeIndex === 2 ? "-" : "+"}
              </span>
            </div>
            {activeIndex === 2 && (
              <div className="accordion-content">
                When consulting an astrologer
                <br />
                <ul>
                  <li>How can I achieve stability and growth in my career?</li>
                  <li>When is the best time and direction for my marriage?</li>
                  <li>What can I do to improve and stabilize my finances?</li>
                  <li>
                    "Are there remedies to prevent or improve health issues? "
                  </li>
                  <li>
                    "Is now a good time for property deals or investments? "
                  </li>
                  <li> What steps will help my business succeed? </li>
                  <li>
                    "Does my horoscope show any dosha (defect)? If yes, how can
                    I fix it? "
                  </li>
                </ul>
                Asking clear and focused questions helps
                <b />
              </div>
            )}
          </div>
          <div
            className={`accordion-item ${activeIndex === 3 ? "active" : ""}`}
            onClick={() => toggleAccordion(3)}
          >
            <div className="accordion-header">
              <span>Q. What is better Astrology, Palmistry or Numerology?</span>
              <span className="accordion-icon">
                {activeIndex === 3 ? "-" : "+"}
              </span>
            </div>
            {activeIndex === 3 && (
              <div className="accordion-content">
                "Astrology, palmistry, and numerology are ancient sciences that
                help us understand life in unique ways: "
                <br />
                <ul>
                  <li>
                    <div style={{ display: "flex" }}>
                      <b> Astrology </b>{" "}
                      <p> studies the positions of planets </p>
                    </div>
                  </li>
                  <li>
                    <div style={{ display: "flex" }}>
                      <b> Palmistry : </b> <p> examines the lines </p>
                    </div>
                  </li>
                  <li>
                    <div style={{ display: "flex" }}>
                      <b> Numerology : </b> <p> focuses on numbers linked </p>
                    </div>
                  </li>
                </ul>
                The best choice depends on your needs
                <b />
              </div>
            )}
          </div>
          <div
            className={`accordion-item ${activeIndex === 4 ? "active" : ""}`}
            onClick={() => toggleAccordion(4)}
          >
            <div className="accordion-header">
              <span>
                Q. "How much time an Astrologer requires prediction in vedic
                Astrology? "
              </span>
              <span className="accordion-icon">
                {activeIndex === 4 ? "-" : "+"}
              </span>
            </div>
            {activeIndex === 4 && (
              <div className="accordion-content">
                "The time needed for predictions in Vedic astrology depends on
                the complexity of the question. "
                <br />
                <ul>
                  <li>
                    "For simple questions, an astrologer can give answers in a
                    few minutes. "
                  </li>
                  <li> For complex issues, like analyzing planetary </li>
                </ul>
                Accurate predictions require a deep study
                <b />
              </div>
            )}
          </div>
          <div
            className={`accordion-item ${activeIndex === 5 ? "active" : ""}`}
            onClick={() => toggleAccordion(5)}
          >
            <div className="accordion-header">
              <span>Q. What if I don’t know my birthday and birth time?</span>
              <span className="accordion-icon">
                {activeIndex === 5 ? "-" : "+"}
              </span>
            </div>
            {activeIndex === 5 && (
              <div className="accordion-content">
                If you are unaware of your date and time of birth
                <br />
                This method not only provides solutions
                <b />
              </div>
            )}
          </div>
          <div
            className={`accordion-item ${activeIndex === 6 ? "active" : ""}`}
            onClick={() => toggleAccordion(6)}
          >
            <div className="accordion-header">
              <span>Q. Can we plan our future with the help of Astrology?</span>
              <span className="accordion-icon">
                {activeIndex === 6 ? "-" : "+"}
              </span>
            </div>
            {activeIndex === 6 && (
              <div className="accordion-content">
                Yes, astrology can be a powerful tool
                <br />
                Astrological consultations help
                <br />
                Astrology not only clarifies
              </div>
            )}
          </div>
          <div
            className={`accordion-item ${activeIndex === 7 ? "active" : ""}`}
            onClick={() => toggleAccordion(7)}
          >
            <div className="accordion-header">
              <span>
                Q. "What’s the difference between an “astrologer” and an
                “astrologist?” "
              </span>
              <span className="accordion-icon">
                {activeIndex === 7 ? "-" : "+"}
              </span>
            </div>
            {activeIndex === 7 && (
              <div className="accordion-content">
                The terms Astrologer
                <br />
                An Astrologer is someone who studies
                <br />
                An Astrologist has a deeper level of expertise
                <br />
                In summary, all Astrologists
              </div>
            )}
          </div>
          <div
            className={`accordion-item ${activeIndex === 8 ? "active" : ""}`}
            onClick={() => toggleAccordion(8)}
          >
            <div className="accordion-header">
              <span>Q. How do I choose an astrologer?</span>
              <span className="accordion-icon">
                {activeIndex === 8 ? "-" : "+"}
              </span>
            </div>
            {activeIndex === 8 && (
              <div className="accordion-content">
                Choosing a good astrologer
                <br />
                <ol>
                  <li>
                    <b> Experience and Expertise </b>
                    <ul>
                      <li> Inquire about </li>
                      <li>
                        "Assess their expertise in specific areas, such as
                        career, marriage, education, or health consultations. "
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b> Authenticity Check </b>
                    <ul>
                      <li>
                        "Ensure that the astrologer has received education in
                        astrology from a recognized institution. "
                      </li>
                      <li>
                        "Verify any documents or certificates that validate
                        their knowledge and qualifications. "
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b> Reviews and Testimonials </b>
                    <ul>
                      <li>
                        "Seek feedback from those who have previously consulted
                        with the astrologer. "
                      </li>
                      <li>
                        "Pay attention to online reviews and their reputation in
                        the community. "
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b> Personal Qualities </b>
                    <ul>
                      <li>
                        "A good astrologer should listen to your problems
                        attentively. "
                      </li>
                      <li>
                        "They should provide rational solutions and avoid
                        promoting superstitions. "
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b> Communication and Transparency </b>
                    <ul>
                      <li> The astrologers </li>
                      <li>
                        "They should offer practical and personalized solutions
                        for your problems. "
                      </li>
                    </ul>
                  </li>
                </ol>
                "By keeping these factors in mind, you can select an experienced
                and trustworthy astrologer. "
                <br />
              </div>
            )}
          </div>
          <div
            className={`accordion-item ${activeIndex === 9 ? "active" : ""}`}
            onClick={() => toggleAccordion(9)}
          >
            <div className="accordion-header">
              <span>Q. How do online astrology consultations work?</span>
              <span className="accordion-icon">
                {activeIndex === 9 ? "-" : "+"}
              </span>
            </div>
            {activeIndex === 9 && (
              <div className="accordion-content">
                Online astrological consultation is a convenient
                <br />
                The astrologer studies the details you provide
                <br />
                The main benefit of online consultations
                <b />
                Online astrological consultation is a simple
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="col-sm-3 "></div>
    </div>
  );
};

export default Accordion;
