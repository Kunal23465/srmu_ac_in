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
  const years = Object.keys(data.fees[0].yearWiseAmount);
    const notes = ["Alumni Fee: 500", "Degree Fee: 1000", "Both these fees are payable in the final year of the program"];
  const gridTemplate = `3fr repeat(${years.length}, 1fr)`;

  return (
    <div className="w-full p-6 bg-[#ecf0f9] rounded-2xl border border-[#c6d4ea] my-14">
      {/* Header */}
      <div className="grid bg-[#ecf0f9] py-6 px-4 font-semibold text-[#0a4a85]" style={{ gridTemplateColumns: gridTemplate }}>
        <div className="px-8">Duration (in Year)</div>
        {years.map((year) => (
          <div key={year} className="text-center">
            {year} Year
          </div>
        ))}
      </div>

      {/* Rows */}
      <div className="mt-4 space-y-4">
        {data.fees.map((fee, index) => (
          <div key={index} className="grid bg-white rounded-md p-6" style={{ gridTemplateColumns: gridTemplate }}>
            <div className="px-8 font-medium text-[#023047]">{fee.feeTypeName}</div>

            {years.map((year) => (
              <div key={year} className="text-center">
                {fee.yearWiseAmount[year] || "-"}
              </div>
            ))}
          </div>
        ))}
      </div>
      {notes && (
        <div className="mt-6 bg-[#ffffff] p-8 rounded-lg">
          {notes.map((note, i) => (
            <p key={i} className="text-sm pb-4 text-[#0c3b6a] font-semibold">
              {note}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProgramFeeTable;
