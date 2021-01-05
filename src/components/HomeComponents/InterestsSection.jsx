import React, { useState } from "react";
import { Fade } from "react-reveal";

const InterestsSection = () => {
  const [breakingPercent, setBreakingPercent] = useState(0);
  const [kpopPercent, setKpopPercent] = useState(0);
  const [photoPercent, setPhotoPercent] = useState(0);
  const [singPercent, setSingPercent] = useState(0);

  const interests = [
    {
      type: 1,
      percentage: breakingPercent,
      text: "Breakdance",
    },
    {
      type: 2,
      percentage: kpopPercent,
      text: "K-pop",
    },
    {
      type: 3,
      percentage: photoPercent,
      text: "Photography",
    },
    {
      type: 4,
      percentage: singPercent,
      text: "Singing & Rapping",
    },
  ];

  function handleAnimateInterests(interestType) {
    if (interestType === 1) {
      setBreakingPercent((prevPercent) => prevPercent + 100);
    } else if (interestType === 2) {
      setKpopPercent((prevPercent) => prevPercent + 100);
    } else if (interestType === 3) {
      setPhotoPercent((prevPercent) => prevPercent + 70);
    } else if (interestType === 4) {
      setSingPercent((prevPercent) => prevPercent + 60);
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
        <div className="row all-center">
          {interests.map((interest) => (
            <div
              className="InterestCard | col-lg-3 all-center text-center position-relative overflow-hidden"
              key={interest.type}
            >
              <Fade
                onReveal={() => {
                  handleAnimateInterests(interest.type);
                }}
              >
                <div className="all-center-column">
                  <div className="PercentContainer | position-relative">
                    <svg className="position-relative">
                      <circle cx="70" cy="70" r="70" />
                      <circle
                        className="w-100 h-100"
                        style={{
                          strokeDashoffset: interest.percentage
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
                        {interest.percentage ? interest.percentage : 0}%
                      </div>
                    </div>
                  </div>

                  <div className="InterestText | mt-3">{interest.text}</div>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
