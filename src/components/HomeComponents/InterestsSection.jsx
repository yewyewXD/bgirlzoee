import React, { useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

const InterestsSection = () => {
  const [showInterest1, setShowInterest1] = useState(false);
  const [showInterest2, setShowInterest2] = useState(false);
  const [showInterest3, setShowInterest3] = useState(false);
  const [showInterest4, setShowInterest4] = useState(false);

  const interests = [
    {
      type: 1,
      percentage: 100,
      text: "Breakdance",
      show: showInterest1,
    },
    {
      type: 2,
      percentage: 100,
      text: "K-pop",
      show: showInterest2,
    },
    {
      type: 3,
      percentage: 70,
      text: "Photography",
      show: showInterest3,
    },
    {
      type: 4,
      percentage: 60,
      text: "Singing & Rapping",
      show: showInterest4,
    },
  ];

  function handleAnimateInterests(isVisible, interestType) {
    if (interestType === 1) {
      setShowInterest1(isVisible);
    } else if (interestType === 2) {
      setShowInterest2(isVisible);
    } else if (interestType === 3) {
      setShowInterest3(isVisible);
    } else if (interestType === 4) {
      setShowInterest4(isVisible);
    }
  }

  return (
    <section className="InterestsSection | pt-5" id="interests">
      <div className="container my-sm-5 mb-5">
        {/* title */}
        <div className="text-center">
          <h2 className="m-0">My Interests</h2>
          <hr className="titleLine" />
        </div>

        {/* content */}
        <div className="row all-center" data-aos="fade-up">
          {interests.map((interest) => (
            <div
              className="InterestCard | col-lg-3 all-center text-center position-relative overflow-hidden"
              key={interest.type}
            >
              <div className="all-center-column">
                <ReactVisibilitySensor
                  partialVisibility={true}
                  onChange={(isVisible) => {
                    handleAnimateInterests(isVisible, interest.type);
                  }}
                >
                  <div className="PercentContainer | position-relative">
                    <svg className="position-relative">
                      <circle cx="70" cy="70" r="70" />
                      <circle
                        className="w-100 h-100"
                        style={{
                          strokeDashoffset: interest.show
                            ? 440 - (440 * interest.percentage) / 100
                            : 440,
                        }}
                        cx="70"
                        cy="70"
                        r="70"
                      />
                    </svg>
                    <div className="Percent | position-absolute all-center w-100 h-100">
                      <div className="Percent__Text | m-0">
                        {interest.show && (
                          <>
                            <CountUp end={interest.percentage} duration={2} />%
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </ReactVisibilitySensor>

                <div className="InterestText | mt-3">{interest.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
