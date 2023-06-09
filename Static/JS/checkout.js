$(document).ready(function() {
  // Show/hide the credit card form based on the selected payment method
  $('input[name="payment_method"]').change(function() {
    if ($(this).val() === "pay-with-card") {
      $("#card-form").show();
    } else {
      $("#card-form").hide();
    }
  });

  $("#confirm-button").click(function(event) {
    event.preventDefault();
    var paymentMethod = $("input[name='payment_method']:checked").val();
    if (paymentMethod === "pay-with-card") {
      var cardNumber = $("#card-number").val();
      var cardholderName = $("#cardholder-name").val();
      var expirationDate = $("#expiration-date").val();
      var cvc = $("#cvc").val();
      if (cardNumber === "" ||
          cardholderName === "" ||
          expirationDate === "" ||
          cvc === "") {
        alert("Please fill in all the required fields.");
        return;
      }
    }
    $("form").submit();
  });
});

const errorMessages = document.querySelector('.error-messages');
errorMessages.classList.add('fade-out');