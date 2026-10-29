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
            <span className={styles.eyebrow}><i aria-hidden="true" /> Ideas worth spreading</span>
            <h2 id="tedx-reels-title">TEDx <span>at SRMU</span></h2>
            <p>Meet the voices and perspectives that make TEDx at SRMU a place for ideas, curiosity and conversation.</p>
          </div>
          <div className={styles.brandMark} role="img" aria-label="TEDx at SRMU">
            <span>TED</span><b>x</b><small>SRMU</small>
          </div>
        </header>

        <div className={styles.reelRail} role="region" aria-label="TEDx speaker reels" tabIndex={0}>
          {tedxReels.map(({ title, video, poster }) => (
            <article className={styles.reelCard} key={title}>
              <div className={styles.videoFrame}>
                <video controls playsInline preload="none" poster={poster} aria-label={`Play TEDx reel featuring ${title}`}>
                  <source src={video} type="video/mp4" />
                  Your browser does not support HTML video.
                </video>
              </div>
              <div className={styles.cardCopy}>
                <span>TEDx reel</span>
                <h3>{title}</h3>
              </div>
            </article>
          ))}
        </div>

        <p className={styles.railHint}><span aria-hidden="true">▶</span> Select a reel to watch · swipe to explore the collection on smaller screens</p>
      </div>
    </section>
  );
}
