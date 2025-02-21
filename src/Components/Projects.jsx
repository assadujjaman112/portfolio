const Projects = () => {
  const projects = [
    {
      name: "Bermiz",
      technologies: [
        "JavaScript",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      link: "https://multi-perpuse-restaurant.web.app",
      image: "https://i.postimg.cc/0NMyZbg8/bermiz.png",
    },
    {
      name: "GadgetGrove",
      technologies: [
        "JavaScript",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
      ],
      link: "https://brand-shop-d7a8b.web.app",
      image: "https://i.postimg.cc/2jF80stB/gadget-Grove.png",
    },
    {
      name: "iApplyNow",
      technologies: [
        "JavaScript",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
      ],
      link: "https://job-seeking-a86ff.web.app",
      image: "https://i.postimg.cc/NfsGSNhC/job-Seeking.png",
    },
  ];
  return (
    <div>
      <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl text-center my-5">
        My Projects
      </h1>
      <section className="w-11/12 md:w-4/5 mx-auto my-5 md:my-8 lg:my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects?.map((project, i) => (
          <a href={project.link} key={i}>
            <div className="bg-slate-800 px-3 pt-3 pb-10 rounded-lg">
              <img
                src={project.image}
                alt=""
                className="w-full h-[400px] object-right-top rounded-t-lg"
              />
              <div className="mt-4 flex justify-between items-center">
                <h4 className="text-white text-3xl font-semibold mb-3">
                  {project.name}
                </h4>
                <a
                  href={project.link}
                  className="text-sm font-bold text-blue-400 hover:underline"
                >
                  Project Live Link
                </a>
              </div>
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {project?.technologies?.map((tech, i) => (
                  <div
                    key={i}
                    className="text-sm bg-blue-200 font-semibold px-3 py-1 rounded-lg"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </a>
        ))}
      </section>
    </div>
  );
};

export default Projects;
