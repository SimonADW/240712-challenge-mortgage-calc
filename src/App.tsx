import { useState } from "react";
import style from "./App.module.css";
import Footer from "./components/footer/Footer";
import FormSection from "./components/FormSection/FormSection";
import ResultSection from "./components/ResultSection/ResultSection";
import "./reset.css";


function App() {
	const [mortgageCalculations, setMortgageCalculations] = useState<number[]>([0,0]);
	return (
		<>
			<main className={style.main}>
				<FormSection setMortgageCalculations={setMortgageCalculations} />
				<ResultSection mortgageCalculations={mortgageCalculations} />
			</main>
			<Footer />
		</>
	);
}

export default App;
