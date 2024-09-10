if(document.querySelector('.mask-phone')) {
  Inputmask({"mask": "+7 (999) 999-99-99"}).mask(document.querySelector('.mask-phone'));
}
if(document.querySelector('.mask-date')) {
  Inputmask({"mask": "99.99.9999"}).mask(document.querySelector('.mask-date'));
}