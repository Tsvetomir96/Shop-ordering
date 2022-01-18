import { useRef, useState } from "react";
import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(false);
  const enteredAmountRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = enteredAmountRef.current.value;
    const enteredAmountInNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountInNumber < 1 ||
      enteredAmountInNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountInNumber);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={enteredAmountRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />

      <button>+ Add</button>
      {amountIsValid && <p>Please enter valid amount, between 1 and 5.</p>}
    </form>
  );
};

export default MealItemForm;
