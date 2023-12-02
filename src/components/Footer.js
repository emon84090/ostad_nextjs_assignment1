import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <section id="footer" className="bg-titlecolor text-white">
        <div className="container mx-auto">
          <div className="footer-all grid grid-3 gap-32">
            <div className="f-item">
              <h2 className="font-bold text-4xl uppercase mb-2">WEB LOGO</h2>
              <p className="my-4">
                Some footer text about the Agency. Just a little description to
                help people understand you better
              </p>
              <div className="footer-social mt-5 flex space-x-3">
                <div className="social-item w-10 h-10 flex-center bg-maincolor text-white rounded-full">
                  <i class="bx bxl-facebook text-xl"></i>
                </div>
                <div className="social-item flex-center w-10 h-10 bg-maincolor text-white rounded-full">
                  <i class="bx bxl-twitter text-xl"></i>
                </div>
                <div className="social-item w-10 h-10 flex-center bg-maincolor text-white rounded-full">
                  <i class="bx bxl-linkedin text-xl"></i>
                </div>
                <div className="social-item w-10 h-10 bg-maincolor text-white rounded-full flex-center">
                  <i class="bx bxl-instagram-alt text-xl"></i>
                </div>
              </div>
            </div>
            <div className="f-item">
              <h2 className="font-semibold text-xl uppercase mb-2">
                Our Works
              </h2>

              <div className="footer-list mt-5 flex flex-col space-y-5">
                <div className="item">
                  <Link className="text-base capitalize" href="/">
                    Services
                  </Link>
                </div>
                <div className="item">
                  <Link className="text-base capitalize" href="/">
                    Portfolio
                  </Link>
                </div>
                <div className="item">
                  <Link className="text-base capitalize" href="/">
                    About Us
                  </Link>
                </div>
                <div className="item">
                  <Link className="text-base capitalize" href="/">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="f-item">
              <h2 className="font-semibold text-xl uppercase mb-2">Address</h2>

              <p>
                Design Agency Head Office.<br></br> Airport Road <br></br>{" "}
                United Arab Emirate
              </p>
            </div>
          </div>
          <div className="footer-bottom mt-16">
            <h3 className="text-xl font-medium capitalize">
              Copyright Design Agency 2022
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
