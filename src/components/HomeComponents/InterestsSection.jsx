import React from "react";

const InterestsSection = () => {
  const interests = [
    {
      percentage: 100,
      text: "K-pop",
    },
    {
      percentage: 100,
      text: "Breakdance",
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
      <div className="container my-sm-5">
        {/* title */}
        <div className="mb-lg-4 mb-3 pb-4 text-center">
          <h2 className="m-0">My Interests</h2>
          <hr className="titleLine" />
        </div>

        {/* content */}
        {interests.map((interest) => (
          <div
            className="InterestCard | all-center text-center position-relative overflow-hidden"
            key={interest.text}
          >
            <div>
              <div className="PercentContainer | position-relative">
                <svg className="position-relative">
                  <circle cx="70" cy="70" r="70" />
                  <circle
                    className="w-100 h-100"
                    style={{
                      strokeDashoffset: 440 - (440 * interest.percentage) / 100,
                    }}
                    cx="70"
                    cy="70"
                    r="70"
                  />
                </svg>
                <div className="Percent | position-absolute all-center w-100 h-100">
                  <h2 className="m-0">
                    {interest.percentage}
                    <span>%</span>
                  </h2>
                </div>
              </div>

              <h4 className="mt-3">{interest.text}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InterestsSection;
