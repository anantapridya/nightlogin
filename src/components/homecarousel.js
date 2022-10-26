import React from "react";
import memberphoto from "../assets/images/memberphoto.png";
import quote from "../assets/images/quote.svg";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HomeCarousel() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div
              class="carousel slide"
              data-ride="carousel"
              id="quote-carousel"
            >
              <ul className="carousel-indicators h-[130px] text-center w-auto mx-0 items-center gap-x-8">
                <li data-target="#quote-carousel" data-slide-to="0">
                  <img class="img-responsive" src={memberphoto} alt="" />
                </li>
                <li
                  data-target="#quote-carousel"
                  data-slide-to="1"
                  class="active"
                >
                  <img class="img-responsive" src={memberphoto} alt="" />
                </li>
                <li data-target="#quote-carousel" data-slide-to="2">
                  <img class="img-responsive" src={memberphoto} alt="" />
                </li>
              </ul>
              <div class="carousel-inner text-center">
                <div class="item ">
                  <blockquote>
                    <div class="row  justify-center">
                      <div class="col-sm-8 col-sm-offset-2 m-0 h-[200px] w-[80px]">
                        <p className="font-poppins text-2xl font-bold m-0">
                          Kim Minjin
                        </p>
                        <p className="font-poppins text-[#D62340] m-0">
                          Member of NUXC
                        </p>
                        <img src={quote} className="inline-flex my-[10px]"></img>
                        <p className="text-poppins text-2xl font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At consectetur molestie etiam eget.
                        </p>
                      </div>
                    </div>
                  </blockquote>
                </div>
                <div class="item active">
                  <blockquote>
                    <div class="row  justify-center">
                      <div class="col-sm-8 col-sm-offset-2 m-0 h-[200px] w-[80px]">
                        <p className="font-poppins text-2xl font-bold m-0">
                          Kim Minjin
                        </p>
                        <p className="font-poppins text-[#D62340] m-0">
                          Member of NUXC
                        </p>
                        <img src={quote} className="inline-flex my-[10px]"></img>
                        <p className="text-poppins text-2xl font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At consectetur molestie etiam eget.
                        </p>
                      </div>
                    </div>
                  </blockquote>
                </div>
                <div class="item">
                  <blockquote>
                    <div class="row  justify-center">
                      <div class="col-sm-8 col-sm-offset-2 m-0 h-[200px] w-[80px]">
                        <p className="font-poppins text-2xl font-bold m-0">
                          Kim Minjin
                        </p>
                        <p className="font-poppins text-[#D62340] m-0">
                          Member of NUXC
                        </p>
                        <img src={quote} className="inline-flex my-[10px]"></img>
                        <p className="text-poppins text-2xl font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At consectetur molestie etiam eget.
                        </p>
                      </div>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
