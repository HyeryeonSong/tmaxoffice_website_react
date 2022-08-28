import MainImage from "./components/MainImage";
import img3 from "../img/bg_img3.png";
import title3 from "../img/title3.png";

function ProductServiceType() {
  return (
    <>
      <section>
        <MainImage 
          img={img3}
          titleImg={title3}
          title="서비스 유형"
        />
      </section>
    </>
  );
}

export default ProductServiceType;
