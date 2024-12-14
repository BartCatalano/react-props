import style from "./AppCard.module.css"
import AppButton from "./AppButton"
function AppCard() {
    return (
        <div className={style.raw}>
            <div className={style.col}>
                <section className={style.img}>
                    </section>
                <section className={style.description}>
                    <div className={style.title}><h2>Titolo Del Post</h2></div>
                    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                         Iure in adipisci iste quam deserunt recusandae assumenda iusto 
                         rerum dicta asperiores, quisquam alias perferendis voluptate ducimus
                          corporis dolore totam laboriosam ipsum!</div>
                          <AppButton />
                </section>
               
            </div>
        </div>
       
    );
}

export default AppCard;