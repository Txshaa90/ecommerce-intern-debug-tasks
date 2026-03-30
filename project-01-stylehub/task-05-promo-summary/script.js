const basePrice = 120;
const promoInput = document.getElementById("promoCode");
const applyPromoButton = document.getElementById("applyPromo");
const discountLabel = document.getElementById("discount");
const finalTotalLabel = document.getElementById("finalTotal");
const promoMessage = document.getElementById("promoMessage");

applyPromoButton.addEventListener("click", function () {
  const promoCode = promoInput.value.trim().toLowerCase();
  let discount = 0;

  if (promoCode === "save10") {
    discount = 10;
    promoMessage.textContent = "Promo code applied.";
  } else if (promoCode === "freeship") {
    discount = 15;
    promoMessage.textContent = "Shipping removed.";
  } else {
    discount = 20;
    promoMessage.textContent = "Invalid promo code.";
  }

  const finalTotal = basePrice + discount;
  discountLabel.textContent = `$${discount.toFixed(2)}`;
  finalTotalLabel.textContent = `$${finalTotal.toFixed(2)}`;
});
