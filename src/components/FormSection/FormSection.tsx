import { useForm, SubmitHandler } from "react-hook-form";
import style from "./FormSection.module.css";

type MortageType = "repayment" | "mortageOnly";
type Inputs = {
	amount: number;
	term: number;
	rate: number;
	mortgageType: {
		value: MortageType,
		checked: boolean,
	},

};


const FormSection = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	return (
		<section className={style.mainContainer}>
			<form action="" onSubmit={handleSubmit(onSubmit)}>
				<h1>Mortgage Calculator</h1>
				<button className={style.clearAllButton}>Clear All</button>

				<br />

				<label htmlFor="">Mortgage Amount</label>
				<div
					className={`${style.amountField} ${style.inputAndPlacholderWrapper}`}
				>
					<div
						className={`${style.placeholder} ${style.amountPlaceholder}`}
					>
						£
					</div>
					<input
						{...register("amount", { required: true })}
						type="number"
					/>
				</div>

				<div className={style.termRateWrapper}>
					<div>
						<label htmlFor="term">Mortgage Term</label>
						<div
							className={`${style.amountField} ${style.inputAndPlacholderWrapper}`}
						>
							<input
								{...register("term", { required: true })}
								type="number"
							/>
							<div
								className={`${style.placeholder} ${style.amountPlaceholder}`}
							>
								years
							</div>
						</div>
					</div>

					<div>
						<label htmlFor="">Interest Rate</label>
						<div
							className={`${style.amountField} ${style.inputAndPlacholderWrapper}`}
						>
							<input
								{...register("rate", { required: true })}
								type="number"
							/>
							<div
								className={`${style.placeholder} ${style.amountPlaceholder}`}
							>
								%
							</div>
						</div>
					</div>
				</div>

				<div className={style.radioButtons}>
					Mortgage Type
					<label
						className={`${style.repaymentLabel} ${style.radioLabel}`}
						htmlFor="repayment"
					>
						<input
							{...register("mortgageType")}
							type="radio"
							value="repayment"
							id="repayment"
							checked
						/>
						Repayment
					</label>
					<label className={style.radioLabel} htmlFor="interestOnly">
						<input
							{...register("mortgageType")}
							type="radio"
							value="interestOnly"
							id="interestOnly"
						/>
						Interest Only
					</label>
				</div>

				<button className={style.calcButton}>
					Calculate Repayment
				</button>
			</form>
		</section>
	);
};

export default FormSection;
