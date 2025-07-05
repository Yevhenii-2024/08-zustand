import { PacmanLoader } from "react-spinners"
import style from './loading.module.css'

export default function Loading() {
    return  (
        <div className={style.backdrop}>
          <PacmanLoader color="#ffff00" size={50} />
        </div>
      );
}