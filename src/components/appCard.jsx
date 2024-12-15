import style from "./AppCard.module.css"
import AppButton from "./AppButton"


function AppCard({ title, image, content, tags, published }) {
  if (published === false) {
    return null;
  }
  const percorsoImg = (image === '') ? "No_Image_Available.jpg" : image; 
  const tagsArray = tags.map((curElem, curIndex) =>
    (<span key={curIndex} className={curElem}>{curElem}</span>)
  );
  return (
    <div>
      <section className={style.img}>
        <img src={percorsoImg} alt="" />
      </section>
      <section className={style.description}>
        <div className={style.title}><h2>{title}</h2></div>
        {tagsArray}
        <div>{content}</div>
        <AppButton />
      </section>
    </div>


  );
}

export default AppCard;