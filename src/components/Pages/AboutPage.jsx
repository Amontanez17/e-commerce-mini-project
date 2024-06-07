function AboutPage() {
  return (
    <div>
      <h1>About Page</h1>
      <p>Here is some information about our project.</p>
      <h2>The team</h2>
      <div>
        <img src="#img" alt="profile image" />
        <h3>member1</h3>
        <a href="#githuburl">check out my GitHub</a>{" "}
        <a href="#linkedin">LinkedIn</a>
      </div>

      <div>
        <img src="#img" alt="profile image" />
        <h3>member2</h3>
        <a href="#githuburl">check out my GitHub</a>
        <a href="#linkedin">LinkedIn</a>
      </div>
    </div>
  );
}

export default AboutPage;
