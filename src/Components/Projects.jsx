const Projects = () => {
  const img = "https://i.postimg.cc/Wpr0kv5n/Screenshot-2023-12-11-181448.png";
  return (
    <div>
      <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl text-center my-5">
        My Projects
      </h1>
      <section className="w-11/12 md:w-4/5 mx-auto my-5 md:my-8 lg:my-12">
        <div className="carousel">
          <div id="slide1" className="carousel-item relative w-full h-[500px]">
            <div className="relative w-full">
              <img src={img} className="w-full h-[500px]" />
              <a
                className="text-red-800 text-2xl font-extrabold absolute -mt-10 ml-5 text-center w-full"
                href="https://job-seeking-a86ff.web.app"
              >
                Project Live Link
              </a>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
          <div className="relative w-full">
              <img src= "https://i.postimg.cc/K4XYFjKH/Screenshot-2023-12-11-185157.png" className="w-full h-[500px]" />
              <a
                className="text-red-800 text-2xl font-extrabold absolute -mt-10 ml-5 text-center w-full"
                href="https://event-management-assignm-7f14b.firebaseapp.com/"
              >
                Project Live Link
              </a>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
          <div className="relative w-full">
              <img src= "https://i.postimg.cc/zvNJPM4s/Screenshot-2023-12-11-190101.png" className="w-full h-[500px]" />
              <a
                className="text-red-800 text-2xl font-extrabold absolute -mt-10 ml-5 text-center w-full"
                href="https://brand-shop-d7a8b.firebaseapp.com"
              >
                Project Live Link
              </a>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
