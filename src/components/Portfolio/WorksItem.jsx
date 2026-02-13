import React from "react";

function WorksItem({ item }) {
  return (
    <div key={item.id} className="work__card">
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      {/* <a href="#" className="work__button">
        Demo <i className="bx bx-right-arrow-alt work__button-alt"></i>
      </a> */}
    </div>
  );
}

export default WorksItem;
