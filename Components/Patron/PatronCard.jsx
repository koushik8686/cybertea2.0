import "./PatronCard.css";

export default function PatronCard(props) {
  return (
    <>
      <a className="card-client" href={props.link} target="_blank">
        <div className="user-picture">
          <img src={props.img} />
        </div>
        <div className="info_container">
          <h4>{props.name}</h4>
          <h5> {props.title}</h5>
        </div>
      </a>
    </>
  );
}
