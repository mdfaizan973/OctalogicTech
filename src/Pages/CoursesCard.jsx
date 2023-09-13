import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function CoursesCard(courseData) {
  let course = courseData.courseData;
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div>
      <table className="w-[1164px] h-[451px] flex flex-col">
        <thead className="w-full">
          <tr className=" w-full flex justify-between h-[43px] items-center border-b border-[#E5E7EB] pt-[8px] pb-[16px]">
            <th className="w-[140px] font-nunitoSans line-clamp-1 font-[400] text-left text-[#212529] text-[14px] border-0 border-slate-100 leading-[19.1px]">
              Name
            </th>
            <th className="w-[140px] font-nunitoSans line-clamp-1 font-[400] text-left text-[#212529] text-[14px] border-0 border-slate-100 leading-[19.1px]">
              Description
            </th>
            <th className="w-[140px] font-nunitoSans line-clamp-1 font-[400] text-left text-[#212529] text-[14px] border-0 border-slate-100 leading-[19.1px]">
              Instructor
            </th>
            <th className="w-[140px] font-nunitoSans line-clamp-1 font-[400] text-left text-[#212529] text-[14px] border-0 border-slate-100 leading-[19.1px]">
              Instrument
            </th>
            <th className="w-[140px] font-nunitoSans line-clamp-1 font-[400] text-left text-[#212529] text-[14px] border-0 border-slate-100 leading-[19.1px]">
              Day of Week
            </th>
            <th className="w-[140px] font-nunitoSans line-clamp-1 font-[400] text-left text-[#212529] text-[14px] border-0 border-slate-100 leading-[19.1px]">
              No of Students
            </th>
            <th className="w-[140px] font-nunitoSans line-clamp-1 font-[400] text-left text-[#212529] text-[14px] border-0 border-slate-100 leading-[19.1px]">
              Price
            </th>
            <th className="w-[140px] font-nunitoSans line-clamp-1 font-[400] text-left text-[#212529] text-[14px] border-0 border-slate-100 leading-[19.1px]">
              Status
            </th>
            <th className="w-[50px] font-nunitoSans line-clamp-1 font-[700] text-left text-[#212529] text-[14px] border-0 border-slate-100 leading-[19.1px]">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {course &&
            course?.map((el, i) => (
              <tr
                key={i}
                className="flex justify-between w-full h-[40px] items-center py-[8px] border-b border-[#E5E7EB]"
              >
                <td className="w-[139.38px] text-left line-clamp-1 font-nunitoSans font-[400] text-[#212529] text-[14px] leading-[19.1px] border-0 border-slate-50">
                  {el.course_name}
                </td>
                <td className="w-[139.38px] text-left line-clamp-1 font-nunitoSans font-[400] text-[#212529] text-[14px] leading-[19.1px] border-0 border-slate-50">
                  {el.description}
                </td>
                <td className="w-[139.38px] text-left line-clamp-1 font-nunitoSans font-[400] text-[#212529] text-[14px] leading-[19.1px] border-0 border-slate-50">
                  {el.instructor_name}
                </td>
                <td className="w-[139.38px] text-left line-clamp-1 font-nunitoSans font-[400] text-[#212529] text-[14px] leading-[19.1px] border-0 border-slate-50">
                  {el.instrument}
                </td>
                <td className="w-[139.38px] text-left line-clamp-1 font-nunitoSans font-[400] text-[#212529] text-[14px] leading-[19.1px] border-0 border-slate-50">
                  {el.day_of_week}
                </td>
                <td className="w-[139.38px] text-left line-clamp-1 font-nunitoSans font-[400] text-[#212529] text-[14px] leading-[19.1px] border-0 border-slate-50">
                  {el.no_of_students}
                </td>
                <td className="w-[139.38px] text-left line-clamp-1 font-nunitoSans font-[400] text-[#212529] text-[14px] leading-[19.1px] border-0 border-slate-50">
                  {el.price}
                </td>
                <td className="w-[139.38px] text-left font-nunitoSans font-[400] text-[#212529] text-[14px] leading-[19.1px] border-0 border-slate-50">
                  {el.status === "Active" ? (
                    <p className=" w-[66px] font-nunitoSans font-[400] text-[#212529] text-[12px] leading-[19.1px] bg-[#CFF9DF] py-[4px] px-[16px] rounded-[4px] gap-[10px]">
                      {el.status}
                    </p>
                  ) : el.status === "Closed" ? (
                    <p className=" w-[70px] font-nunitoSans font-[400] text-[#212529] text-[12px] leading-[19.1px] bg-[#FEC0CA] py-[4px] px-[16px] rounded-[4px] gap-[10px]">
                      {el.status}
                    </p>
                  ) : (
                    <p className=" w-[80px] font-nunitoSans font-[400] text-[#212529] text-[12px] leading-[19.1px] bg-[#E5E7EB] py-[4px] px-[16px] rounded-[4px] gap-[10px]">
                      {el.status}
                    </p>
                  )}
                </td>
                <td className="w-[49px] flex justify-center items-center line-clamp-1 font-nunitoSans font-[400] text-[#212529] text-[14px] leading-[19.1px] border-0 border-slate-50">
                  {el.status === "Closed" ? (
                    <BsThreeDotsVertical color="#D1D5DB" />
                  ) : (
                    <BsThreeDotsVertical color="#83858B" />
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <div>
        <button
          className="mt-[300px] ml-[1000px] w-[120px] font-nunitoSans font-[600] text-[#212529] text-[14px] leading-[19.1px] bg-[#FEC0CA] py-[8px] px-[16px] rounded-[4px] gap-[10px]"
          onClick={togglePopup}
        >
          + Add Course
        </button>

        {isPopupOpen && (
          <div className="max-w-md mx-auto my-8 bg-white p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Add Course</h2>
            <form action="#" method="POST">
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Course Name"
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Discription"
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Instructor"
                  required
                />
              </div>

              <div className="mb-4">
                <select
                  id="country"
                  name="country"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                >
                  <option value="" disabled selected>
                    Instrument
                  </option>
                  <option value="a">A</option>
                  <option value="b">B</option>
                  <option value="c">C</option>
                </select>
              </div>

              <div className="mb-4">
                <select
                  id="gender"
                  name="gender"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                >
                  <option value="" disabled selected>
                    Day of the week
                  </option>
                  <option value="a">A</option>
                  <option value="b">B</option>
                  <option value="c">C</option>
                </select>
              </div>

              <div className="mb-4">
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Price"
                  required
                />
              </div>

              <div className="mt-6">
                <button className="w-[120px] font-nunitoSans font-[600] text-[#212529] text-[14px] leading-[19.1px] bg-[white] py-[8px] px-[16px] rounded-[4px] gap-[10px]">
                  Cancel
                </button>
                <button className="w-[120px] font-nunitoSans font-[600] text-[#212529] text-[14px] leading-[19.1px] bg-[#FEC0CA] py-[8px] px-[16px] rounded-[4px] gap-[10px]">
                  Add Course
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

// function CourseList() {

//   return (

//   );
// }
