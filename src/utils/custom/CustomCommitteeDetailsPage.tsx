import { CustomTopFooterData1 } from "../../data/about/leadership-and-governance/leadership-and-governance-data";
import CustomTopFooter from "./CustomTopFooter";

export default function CustomCommitteeDetailsPage({ committee }: { committee: any }) {
  if (!committee) {
    return (
      <div className="py-10 text-center">
        <h1 className="text-3xl font-semibold mb-4">Committee Not Found</h1>
        <p className="text-gray-600">
          The committee you are looking for doesn't exist or the link is incorrect.
        </p>
      </div>
    );
  }

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1a3c6b] mb-8 pb-2 inline-block">
          {committee.title}
        </h1>

        <div className="flex flex-col md:flex-row items-start gap-10 mt-8">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <img
              src={committee.imagePath}
              alt={committee.title}
              className="rounded-lg shadow-lg w-full max-w-[400px] md:max-w-[450px] object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 text-gray-700 text-[17px] leading-relaxed">
            <div className="whitespace-pre-line text-justify  pb-2 mb-5 text-gray-700 text-[17px] leading-relaxed">
              {committee.longDescription}
            </div>

            {committee.members && (
              <div className="mb-8">
                <div className="border-t border-gray-300 mb-2"></div>

                <h2 className="text-lg font-semibold text-black text-left mb-2">
                  Constitution of {committee.title}
                </h2>

                <div className="border-t border-gray-300 mb-4"></div>

                <ul className="list-disc pl-6 space-y-2 text-gray-800 text-[16px] marker:text-yellow-500">
                  {committee.members.map((member: string, index: number) => (
                    <li key={index}>{member}</li>
                  ))}
                </ul>
              </div>
            )}

            {committee.contact && (
              <div>
                <h2 className="text-lg font-semibold text-black mb-2 border-b border-gray-300 pb-1">
                  In case of any issue, please contact
                </h2>
                <ul className="space-y-2 text-gray-700 text-[16px]">
                  {committee.contact.map((line: string, index: number) => (
                    <li
                      key={index}
                      className="break-words border-b border-gray-300 pb-1"
                    >
                      {line.includes("http") ? (
                        <a href={line} className="text-black hover:text-black">
                          {line}
                        </a>
                      ) : (
                        line
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-16">
        <CustomTopFooter data={CustomTopFooterData1} />
      </div>
    </section>
  );
}
