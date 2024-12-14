import style from "./AppButton.module.css";

function AppButton () {
    const buttonText = "Leggi Di Più";
    return(
        <button className={style.button}>
      {buttonText}
    </button>
    );
}

export default AppButton;