import TeamCard from "./TeamCard";
import "./TeamCard.css";
import MemberImages from '../../src/assets/TeamMembers/TeamMembers'

export default function TeamHolder() {
  return (
    <>
      <div className="card_holder_team">
        <h2 className="contributors">Student Coordinators</h2>
        <h2 style={{ marginTop: "5px" }}>Lead Member</h2>
        <div className="team_con">
          <TeamCard
            name="Charishma Bollineni"
            link="https://www.linkedin.com/in/charishma-bollineni-46a625283/"
            image={MemberImages.Charishma}
            className="lead"
          />
        </div>
        <h2>Web Development Team</h2>
        <div className="team_con">
          <TeamCard
            name="Anuroop Reddy"
            link="https://github.com/anuroopreddy21"
            image={MemberImages.anuroop}
            design={false}
            title="anuroopreddy21"
          />
          <TeamCard
            name="Koushik P"
            link="https://github.com/koushik8686"
            image={MemberImages.Koushik}
            design={false}
            title="koushik8686"
          />
          <TeamCard
            link="https://github.com/naman-0105"
            image={MemberImages.naman}
            name="Naman Goyal"
            design={false}
            title="
            naman-0105"
          />
          <TeamCard
            name="Ayush Pratap Singh"
            link="https://github.com/Ayush-aps"
            image={MemberImages.Ayush}
            design={false}
            title="Ayush-aps"
          />
        </div>
        <h2>Design Team</h2>
        <div className="team_con">
            <TeamCard
            name="Shreeraj M"
            link="https://www.linkedin.com/in/m-shreeraj/"
            image={MemberImages.Shree}
            design={true}
            title="ShreeRaj Mummidivarapu"
          />
          <TeamCard
            name="Meghana"
            link="https://www.linkedin.com/in/kuruva-meghana-51b004319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            image={MemberImages.meghana}
            title="Kuruva Meghana"
            design={true}
          />

        </div>
      </div>
    </>
  );
}
