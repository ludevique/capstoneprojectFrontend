import React from "react";

const LandingPage = () => {
  return (
    <div className="container">
      <div className="intro">
        <div className="about">
          <h2>About Us</h2>
          <p>
            Welcome to our study center, a dedicated platform designed with
            you—the self-taught learner—in mind. We understand that navigating
            through the vast sea of available resources can be overwhelming and
            frustrating. Whether you struggle with finding the right material or
            get lost in the plethora of information, we're here to help
            streamline your learning journey and make it more manageable and
            effective.
          </p>
        </div>
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            As self-taught learners ourselves, we know firsthand the challenges
            of finding and accessing quality educational resources. The journey
            to becoming a proficient software engineer involves sifting through
            countless resources, some of which may not be structured or suited
            to your learning style. Our mission is to alleviate these
            frustrations by offering a comprehensive, organized, and
            user-friendly platform tailored to your needs.
          </p>
        </div>
        <div className="focus">
          <h2>What We Offer</h2>
          <p>
            Our platform is designed to be your one-stop destination for
            learning web development and programming. We offer a structured
            learning path that covers everything you need to become a successful
            software engineer. Here’s what you can expect:
            <br />
            <ul>
              <li>
                Curated Learning Paths: We provide carefully designed learning
                paths that guide you through the essential stages of web
                development. Start with the basics—HTML, CSS, and JavaScript—and
                progress to advanced concepts with ease. Each path is crafted to
                build your skills systematically, ensuring a strong foundation
                before moving on to more complex topics.
              </li>
              <li>
                Comprehensive Resources: Our database includes a wide range of
                resources, from beginner tutorials to advanced guides. We curate
                content from reputable sources to ensure you have access to
                high-quality materials. Our platform features interactive video
                tutorials, and practical exercises to enhance your learning
                experience.
              </li>
              <li>
                Hands-On Projects: Learning by doing is key to mastering
                programming. Our platform includes a variety of hands-on
                projects and coding challenges that allow you to apply what
                you’ve learned in real-world scenarios. These projects are
                designed to reinforce your skills and build a portfolio that
                showcases your abilities to potential employers.
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div className="image">
          <img src="src\components\png.png" alt="placeholder" />
        </div>
    </div>
  );
};

export default LandingPage;
