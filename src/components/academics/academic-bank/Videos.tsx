import { videos } from "../../../data/academics/academic-credit/academic-credit-data";

const Videos = () => {


    return (
        <div className="abc-videos-section">
            <h2 className="abc-videos-title font22 color_light_blue">Informative Videos on ABC</h2>

            <div className="abc-videos-grid">
                {videos.map((url, idx) => (
                    <div key={idx} className="abc-video-wrapper">
                        <iframe
                            src={url}
                            title={`ABC Tutorial ${idx + 1}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Videos;
