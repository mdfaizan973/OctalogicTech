// import React from "react";

export default function Enr(enrData) {
  let data = enrData.enrData;
  //   console.log(data);
  return (
    <div>
      <table className="w-[1164px] h-[250px]">
        <thead>
          <tr className="flex justify-between h-[43px] items-center border-b border-[#E5E7EB] pt-[8px] pb-[16px]">
            <th className="font-nunitoSans font-[700] text-[#212529] text-[14px] leading-[19.1px]">
              Enr. No
            </th>
            <th className="font-nunitoSans font-[700] text-[#212529] text-[14px] leading-[19.1px]">
              S. Name
            </th>
            <th className="font-nunitoSans font-[700] text-[#212529] text-[14px] leading-[19.1px]">
              C. Name
            </th>
            <th className="font-nunitoSans font-[700] text-[#212529] text-[14px] leading-[19.1px]">
              Fees
            </th>
            <th className="font-nunitoSans font-[700] text-[#212529] text-[14px] leading-[19.1px]">
              Enr. Date
            </th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data?.map((el, i) => (
              <tr
                key={i}
                className="flex justify-between h-[35px] items-center py-[8px] border-b border-[#E5E7EB]"
              >
                <td className="font-nunitoSans font-[400] text-[#212529] text-[14px] leading-[19.1px] flex justify-center items-center">
                  {el.enrolment_no}
                </td>
                <td className="font-nunitoSans font-[400] text-[#212529] text-[14px] leading-[19.1px] flex justify-center items-center">
                  {el.student_name}
                </td>
                <td className="font-nunitoSans font-[400] text-[#212529] text-[14px] leading-[19.1px] flex justify-center items-center">
                  {el.course_name}
                </td>
                <td className="font-nunitoSans font-[400] text-[#212529] text-[14px] leading-[19.1px] flex justify-center">
                  {el.fees}
                </td>
                <td className="font-nunitoSans font-[400] text-[#212529] text-[14px] leading-[19.1px] flex justify-center items-center">
                  {el.enrolment_date}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
