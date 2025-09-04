import style from "./App.module.scss";
import { Todos } from "./ui/Todos";

export default function App() {
  return (
    <main className={style.main}>
      <div className={style.container}>
        <h1 className={style.title}>todos</h1>
        <Todos />
      </div>
    </main>
  );
}
