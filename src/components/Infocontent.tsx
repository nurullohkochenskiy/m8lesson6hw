import React from "react";

const Infocontent: React.FC = () => {
  return (
    <div className="main flex gap-[6%]">
      <div>
        <img src="https://flagcdn.com/w320/us.png" width={560} alt="pic" />
      </div>
      <div className="my-12 infos-wrapper">
        <div className="name">United States</div>
        <div className="infos">
          <div>
            <div>
              Population: <span>329,484,123</span>
            </div>
            <div>
              Region: <span>Americas</span>
            </div>
            <div>
              Sub Region: <span>North America</span>
            </div>
          </div>
          <div>
            <div>
              Capital: <span>Washington, D.C.</span>
            </div>
            <div>
              Top Level Domain: <span>.us</span>
            </div>
            <div>
              Languages: <span>English</span>
            </div>
          </div>
        </div>
        <div className="font-bold">
          Border Countries: <span className="font-normal">CAN, MEX</span>
        </div>
      </div>
    </div>
  );
};

export default Infocontent;
