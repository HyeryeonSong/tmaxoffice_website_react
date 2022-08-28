import MainImage from "./components/MainImage";
import img3 from "../img/bg_img3.png";
import title4 from "../img/title4.png";

function NoticeMedia() {
  return (
    <>
      <section>
        <MainImage 
          img={img3}
          titleImg={title4}
          title="언론 보도"
        />
      </section>
    </>
  );
}

export default NoticeMedia;
