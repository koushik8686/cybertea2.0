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
            link="https://github.com/sosenkkk"
            image={MemberImages.Shashank}
            design={false}
            title="sosenkkk"
          />
          <TeamCard
            name="Koushik P"
            link="https://mithun-750.github.io/"
            image={MemberImages.Mithun}
            design={false}
            title="Mithun.U"
          />
          <TeamCard
            link="https://github.com/Vinayak-Anand"
            image={MemberImages.Vinayak}
            name="Vinayak Anand"
            design={false}
            title="
            Vinayak-Anand"
          />
          <TeamCard
            name="Charishma Bollineni"
            link="https://github.com/Charishma608"
            image={MemberImages.Charishma}
            design={false}
            title="Charishma608"
          />
        </div>
        <h2>Design Team</h2>
        <div className="team_con">
          <TeamCard
            name="Ayan Raza"
            link="https://www.linkedin.com/in/iamayan2011/"
            image={MemberImages.Ayan}
            title="Design Team"
            design={true}
          />
          <TeamCard
            name="Akansh Vaibhav"
            link="https://www.linkedin.com/in/akansh-vaibhav-040524222/"
            image={MemberImages.Aakansh}
            design={true}
            title="Design Team"
          />

        </div>
      </div>
    </>
  );
}
