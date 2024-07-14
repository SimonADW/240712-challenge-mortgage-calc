import style from "./App.module.css";
import Footer from "./components/footer/Footer";
import FormSection from "./components/FormSection/FormSection";
import ResultSection from "./components/ResultSection/ResultSection";
import "./reset.css";


function App() {
	return (
		<>
			<main className={style.main}>
				<FormSection  />
				<ResultSection />
			</main>
			<Footer />
		</>
	);
}

export default App;
