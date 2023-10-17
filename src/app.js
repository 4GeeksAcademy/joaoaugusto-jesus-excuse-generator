/* eslint-disable */
import "./style.css";

window.onload = () => {
  document.querySelector("#btm").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["jogger", "raccon", "dog", "driver", "comedian", "pincone"];
  let action = ["took my", "threw my", "yelled at my", "sotle my", "bit my"];
  let possetion = ["homework", "toe", "car", "shoe"];
  let where = ["in the bed", "in my closet", "in my kitchen"];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subjIndx = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndx] +
    " " +
    subject[subjIndx] +
    " " +
    action[actionIndex] +
    " " +
    possetion[possetionIndex] +
    " " +
    where[whereIndex]
  );
};
