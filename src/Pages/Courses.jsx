import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import SideBar from "../components/SideBar";
import CoursesCard from "./CoursesCard";

export default function Courses() {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/courses")
      .then((response) => {
        setCourse(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  console.log(course);
  return (
    <div style={{ display: "flex" }}>
      <div>
        <SideBar />
      </div>

      <div className="w-[1284px] h-[1024px] py-[24px] px-[36px] flex flex-col gap-[32px]">
        <p className="font-nunitoSans text-[#83858B] text-[28px] font-[700] leading-[38.19px]">
          Courses
        </p>

        <div className="w-[1212px] h-[427px] flex flex-col gap-[16px]">
          <div className="w-[1212px] h-[32px] flex justify-between">
            <p className="text-[#83858B] tracking-[0.4px] leading-[21.82px] font-nunitoSans font-[700] text-[16px]">
              COURSE LIST
            </p>
            <div className="w-[223px] h-[32px] rounded-[4px] border border-[#E5E7EB] bg-[#FFFFFF] p-[8px] flex gap-[8px] ">
              <AiOutlineSearch size={"16px"} color="#83858B" />

              <input
                type="search"
                placeholder="Search"
                className="w-[183px] h-[16px] border-0 font-nunitoSans text-[#83858B] text-[12px] font-[400] leading-[16.37px] focus:ring-0"
              />
            </div>
          </div>

          <div className="w-[1212px] h-[499px] rounded-[6px] p-[24px] bg-[#FFFFFF]">
            <CoursesCard courseData={course} />
          </div>
        </div>
      </div>
    </div>
  );
}
