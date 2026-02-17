import React from "react";

interface ProgramFee {
  feeTypeId: number;
  feeTypeName: string;
  yearWiseAmount: Record<string, number>;
}

interface ProgramFeeData {
  programId: number;
  programName: string;
  fees: ProgramFee[];
}

interface Props {
  data: ProgramFeeData;
}

const ProgramFeeTable: React.FC<Props> = ({ data }) => {
  function getMaxYearWiseFees(fees: ProgramFee[]) {
    const maxLength = Math.max(
      ...fees.map(fee => Object.keys(fee.yearWiseAmount).length)
    );
    return fees.filter(
      fee => Object.keys(fee.yearWiseAmount).length === maxLength
    );
  }

  const check = getMaxYearWiseFees(data.fees);
  const years = Object.keys(check[0].yearWiseAmount);

  // @ts-ignore
  const notes = [
    `Alumni Fee: <span class="inline-block ml-1 text-lg font-medium">500</span>`,
    `Degree Fee: <span class="inline-block ml-1 text-lg font-medium">1000</span>`,
    `<span class="inline-block text-[13px] font-medium">Both these fees are payable in the final year of the program</span>`,
  ];

  return (
    <>
      <div className="w-full p-6 bg-[#ecf0f9] rounded-2xl border border-[#c6d4ea] my-14 overflow-x-auto">
        <table className="w-full border-separate border-spacing-y-3">
          {/* Header */}
          <thead>
            <tr className="bg-[#ecf0f9] text-[#0a4a85] font-semibold">
              <th className="text-left px-8 py-6 border-r border-[#dfe3ee]">
                Duration (in Year)
              </th>
              {years.map((year) => (
                <th
                  key={year}
                  className="text-center px-6 py-6 border-r last:border-r-0 border-[#dfe3ee]"
                >
                  {year} Year
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody className="space-y-4">
            {data.fees.map((fee, index) => (
              <tr
                key={fee.feeTypeId}
                className="bg-white rounded-md py-4"
              >
                <td className="px-8 text-[13px] sm:text-base py-6 text-[#023047] border-r border-[#dfe3ee] rounded-l-[10px]">
                  {fee.feeTypeName}
                </td>

                {years.map((year) => (
                  <td
                    key={year}
                    className={`text-center text-[14px] px-6 py-6 border-r last:border-r-0 border-[#dfe3ee]  ${index === years.length - 1 ? "rounded-r-[10px] border-r-0" : ""}`}
                  >
                    {fee.yearWiseAmount[year] ?? "-"}
                  </td>
                ))}
              </tr>
            ))}
            {/* <tr>
              <td colSpan={5}>
                {notes.length > 0 && (
                  <div className="mt-6 bg-white p-8 rounded-lg">
                    {notes.map((note, i) => (
                      <p
                        key={i}
                        className="pb-4 text-[#0c3b6a]"
                        dangerouslySetInnerHTML={{ __html: note }}
                      />
                    ))}
                  </div>
                )}
              </td>
            </tr> */}
          </tbody>
          {/* Notes */}


        </table>


      </div>
    </>
  );
};

export default ProgramFeeTable;
