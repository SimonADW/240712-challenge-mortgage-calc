import { useForm, SubmitHandler } from "react-hook-form";
import style from "./FormSection.module.css";
import { useState, useEffect } from "react";

type FormPropsType = {
	setMortgageCalculations: React.Dispatch<React.SetStateAction<string[]>>;
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

	const calculateRepayments = ()=> {		
		if(inputValues) {
			const mainAmount = Number(inputValues.amount);
			const totalNumberOfPayments = Number(inputValues.term * 12);
			const monthlyInterest = (Number(inputValues.rate) / 100 / 12 );			
			
			let totalRepayed: number;
			let monthlyPayments: number;

			const calcMonthlyPayments = (mainAmount: number, numOfPayments: number, monthlyInterestRate: number)=> {
				return (mainAmount * monthlyInterestRate * Math.pow(1 + monthlyInterest, numOfPayments)) / (Math.pow(1 + monthlyInterestRate, numOfPayments) -1) 
			}

			monthlyPayments = calcMonthlyPayments(mainAmount, totalNumberOfPayments, monthlyInterest);

			if(inputValues.mortgageType === "repayment") {								
				totalRepayed = monthlyPayments * totalNumberOfPayments;
			} else {
				monthlyPayments = monthlyPayments - (mainAmount / totalNumberOfPayments);
				totalRepayed = (monthlyPayments * totalNumberOfPayments);
			}			

			monthlyPayments = parseFloat(monthlyPayments.toFixed(2));
			totalRepayed = parseFloat(totalRepayed.toFixed(2));
			setMortgageCalculations([monthlyPayments.toLocaleString(), totalRepayed.toLocaleString()]);
		}
	}

	useEffect(() => {
		calculateRepayments()
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
				<button type="reset" className={style.clearAllButton} onClick={()=>setMortgageCalculations(["0","0"])}>Clear All</button>
 
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
						min={0}
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
								min={0}
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
								min={0}
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
						className={`${style.repaymentLabel} ${style.radioLabel} ${errors.mortgageType && style.errorState}`}
						htmlFor="repayment"
					>
						<input
							{...register("mortgageType", { required: "Please select a mortgage type" })}
							type="radio"
							value="repayment"
							id="repayment"

						/>
						Repayment
					</label>
					<label className={`${style.radioLabel} ${style.interestLabel} ${errors.mortgageType && style.errorState}`} htmlFor="interestOnly">
						<input
							{...register("mortgageType", { required: "Please select a mortgage type" })}
							type="radio"
							value="interestOnly"
							id="interestOnly"
						/>
						Interest Only
					</label>
				<p>{ errors.mortgageType?.message}</p>
				</div>

				<button className={style.calcButton}>
					Calculate Repayment
				</button>
			</form>
		</section>
	);
};

export default FormSection;
