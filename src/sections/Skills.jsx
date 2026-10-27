import { Icon } from "@iconify/react";
import { skills } from "../data/skills.js";

export default function Skills() {
  return (
    <section id="skills" className="app-container">
      <h1 className="font-title text-section">/Skills</h1>

      {skills.map((group) => (
        <section key={group.id}>
          <h2 className="font-title text-3xl xl:text-4xl mt-10">
            {group.category}
          </h2>
          <div className="flex flex-wrap gap-5 xl:gap-15 mt-6 xl:ml-15">
            {group.items.map((skill) => (
              <div key={skill.id} className="flex flex-col items-center gap-2">
                {skill.iconType === "iconify" ? (
                  <Icon
                    icon={skill.icon}
                    // width="70"
                    // height="70"
                    className="size-12 xl:size-18"
                  />
                ) : (
                  <img
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                    // width="70"
                    // height="70"
                    className="object-contain size-12 xl:size-18"
                  />
                )}

                <p className="hidden lg:block font-text font-medium xl:text-xl">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </section>
      ))}
      <br /><br /><br /><br /><br /><br /><br />
    </section>
  );
}
