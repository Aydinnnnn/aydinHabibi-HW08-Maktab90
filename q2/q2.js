"use strict";
const elemCreator = function (element, cb) {
  const newElem = document.createElement(element);
  cb(newElem);
  document.body.append(newElem);
};
elemCreator("div", (elem) => {
  elem.style.backgroundColor = "green";
  elem.style.width = "25px";
  elem.style.height = "25px";
});
