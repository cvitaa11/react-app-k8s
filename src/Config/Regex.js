export const numbersOnly = /^[0-9]*$/;
export const email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const OIB = /^[0-9]{11}$/;
export const lettersAndNumbers = /^[A-Ža-ž0-9 _]*[A-Ža-ž0-9][A-Ža-ž0-9 _]*$/;
export const lettersOnly = /^[a-žA-Ž\s]*$/;
export const iban = /^\d{19}$/;
export const identificationNumber = /^[0-9]{7,13}$/;
export const numbersAndDot = /[0-9]*\.?[0-9]*/;
export const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@.$%^&*-]).{8,}$/;