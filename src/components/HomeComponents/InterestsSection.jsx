import React from "react";

const InterestsSection = () => {
  const interests = [
    {
      percentage: 100,
      text: "Breakdance",
    },
    {
      percentage: 100,
      text: "K-pop",
    },
    {
      percentage: 70,
      text: "Photography",
    },
    {
      percentage: 60,
      text: "Singing & Rapping",
    },
  ];

  return (
    <section className="InterestsSection | pt-5" id="interests">
      <div className="container my-sm-5 mb-sm-0 mb-5">
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
              key={interest.text}
            >
              <div className="all-center-column">
                <div className="PercentContainer | position-relative">
                  <svg className="position-relative">
                    <circle cx="70" cy="70" r="70" />
                    <circle
                      className="w-100 h-100"
                      style={{
                        strokeDashoffset:
                          440 - (440 * interest.percentage) / 100,
                      }}
                      cx="70"
                      cy="70"
                      r="70"
                    />
                  </svg>
                  <div className="Percent | position-absolute all-center w-100 h-100">
                    <div className="Percent__Text | m-0">
                      {interest.percentage}%
                    </div>
                  </div>
                </div>

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
