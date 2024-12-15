import style from "./AppCard.module.css"
import AppButton from "./AppButton"

function AppCard() {
    const post = {
        id: 2,
      title: "Titolo del Post",
      image: '',
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
      tags: ["js", "css"],
      published: true,
    }
    return (
      <div>
                <section className={style.img}>
                    <img src={post.image} alt="" />
                    </section>
                <section className={style.description}>
                    <div className={style.title}><h2>{post.title}</h2></div>
                    <div>{post.content}</div>
                          <AppButton />
                </section>
               </div>
       
       
    );
}

export default AppCard;