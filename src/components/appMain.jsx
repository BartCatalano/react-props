import AppCard from "./appCard";
import style from "./AppMain.module.css"

function AppMain () {
    return(
        <main>
<div className={style.raw}>
            <div className={style.col}>
                <AppCard />
            </div>
            </div>
        
        
</main>

    );
}
export default AppMain;