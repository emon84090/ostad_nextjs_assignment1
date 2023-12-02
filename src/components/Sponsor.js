import React from "react";

const Sponsor = () => {
  return (
    <>
      <div className="Sponr bg-white  mb-5 py-9">
        <div className="container mx-auto">
          <div className="sponsor-all grid grid-cols-5 gap-5 ">
            <div className="items">
              <img
                className="w-[88px]"
                src="company_icon/logos_google.png"
              ></img>
            </div>
            <div className="items">
              <img
                className="w-[88px]"
                src="company_icon/Trello-logo-blue 1.png"
              ></img>
            </div>
            <div className="items">
              <img
                className="w-[88px]"
                src="company_icon/logos_monday.png"
              ></img>
            </div>
            <div className="items">
              <img className="w-[88px]" src="company_icon/Notion.png"></img>
            </div>
            <div className="items">
              <img className="w-[88px]" src="company_icon/Slack.png"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsor;
