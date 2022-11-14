import React from "react";

const ReferText = ({ num , name, desc, descBasic, descApple, descVer, descStar}) => {
  return (
  <li>
    <a href="/">
    <span className="num">{num}</span>
    <span className="name">{name}</span>
    <span className="desc">{desc}</span>
    <span className="descBasic">{descBasic}</span>
    <span className="descApple">{descApple}</span>
    <span className="descVer">{descVer}</span>
    <span className="descStar">{descStar}</span>
    </a>
  </li>
  );
}

const ReferCont = ({ references }) => {

  // console.log(references);

  return (
    <section className="cont__refer">
      <div className="container">
        <div className="refer__inner">
          <h2>CSS</h2>
          <ul className="refer__list">
            {references.map((refer , idx) => (
              <ReferText 
                key = {idx}
                num = {refer.num}
                name = {refer.name}
                desc = {refer.desc}
                descBasic = {refer.descBasic}
                descApple = {refer.descApple}
                descVer = {refer.descVer}
                descStar = {refer.descStar}
                definition = {refer.definition}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default ReferCont;