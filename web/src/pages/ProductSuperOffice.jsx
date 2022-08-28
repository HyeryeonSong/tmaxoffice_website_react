import MainImage from "./components/MainImage";
import img1 from "../img/bg_img1.png";
import title1 from "../img/title1.png";

function ProductSuperOffice() {
  return (
    <>
      <section>
        <MainImage 
          img={img1}
          titleImg={title1}
          title="SuperOffice"
        />
      </section>
    </>
  );
}

export default ProductSuperOffice;
