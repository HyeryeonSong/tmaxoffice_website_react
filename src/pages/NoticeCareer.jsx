import MainImage from "./components/MainImage";
import img2 from "../img/bg_img2.png";
import title5 from "../img/title5.png";

function NoticeCareer() {
  return (
    <>
      <section>
        <MainImage 
          img={img2}
          titleImg={title5}
          title="채용 프로세스"
        />
      </section>
    </>
  );
}

export default NoticeCareer;
