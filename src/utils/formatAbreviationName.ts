export const formatAbreviationName = (username: string): string => {
  let [name, surname]: string[] = username.split(" ");
  let abbreviationLetters = [name[0], surname[0]].join("");
  return abbreviationLetters;
};
