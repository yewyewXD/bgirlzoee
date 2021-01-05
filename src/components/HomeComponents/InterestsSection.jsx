import React from "react";

const InterestsSection = () => {
  return (
    <section className="InterestsSection | pt-5" id="interests">
      <div className="container my-sm-5">
        {/* title */}
        <div className="mb-lg-4 mb-3 pb-4 text-center">
          <h2 className="m-0">My Interests</h2>
          <hr className="titleLine" />
        </div>

        {/* content */}
        <div className="CardContainer | all-center text-center position-relative overflow-hidden">
          <div>
            <div className="PercentContainer | position-relative">
              <svg className="position-relative">
                <circle cx="70" cy="70" r="70"></circle>
                <circle
                  className="w-100 h-100"
                  style={{
                    strokeDashoffset: 440 - (440 * 90) / 100,
                  }}
                  cx="70"
                  cy="70"
                  r="70"
                ></circle>
              </svg>
              <div className="Percent | position-absolute all-center w-100 h-100">
                <h2 className="m-0">
                  90<span>%</span>
                </h2>
              </div>
            </div>

            <h4 className="mt-3">interest 1</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
