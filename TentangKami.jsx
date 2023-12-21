import React, { useState } from "react";
import ReactImage from "../assets/yvidn.png";

const TentangKami = () => {
  const [activeTab, setActiveTab] = useState("Human Rights");

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img src={ReactImage} alt="Yourvoice.Idn" />
            </div>
            <div className="about-col-2">
              <h1 className="sub-tittle">Hello!</h1>
              <p className="rata">
                Hello! We are Yourvoice.Idn, a platform dedicated to exploring
                issues like human rights, social movements, and CSE. Together we
                advocate our voice for the better world!
              </p>
              <hr />
              <div className="tab-tittles">
                <p
                  className={`tab-links ${
                    activeTab === "Human Rights" && "active-link"
                  }`}
                  onClick={() => openTab("Human Rights")}
                >
                  Human Rights
                </p>
                <p
                  className={`tab-links ${
                    activeTab === "Social Movement" && "active-link"
                  }`}
                  onClick={() => openTab("Social Movement")}
                >
                  Social Movement
                </p>
                <p
                  className={`tab-links ${
                    activeTab === "CSE" && "active-link"
                  }`}
                  onClick={() => openTab("CSE")}
                >
                  CSE
                </p>
              </div>
              <br />
              <div
                className={`tab-contents ${
                  activeTab === "Human Rights" && "active-tab"
                }`}
              >
                <ul>
                  <li>
                    <span>Human Rights</span>
                    <br />
                    {
                      "Human Rights, when translated, is referred to as 'hak asasi manusia' (HAM) in which this constitutes a series of rights inherent to every individual simply because they are human. These rights are considered universal, inherent (intrinsic to human beings), and can be recognized without discrimination based on race, skin color, gender, language, religion, sexual orientation, politics, or other factors. Human rights encompass civil, political, economic, social, and cultural rights."
                    }
                  </li>
                </ul>
              </div>
              <div
                className={`tab-contents ${
                  activeTab === "Social Movement" && "active-tab"
                }`}
              >
                <ul>
                  <li>
                    <span>Social Movement</span>
                    <br />
                    {
                      "Social movements are movements initiated by the community with the goal of bringing about social change. Social movements can arise in response to dissatisfaction or inequality within society and may encompass various issues such as civil rights, the environment, gender, race, religion, or economics. Some significant social movements that have occurred worldwide include the Civil Rights Movement in the United States during the 1950s and 1960s, the Anti-Apartheid Movement in South Africa, Environmental Movements like Greenpeace, as well as various women's rights movements around the globe."
                    }
                  </li>
                </ul>
              </div>
              <div
                className={`tab-contents ${
                  activeTab === "CSE" && "active-tab"
                }`}
              >
                <ul>
                  <li>
                    <span>CSE</span>
                    <br />
                    {
                      "Child Sexual Exploitation (CSE) is a situation in which children are sexually abused for personal gain or the gain of others. This includes the exploitation of children, such as coercion, rape, or the production of pornographic materials involving children. CSE also encompasses the trafficking of children for sexual purposes. Some forms of CSE crimes involve the recruitment, transportation, buying, or provision of children for sexual purposes. This can occur physically or through online exploitation, where children may become targets of harassment or deception facilitated by the internet."
                    }
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="copyright">
        <p>©YourvoiceIdn - 2023</p>
      </div>
    </div>
  );
};

export default TentangKami;
