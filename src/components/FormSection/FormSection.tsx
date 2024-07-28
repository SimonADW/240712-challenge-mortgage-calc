import { useForm, SubmitHandler } from "react-hook-form";
import style from "./FormSection.module.css";
import { useState, useEffect } from "react";

type FormPropsType = {
	setMortgageCalculations: React.Dispatch<React.SetStateAction<number[]>>;
}

type MortageType = "repayment" | "mortageOnly";
type Inputs = {
	amount: number;
	term: number;
	rate: number;
	mortgageType: MortageType;
};

const FormSection = ({setMortgageCalculations}: FormPropsType) => {
	const [inputValues, setInputValues] = useState<Inputs>();

	useEffect(() => {
		// TODO: FIX calculations
		if(inputValues) {
			const mainAmount = Number(inputValues.amount);
			const totalNumberOfPayments = Number(inputValues.term * 12);
			const monthlyInterest = ((mainAmount * (Number(inputValues.rate) * 0.01 )) / totalNumberOfPayments);
			const monthlyDownpayment = mainAmount / totalNumberOfPayments;
			
			let monthlyPayments: number;
			let totalRepayed = (monthlyDownpayment + monthlyInterest) * totalNumberOfPayments;
			if(inputValues.mortgageType === "repayment") {								
				monthlyPayments = totalRepayed / totalNumberOfPayments;
			} else {
				monthlyPayments = mainAmount * monthlyInterest;
			}			
			monthlyPayments = parseFloat(monthlyPayments.toFixed(2));
			totalRepayed = parseFloat(totalRepayed.toFixed(2));
			setMortgageCalculations([monthlyPayments, totalRepayed]);
		}
	}, [inputValues, setMortgageCalculations]);	

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();
	
	const onSubmit: SubmitHandler<Inputs> = (data) => {
		setInputValues(data)
	}

	return (
		<section className={style.mainContainer}>
			<form action="" onSubmit={handleSubmit(onSubmit)}>
				<h1>Mortgage Calculator</h1>
				<button type="reset" className={style.clearAllButton}>Clear All</button>
 
				<br />

				<label htmlFor="">Mortgage Amount</label>
				<div
					className={`${style.amountField} ${style.inputAndPlacholderWrapper} ${errors.amount && style.errorState}`}
				>
					<div
						className={`${style.placeholder} ${style.amountPlaceholder} ${errors.amount && style.errorStatePlaceholder}`}
					>
						£
					</div>
					<input
						{...register("amount", { required: "This field is required" })}
						type="number"
					/>
				</div>
				<p>{ errors.amount?.message}</p>

				<div className={style.termRateWrapper}>
					<div>
						<label htmlFor="term">Mortgage Term</label>
						<div className={`${style.amountField} ${style.inputAndPlacholderWrapper} ${errors.term && style.errorState}`}>
							<input
								{...register("term", { required: "This field is required" })}
								type="number"
							/>
							<div className={`${style.placeholder} ${style.amountPlaceholder} ${errors.term && style.errorStatePlaceholder}`}>
								years
							</div>
						</div>
						<p>{ errors.term?.message}</p>
					</div>

					<div>
						<label htmlFor="">Interest Rate</label>
						<div
							className={`${style.amountField} ${style.inputAndPlacholderWrapper} ${errors.rate && style.errorState}`}
						>
							<input
								{...register("rate", { required: "This field is required" })}
								type="number"
							/>
							<div
								className={`${style.placeholder} ${style.amountPlaceholder} ${errors.rate && style.errorStatePlaceholder}`}
							>
								%
							</div>
						</div>
							<p>{ errors.rate?.message}</p>
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
				<p>{ errors.mortgageType?.message}</p>

				<button className={style.calcButton}>
					Calculate Repayment
				</button>
			</form>
		</section>
	);
};

export default FormSection;
