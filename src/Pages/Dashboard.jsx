// import React from "react";
import SideBar from "../components/SideBar";
import axios from "axios";
import { MdPeople } from "react-icons/md";

export default function Dashboard() {
  //   const [enrData, setEnrData] = useState([]);
  //   const [bestStudentData, setBestStudentData] = useState([]);

  // Make a GET request using axios
  axios
    .get("http://localhost:3000/bestStudents")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return (
    <div style={{ display: "flex" }}>
      <div>
        <SideBar />
      </div>
      <div className="w-[1284px] h-[1024px] py-[24px] px-[36px] flex flex-col gap-[32px]">
        {/* Heading Overview */}
        <p className="font-nunitoSans text-[#83858B] text-[28px] font-[700] leading-[38.9px]">
          Overview
        </p>

        <div className="w-[1212px] h-[98px] flex flex-row justify-between">
          <div className="w-[232px] h-[98px] bg-[#FFFFFF] flex items-center justify-center">
            <div className="w-[200px] h-[66px] flex flex-col gap-[8px]">
              <div className="w-[182px] h-[46px] flex flex-row gap-[16px] items-center">
                <div className="w-[32px] h-[32px] rounded-[24px] bg-[#B2EECF] relative">
                  <div className="absolute top-[10px] left-[6px]">
                    <MdPeople size={"20px"} />
                  </div>
                </div>
                <div className="w-[134px] h-[46px]">
                  <div className="w-[40px] h-[30px]">
                    <p className="font-nunitoSans text-[#212529] text-[22px] font-[400] leading-[30.02px]">
                      164
                    </p>
                  </div>
                  <div className="w-[134px] h-[16px]">
                    <p className="font-nunitoSans text-[#83858B] text-[12px] font-[400] leading-[16.37px]">
                      total no. of students
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[200px] h-[12px] flex justify-end">
                <p className="font-nunitoSans text-[#B33086] text-[9px] font-[400] leading-[12.28px]">
                  View
                </p>
              </div>
            </div>
          </div>
          <div className="w-[232px] h-[98px] bg-[#FFFFFF] flex items-center justify-center">
            <div className="w-[200px] h-[66px] flex flex-col gap-[8px]">
              <div className="w-[182px] h-[46px] flex flex-row gap-[16px] items-center">
                <div className="w-[32px] h-[32px] rounded-[24px] bg-[#B2EECF] relative">
                  <div className="absolute top-[10px] left-[6px]">
                    <MdPeople size={"20px"} />
                  </div>
                </div>
                <div className="w-[134px] h-[46px]">
                  <p className="font-nunitoSans text-[#212529] text-[22px] font-[400] leading-[30.02px]">
                    12
                  </p>

                  <div className="w-[134px] h-[16px]">
                    <p className="font-nunitoSans text-[#83858B] text-[12px] font-[400] leading-[16.37px]">
                      total no. of courses
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[200px] h-[12px] flex justify-end">
                <p className="font-nunitoSans text-[#B33086] text-[9px] font-[400] leading-[12.28px]">
                  View
                </p>
              </div>
            </div>
          </div>
          <div className="w-[232px] h-[98px] bg-[#FFFFFF] flex items-center justify-center">
            <div className="w-[200px] h-[66px] flex flex-col gap-[8px]">
              <div className="w-[182px] h-[46px] flex flex-row gap-[16px] items-center">
                <div className="w-[32px] h-[32px] rounded-[24px] bg-[#B2EECF] relative">
                  <div className="absolute top-[10px] left-[6px]">
                    <MdPeople size={"20px"} />
                  </div>
                </div>
                <div className="w-[134px] h-[46px]">
                  <p className="font-nunitoSans text-[#212529] text-[22px] font-[400] leading-[30.02px]">
                    $2000
                  </p>

                  <div className="w-[134px] h-[16px]">
                    <p className="font-nunitoSans text-[#83858B] text-[12px] font-[400] leading-[16.37px]">
                      total amount earned
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[200px] h-[12px] flex justify-end">
                <p className="font-nunitoSans text-[#B33086] text-[9px] font-[400] leading-[12.28px]">
                  View
                </p>
              </div>
            </div>
          </div>
          <div className="w-[232px] h-[98px] bg-[#FFFFFF] flex items-center justify-center">
            <div className="w-[200px] h-[66px] flex flex-col gap-[8px]">
              <div className="w-[182px] h-[46px] flex flex-row gap-[16px] items-center">
                <div className="w-[32px] h-[32px] rounded-[24px] bg-[#B2EECF] relative">
                  <div className="absolute top-[10px] left-[6px]">
                    <MdPeople size={"20px"} />
                  </div>
                </div>
                <div className="w-[134px] h-[46px]">
                  <p className="font-nunitoSans text-[#212529] text-[22px] font-[400] leading-[30.02px]">
                    Guitar
                  </p>

                  <div className="w-[134px] h-[16px]">
                    <p className="font-nunitoSans text-[#83858B] text-[12px] font-[400] leading-[16.37px]">
                      best performing course
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[200px] h-[12px] flex justify-end">
                <p className="font-nunitoSans text-[#B33086] text-[9px] font-[400] leading-[12.28px]">
                  View
                </p>
              </div>
            </div>
          </div>
          <div className="w-[232px] h-[98px] bg-[#FFFFFF] flex items-center justify-center">
            <div className="w-[200px] h-[66px] flex flex-col gap-[8px]">
              <div className="w-[182px] h-[46px] flex flex-row gap-[16px] items-center">
                <div className="w-[32px] h-[32px] rounded-[24px] bg-[#B2EECF] relative">
                  <div className="absolute top-[10px] left-[6px]">
                    <MdPeople size={"20px"} />
                  </div>
                </div>
                <div className="w-[134px] h-[46px]">
                  <p className="font-nunitoSans text-[#212529] text-[22px] font-[400] leading-[30.02px]">
                    Flute
                  </p>
                  <div className="w-[134px] h-[16px]">
                    <p className="font-nunitoSans text-[#83858B] text-[12px] font-[400] leading-[16.37px]">
                      worst performing course
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[200px] h-[12px] flex justify-end">
                <p className="font-nunitoSans text-[#B33086] text-[9px] font-[400] leading-[12.28px]">
                  View
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[1212px] h-[312px] flex flex-col gap-[16px]">
          <div className="w-[1212px] h-[22px] flex justify-between">
            <p className="text-[#83858B] tracking-[0.4px] leading-[21.82px] font-nunitoSans font-[700] text-[16px]">
              LATEST ENROLMENTS
            </p>
            <p className="font-nunitoSans text-[#901E75] text-[14px] font-[400] leading-[19.01px]">
              View All courses
            </p>
          </div>
          {/* Table-Div */}
          <div className="w-[1212px] h-[274px] rounded-[6px] p-[24px] gap-[16px] bg-[#FFFFFF]">
            {/* <LatestEnrolmentsTablecard enrData={enrData} /> */}
          </div>
        </div>

        {/* Second best Students table */}
        <div className="w-[1212px] h-[312px] flex flex-col gap-[16px]">
          {/* Titles-Div */}
          <div className="w-[1212px] h-[22px] flex justify-between">
            <p className="text-[#83858B] tracking-[0.4px] leading-[21.82px] font-nunitoSans font-[700] text-[16px]">
              BEST STUDENTS
            </p>
            <p className="font-nunitoSans text-[#901E75] text-[14px] font-[400] leading-[19.01px]">
              {" "}
              View All courses
            </p>
          </div>
          {/* Table-Div */}
          <div className="w-[1212px] h-[274px] rounded-[6px] p-[24px] flex gap-[16px] bg-[#FFFFFF]">
            {/* <BestStudentsTablecard bestStudentData={bestStudentData} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
