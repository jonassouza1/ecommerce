import styles from "styles/section/SectionVideos.module.css";

const SectionVideos = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.divText}>
          <div className={styles.divImg}>
            <img
              src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/touchpoint_trailer/logo-mercado-play.png"
              alt="image backgroud of films"
            />
          </div>
          <div className={styles.title}>
            <h2>Now you can watch</h2>
            <h2>series and movies</h2>
          </div>
          <div className={styles.acess}>
            <a href="#">Access Market Play</a>
          </div>
        </div>
        <div className={styles.divVideo}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/mDxiUVyIDuw?si=Vag6ORojpVnxPXPZ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};
export default SectionVideos;
