document.getElementById('loan-form').addEventListener('submit',function(e){
document.getElementById('results').style.display = "none"
document.getElementById('loading').style.display = "block"

setTimeout(calculateResults , 2000);

  e.preventDefault();
});

function calculateResults(){
  document.getElementById('loading').style.display = "none"

  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

const principle = parseFloat(amount.value);
const caculatedInterested = parseFloat(interest.value)  / 100;
const caculatedPayments = parseFloat(years.value)*12;
const perMonth = parseFloat(caculatedInterested  / 12 * principle );


monthlyPayment.value =(principle / caculatedPayments + perMonth).toFixed(2)  ;
totalPayment.value = (caculatedInterested * principle + principle).toFixed(2);
totalInterest.value = (totalPayment.value - principle).toFixed(2);


if(amount.value === "" || interest.value === "" || years.value === ""){
  showError("Plz Filled The Inputsff");

}else{
  document.getElementById('results').style.display = 'block';
}
}

function showError(error){
  
  const errorDiv = document.createElement('div');
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  errorDiv.className = "alert alert-danger";
  errorDiv.appendChild(document.createTextNode(error));
  card.insertBefore(errorDiv , heading);

  setTimeout(clearError,3000);
}

function clearError(){
  document.querySelector('.alert').remove();
}

