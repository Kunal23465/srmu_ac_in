import tedxEventVideo from "../../assets/video/events-new/tedx-section/tedx-srmu-reel.mp4";
import jyotsnaVideo from "../../assets/video/events-new/tedx-section/jyotsna-kaur-habibullah.mp4";
import sudhirVideo from "../../assets/video/events-new/tedx-section/dr-sudhir-kumar-mishra.mp4";
import kamalVideo from "../../assets/video/events-new/tedx-section/mr-kamal-khan-final-edit.mp4";
import rudraVideo from "../../assets/video/events-new/tedx-section/mr-rudra-pratap-singh.mp4";
import tedxEventPoster from "../../assets/video/events-new/tedx-section/posters/tedx-srmu.webp";
import jyotsnaPoster from "../../assets/video/events-new/tedx-section/posters/jyotsna-kaur-habibullah.webp";
import sudhirPoster from "../../assets/video/events-new/tedx-section/posters/dr-sudhir-kumar-mishra.webp";
import kamalPoster from "../../assets/video/events-new/tedx-section/posters/mr-kamal-khan.webp";
import rudraPoster from "../../assets/video/events-new/tedx-section/posters/mr-rudra-pratap-singh.webp";
import EventVideo from "./EventVideo";
import styles from "./TedxReelsSection.module.css";

const tedxReels = [
  { title: "TEDx at SRMU", video: tedxEventVideo, poster: tedxEventPoster },
  { title: "Jyotsna Kaur Habibullah", video: jyotsnaVideo, poster: jyotsnaPoster },
  { title: "Dr. Sudhir Kumar Mishra", video: sudhirVideo, poster: sudhirPoster },
  { title: "Mr. Kamal Khan", video: kamalVideo, poster: kamalPoster },
  { title: "Mr. Rudra Pratap Singh", video: rudraVideo, poster: rudraPoster },
];

export default function TedxReelsSection() {
  return (
    <section id="tedx" className={styles.section} aria-labelledby="tedx-reels-title">
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.intro}>
            <h2 id="tedx-reels-title">TEDx <span>at SRMU</span></h2>
            <p>Meet the voices and perspectives that make TEDx at SRMU a place for ideas, curiosity and conversation.</p>
          </div>
        </header>

        <div className={styles.reelRail} role="list" aria-label="TEDx speaker reels">
          {tedxReels.map(({ title, video, poster }) => (
            <article className={styles.reelCard} key={title} role="listitem" aria-label={`TEDx speaker reel featuring ${title}`}>
              <div className={styles.videoFrame}>
                <EventVideo
                  src={video}
                  poster={poster}
                  className={styles.videoMedia}
                  showPosterUntilPlaying
                />
                <span className={styles.videoName}>{title}</span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
