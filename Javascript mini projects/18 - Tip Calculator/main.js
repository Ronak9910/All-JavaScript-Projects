const enteredBillAmount = document.querySelector("#billAmount");
const enteredDiscountPercentage = document.querySelector("#discount");
const enteredTipPercentage = document.querySelector("#tip");
const eneteredNumberOfCustomer = document.querySelector("#customer");

const generateBill = document.querySelector(".generate-bill");
const resetBill = document.querySelector(".reset-bill");

const totalTip = document.querySelector(".tip-paid");
const totalBill = document.querySelector(".total-amount");
const perCustomerBill = document.querySelector(".customer-amount");

const discountValue = document.querySelector(".discount-value");
const tipValue = document.querySelector(".tip-value");
const customerValue = document.querySelector(".customer-value");

generateBill.addEventListener("click", () => {
  const billAmount = Number(enteredBillAmount.value);
  const discountPercentage = enteredDiscountPercentage.value;
  const tipPercentage = enteredTipPercentage.value;
  const noOfCustomer = eneteredNumberOfCustomer.value;

  discountValue.textContent = discountPercentage;
  tipValue.textContent = tipPercentage;
  customerValue.textContent = noOfCustomer;

  const discountedBill = billAmount - (billAmount * discountPercentage) / 100;
  const totalTipPaid = (discountedBill * tipPercentage) / 100;
  const finalBill = discountedBill + totalTipPaid;
  const perCustomerBillAmount = (finalBill / noOfCustomer).toFixed(2);

  totalTip.textContent = totalTipPaid;
  totalBill.textContent = finalBill;
  perCustomerBill.textContent = perCustomerBillAmount;
});

resetBill.addEventListener("click", () => {
  discountValue.textContent = "0";
  tipValue.textContent = "0";
  customerValue.textContent = "0";

  enteredBillAmount.value = "";
  enteredDiscountPercentage.value = 0;
  enteredTipPercentage.value = 0;
  eneteredNumberOfCustomer.value = 0;

  totalTip.textContent = "";
  totalBill.textContent = "";
  perCustomerBill.textContent = "";
});

enteredDiscountPercentage.addEventListener("input", () => {
  discountValue.textContent = enteredDiscountPercentage.value;
});

enteredTipPercentage.addEventListener("input", () => {
  tipValue.textContent = enteredTipPercentage.value;
});

eneteredNumberOfCustomer.addEventListener("click", () => {
  customerValue.textContent = eneteredNumberOfCustomer.value;
});
