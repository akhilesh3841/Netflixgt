export const checkvalidation = (email, password) => {
  const isemailid = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
  const ispasswordvalid = /^(?=.*[a-z])(?=.*[0-9]).{6,}$/.test(password);

  if (!isemailid) {
    return "Email id is invalid";
  }
  if (!ispasswordvalid) {
    return "Password is not valid";
  }

  return null;
};
