import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import * as styles from './index.module.css';
import NavBar from "../components/navbar/NavBar";
import IntroArea from "../components/introarea/IntroArea";
import PersonalInfoCard from "../components/personalinfocard/PersonalInfoCard";
import Station from "../components/station/Station";
import SkillCard from "../components/skillcard/SkillCard";
import SkillDetailsArea from "../components/skilldetailsarea/SkillDetailsArea";

const mockedStations = [{
  year: '2022',
  text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.

  Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua`
},
{
  year: '2021',
  text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.

  Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua`

},
{
  year: '2020',
  text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.

  Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua`

}
];

const mockedSkills = [
  {
    name: "Programmier-\nsprachen",
    values: [
      { name: "Java", level: 0.8 }
    ]
  },
  {
    name: "Backend",
    values: [
      { name: "Java", level: 0.8 }
    ]
  },
  {
    name: "Web & Mobile",
    values: [
      { name: "Java", level: 0.8 }
    ]
  },
  {
    name: "DevOps",
    values: [
      { name: "Docker", level: 0.8 },
      { name: "Kubernetes", level: 0.7 }
    ]
  },
  {
    name: `Projekt- &
    \n Anforderungs-
    \n mgmt`,
    values: [
      { name: "Java", level: 0.8 }
    ]
  }
];


const IndexPage: React.FC<PageProps> = () => {
  const [selectedSkill, setSelectedSkill] = React.useState(mockedSkills[0].name);

  const handleSelectedSkillChagen = (newSkill: string) => {
    setSelectedSkill(newSkill);
  };


  return (
    <main>
      <NavBar />
      <section className={styles.introsection}>
        <IntroArea />
        <div className={styles.card}>
          <div className={styles.subcard}>
            <PersonalInfoCard />
          </div>
        </div>
      </section>
      <section className={styles.stationenSection}>
        <h2>Stationen</h2>
        {
          mockedStations.map(stat => <Station key={`stat_key_${stat.year}`} year={stat.year} text={stat.text} />)
        }
      </section>
      <section className={styles.skillSection}>
        <h2>Skills</h2>
        <div className={styles.skillcontainer}>
          {
            mockedSkills.map(skill =>
              <SkillCard
                acitve={skill.name === selectedSkill}
                skillName={skill.name}
                key={`key_skillcard_${skill.name}`}
                onClick={() => handleSelectedSkillChagen(skill.name)} />)
          }
        </div>
      </section>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>bschulz.dev</title>
