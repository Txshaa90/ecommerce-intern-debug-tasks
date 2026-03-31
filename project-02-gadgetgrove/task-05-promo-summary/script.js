const basePrice = 180;
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
    discount = 0; // discount was adding 20, should add 0
    promoMessage.textContent = "Invalid promo code.";
  }

  const finalTotal = basePrice - discount; // discount was added, not subtracted
  discountLabel.textContent = `$${discount.toFixed(2)}`;
  finalTotalLabel.textContent = `$${finalTotal.toFixed(2)}`;
});
