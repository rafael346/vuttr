import { DataProvider } from "./context/DataContext";
import Home from "./pages/Home";

export default function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}
