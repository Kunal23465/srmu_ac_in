import { Link } from "react-router-dom";
import { convocationData } from "../../../data/campus-life/convocation/convocation-data";

export default function ConvocationSection() {
    const data = convocationData.convocation;

    return (
        <section className="py-16">
            {data.cards.map((card) => (
                <div
                    key={card.routeKey}
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
                >
                    {/* Left Image */}
                    <div className="w-full">
                        <img
                            src={card.image}
                            className="rounded-lg w-full h-auto object-cover"
                        />
                    </div>

                    <div>
                        <p
                            className="mb-4 leading-relaxed"
                            dangerouslySetInnerHTML={{
                                __html: card.description,
                            }}
                        />
                        <Link
                            to={card.routeKey}
                            className="inline-block mt-2 px-5 py-4 bg-yellow-500 text-[#023047] fw500 uppercase 
             hover:bg-white hover:border-2 hover:border-yellow-500 hover:text-yellow-500 
             rounded-lg transition"
                        >
                            Read More →
                        </Link>

                    </div>
                </div>
            ))}
        </section>

    );
}
