import MainImage from "../pages/components/MainImage";
import img2 from "../img/bg_img2.png";
import title2 from "../img/title2.png";

function ProductSuperDocument() {
  return (
    <>
      <section>
        <MainImage 
          img={img2}
          titleImg={title2}
          title="SuperDocument"
        />
      </section>
    </>
  );
}

export default ProductSuperDocument;
