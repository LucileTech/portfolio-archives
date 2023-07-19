import React from "react";
import avatarbis from "./../../Images/familyarchives.jpg";

const Aboutme = ({ theme }: { theme: string }) => {
  return (
    <div className="App-section" id="aboutSection">
      <h2 className="Section-title">ABOUT LUCILE</h2>
      <div className="AboutmeContent">
        <div className="AboutmeText">
          <p className="AboutmeParagraph">
            Lucile is an accomplished archive researcher with a remarkable
            career spanning seven years in Paris. Her expertise lies in
            clearance and research of archives, making her an invaluable asset
            in the production of documentaries, TV shows, and news programs.
            With meticulous attention to detail and an extensive knowledge of
            archival sources, Lucile has contributed to numerous projects,
            unearthing hidden stories and showcasing her passion for news and
            historical narratives.
          </p>
          <p className="AboutmeParagraph">
            During her time in Paris, Lucile's talents shone through as she
            navigated the complexities of obtaining clearance for archival
            materials. With her dedication to accuracy and her ability to
            seamlessly integrate archival footage into the narrative, she played
            a pivotal role in several acclaimed documentaries, enriching them
            with her meticulous research and contributing to their success.
          </p>
          <p className="AboutmeParagraph">
            In addition to her work in the realm of documentaries, Lucile's
            versatility extends to television shows and news programs.
            Collaborating closely with journalists, she has played a crucial
            role in ensuring that the stories presented to the public are
            supported by reliable and compelling archival evidence. Lucile's
            expertise in archive research has not only enhanced the authenticity
            of these programs but has also contributed to their overall quality
            and impact. Moreover, her exceptional organizational skills have
            made her adept at managing budgets, adding another layer of value to
            her contributions.
          </p>
          <p className="AboutmeParagraph">
            Now based in San Francisco, Lucile has embarked on a new chapter of
            her career. Equipped with a work permit, she is eager to explore new
            opportunities and expand her professional horizons. Lucile's passion
            for storytelling extends beyond archive research, as she has delved
            into screenwriting and directed an award-winning documentary. Her
            unwavering commitment to her craft promises to captivate and inspire
            audiences, as she continues to make a profound impact on the
            creative landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
