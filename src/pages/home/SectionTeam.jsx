import {
  ContainerWrapper,
  defaultTheme,
  desktop,
  mobile,
  tablets,
  team,
} from "componenents/utils";
import styled from "styled-components";

const SectionTeamContainer = styled(ContainerWrapper)`
  display: relative;
  padding: 0 20px;
  margin-top: 96px;

  .section-subtitle {
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    color: ${defaultTheme.textColor};
    margin-bottom: 64px;
    line-height: 2;
  }

  .emoji {
    height: 20px;
    position: relative;
    top: 0.2em;
    padding-left: 5px;
  }

  .teams {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 30px;
    justify-content: center;
    ${desktop} {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .team-member {
    .team-member__img-container {
      position: relative;
      margin-bottom: 24px;
      margin-top: 12px;

      ${tablets} {
        margin-top: 16px;
      }
    }

    .team-member__link {
      cursor: pointer;
    }

    .team-member__img,
    .image-design {
      margin: 0 auto;
      border: 10px;
      width: 8rem;
      height: 8rem;
      border-radius: 10px;

      ${mobile} {
        width: 160px;
        height: 160px;
      }

      ${tablets} {
        width: 200px;
        height: 200px;
      }
    }

    .team-member__img {
      z-index: 10;
      position: relative;
      display: block;
    }

    .image-design {
      content: "";
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      right: 0;
      transform: rotate(8deg);
      background-image: linear-gradient(0deg, #2e5572, #1f3d53);
    }

    .team-member__name {
      font-size: 18px;
      color: ${defaultTheme.headerText};
      margin-bottom: 20px;
      font-weight: 600;
    }

    .team-member__position {
      font-size: 16px;
      color: ${defaultTheme.textColor};
      font-weight: 400;
    }
  }
`;

const SectionTeams = () => (
  <SectionTeamContainer id="team">
    <h2 data-text="The Team" className="shadowed-title center-text">
      The Team
    </h2>
    <h3 className="section-subtitle">
      Meet the working bees
      <img src="/images/beeemoji.png" className="emoji" alt="" />
    </h3>
    <div className="teams">
      {team.map(({ linkedlnUrl, name, position }, index) => (
        <div className="team-member" key={index}>
          <div className="team-member__img-container">
            <a
              href={linkedlnUrl}
              className="team-member__link"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={`/images/${name.split(" ")[0].toLocaleLowerCase()}.jpg`}
                className="team-member__img"
                alt={`${name} a member hyve team `}
              />
            </a>
            <div className="image-design"></div>
          </div>
          <div className="center-text">
            <h4 className="team-member__name">{name}</h4>
            <h5 className="team-member__position">{position}</h5>
          </div>
        </div>
      ))}
    </div>
  </SectionTeamContainer>
);

export default SectionTeams;
