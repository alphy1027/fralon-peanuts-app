import { Suspense } from "react";
import AppRouter from "./routes";
import Loading from "./components/UI-primitives/Loading";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <AppRouter />
    </Suspense>
  );
}

export default App;
