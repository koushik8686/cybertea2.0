import PatronCard from "./PatronCard";
import "./PatronCard.css";

export default function Patron() {
  return (
    <>
      <div className="card_holder_patron">
        <h2>Chief Patron</h2>
        <div className="workshop_con">
          <PatronCard
            name="Prof. D.V.L.N. Somayajulu"
            img="/img/director.png"
            link="https://www.iiits.ac.in/home/administration/director/"
            title="Director, IIIT Sri City, Chittoor"
          />
        </div>
        <h2>Workshop Conveners</h2>
        <div className="workshop_con">
          <PatronCard
            name="Dr. Neha Agrawal"
            img="/img/neha_maam.jpg"
            link="https://www.linkedin.com/in/dr-neha-agrawal-0a32776b/"
            title="Assistant Professor, IIIT Sri City"
          />
          <PatronCard
            link="https://www.linkedin.com/in/nikhil-tripathi/"
            name="Dr. Nikhil Tripathi"
            title="Assistant Professor, IIIT Sri City"
            img="/img/1659677963779.jpeg"
          />
        </div>
      </div>
    </>
  );
}
