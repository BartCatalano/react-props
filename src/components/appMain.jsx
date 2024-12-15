import AppCard from "./appCard";
import style from "./AppMain.module.css"
import dataArray from "../data/data.js"
function AppMain() {
    const arrayPosts = dataArray.map((curobject) => <AppCard key={curobject.id} title={curobject.title} image={curobject.image} content={curobject.content} published={curobject.published} tags={curobject.tags} />);

    return (
        <main>
            <div className={style.raw}>
                <div className={style.col}>
                    {arrayPosts}
                </div>

            </div>
        </main>

    );
}
export default AppMain;