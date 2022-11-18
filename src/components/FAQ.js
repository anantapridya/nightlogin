import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import asset1 from "../assets/images/home7.svg";
import asset2 from "../assets/images/home9.svg";

export default function FAQ() {
  return (
    <div className=" flex flex-col justify-between bg-[#2E2E2E] pb-[50px] md:pb-[120px]">
      <div className="bg-white">
        <img src={asset1} className="w-[200px] md:w-auto"></img>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 justify-center mb-[80px] mt-[40px]">
          <img src={asset2} className="w-[40px] md:w-auto"></img>
          <p className="font-poppins font-bold text-white text-[30px] mb-0 md:text-6xl">
            FAQ
          </p>
          <img src={asset2} className="w-[40px] md:w-auto"></img>
        </div>
      </div>
      <div className="mx-[20px] md:mx-[90px] rounded-[40px] bg-white ">
        <Disclosure as="div" className="mb-[10px]">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between items-center gap-x-3 rounded-[99px] font-poppins bg-merah px-5 py-4 text-left text-sm font-medium text-white ">
                <span className=" text-[12px] md:text-[16px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : " -rotate-90"
                  } h-12 w-12 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-5 pt-10 pb-2 text-black text-[12px] md:text-[16px] font-poppins bg-white text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper tincidunt aliquam habitant a malesuada. Non eget congue nec sit egestas. Tincidunt sed donec tellus blandit gravida. Cras pharetra consectetur nec ullamcorper ornare vel amet. Viverra enim amet, orci nunc cursus. Erat pellentesque mi imperdiet tristique sit fringilla nulla diam, vulputate. Et morbi nunc, dictum ut egestas et dolor, sed malesuada.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mb-[10px]">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between items-center gap-x-3 rounded-[99px] font-poppins bg-merah px-5 py-4 text-left text-sm font-medium text-white ">
                <span className="text-[12px] md:text-[16px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : "-rotate-90"
                  } h-12 w-12 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-5 pt-10 pb-2 text-black text-[12px] md:text-[16px] font-poppins bg-white text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper tincidunt aliquam habitant a malesuada. Non eget congue nec sit egestas. Tincidunt sed donec tellus blandit gravida. Cras pharetra consectetur nec ullamcorper ornare vel amet. Viverra enim amet, orci nunc cursus. Erat pellentesque mi imperdiet tristique sit fringilla nulla diam, vulputate. Et morbi nunc, dictum ut egestas et dolor, sed malesuada.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mb-[10px]">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between items-center gap-x-3 rounded-[99px] font-poppins bg-merah px-5 py-4 text-left text-sm font-medium text-white ">
                <span className="text-[12px] md:text-[16px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : "-rotate-90"
                  } h-12 w-12 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-5 pt-10 pb-2 text-black text-[12px] md:text-[16px] font-poppins bg-white text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper tincidunt aliquam habitant a malesuada. Non eget congue nec sit egestas. Tincidunt sed donec tellus blandit gravida. Cras pharetra consectetur nec ullamcorper ornare vel amet. Viverra enim amet, orci nunc cursus. Erat pellentesque mi imperdiet tristique sit fringilla nulla diam, vulputate. Et morbi nunc, dictum ut egestas et dolor, sed malesuada.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mb-[10px]">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between items-center gap-x-3 rounded-[99px] font-poppins bg-merah px-5 py-4 text-left text-sm font-medium text-white ">
                <span className="text-[12px] md:text-[16px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : "-rotate-90"
                  } h-12 w-12 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-5 pt-10 pb-2 text-black text-[12px] md:text-[16px] font-poppins bg-white text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper tincidunt aliquam habitant a malesuada. Non eget congue nec sit egestas. Tincidunt sed donec tellus blandit gravida. Cras pharetra consectetur nec ullamcorper ornare vel amet. Viverra enim amet, orci nunc cursus. Erat pellentesque mi imperdiet tristique sit fringilla nulla diam, vulputate. Et morbi nunc, dictum ut egestas et dolor, sed malesuada.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mb-[10px]">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between items-center gap-x-3 rounded-[99px] font-poppins bg-merah px-5 py-4 text-left text-sm font-medium text-white ">
                <span className="text-[12px] md:text-[16px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : "-rotate-90"
                  } h-12 w-12 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-5 pt-10 pb-2 text-black text-[12px] md:text-[16px] font-poppins bg-white text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper tincidunt aliquam habitant a malesuada. Non eget congue nec sit egestas. Tincidunt sed donec tellus blandit gravida. Cras pharetra consectetur nec ullamcorper ornare vel amet. Viverra enim amet, orci nunc cursus. Erat pellentesque mi imperdiet tristique sit fringilla nulla diam, vulputate. Et morbi nunc, dictum ut egestas et dolor, sed malesuada.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between items-center gap-x-3 rounded-[99px] font-poppins bg-merah px-5 py-4 text-left text-sm font-medium text-white ">
                <span className="text-[12px] md:text-[16px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : "-rotate-90"
                  } h-12 w-12 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-5 pt-10 pb-5 text-black text-[12px] md:text-[16px] font-poppins text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper tincidunt aliquam habitant a malesuada. Non eget congue nec sit egestas. Tincidunt sed donec tellus blandit gravida. Cras pharetra consectetur nec ullamcorper ornare vel amet. Viverra enim amet, orci nunc cursus. Erat pellentesque mi imperdiet tristique sit fringilla nulla diam, vulputate. Et morbi nunc, dictum ut egestas et dolor, sed malesuada.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        
        </div>
    </div>
  );
}
