import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <header className="w-full max-w-4xl flex flex-col md:flex-row justify-between items-center py-4 text-center md:text-left bg-black bg-opacity-50 rounded-lg shadow-md" role="banner">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-extrabold text-white-400 animate-pulse">Muhammad Amirul Aiman</h1>
        </div>
        <nav className="mt-2 md:mt-0" role="navigation" aria-label="Main navigation">
          <ul className="flex space-x-6 text-lg">
            <li><a href="#about" className="text-white-400 hover:text-white transition transform duration-500 ease-in-out hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400" aria-label="About section">About</a></li>
            <li><a href="#skills" className="text-white-400 hover:text-white transition transform duration-500 ease-in-out hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400" aria-label="Skills section">Skills</a></li>
            <li><a href="#projects" className="text-white-400 hover:text-white transition transform duration-500 ease-in-out hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400" aria-label="Projects section">Projects</a></li>
            <li><a href="#contact" className="text-white-400 hover:text-white transition transform duration-500 ease-in-out hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400" aria-label="Contact section">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section className="w-full max-w-4xl flex flex-col md:flex-row items-center mt-10 text-center md:text-left">
        <div className="md:w-2/3">
          <h2 className="text-5xl font-extrabold text-white">Muhammad Amirul Aiman</h2>
          <p className="text-gray-400 mt-4 text-lg">Bachelor of Information Systems (Hons) | Software Engineer | Passionate about Web & Mobile Development</p>
        </div>
        <div className="md:w-1/3 flex justify-center md:justify-end mt-6 md:mt-0">
          <img
            src="profilePhoto.png"
            alt="Muhammad Amirul Aiman"
            className="w-64 h-64 md:w-80 md:h-80 object-cover shadow-xl rounded-lg transform hover:scale-105 transition duration-400 ease-in-out"
          />
        </div>
      </section>
      <section id="about" className="w-full max-w-4xl mt-10 text-center md:text-left p-6 bg-gradient-to-r from-gray-800 to-black rounded-lg shadow-lg">
        <h3 className="text-4xl font-bold text-purple-400">About Me</h3>
        <div className="mt-4 text-white text-lg space-y-4">
          <p><strong>🎓 Past:</strong> A dedicated university student who consistently made the Dean’s List for six consecutive semesters, proving academic excellence and passion for software engineering.</p>
          <p><strong>💼 Present:</strong> Currently interning as an IT Testing Assurance Intern at Edwards Lifesciences, where I focus on test management updates, process enhancements, and software development.</p>
          <p><strong>🚀 Future:</strong> Aspiring to secure a software engineering role where I can build impactful web and mobile applications, leveraging my skills in Java, MySQL, Flutter, and Swift UI.</p>
        </div>
      </section>

      <section id="skills" className="w-full max-w-4xl mt-10">
        <h3 className="text-4xl font-bold text-purple-400">Skills</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-800 bg-opacity-20 shadow-lg rounded-lg hover:scale-105 transform transition duration-400 ease-in-out">
            <h4 className="text-2xl font-semibold">Front-End Development</h4>
            <p className="text-gray-400">HTML, CSS, JavaScript, React, Flutter, Swift UI</p>
          </div>
          <div className="p-6 bg-gray-800 bg-opacity-20 shadow-lg rounded-lg hover:scale-105 transform transition duration-400 ease-in-out">
            <h4 className="text-2xl font-semibold">Back-End Development</h4>
            <p className="text-gray-400">Java, Next.js, PHP, MySQL, MVC.NET</p>
          </div>
          <div className="p-6 bg-gray-800 bg-opacity-20 shadow-lg rounded-lg hover:scale-105 transform transition duration-400 ease-in-out">
            <h4 className="text-2xl font-semibold">Mobile Development</h4>
            <p className="text-gray-400">Flutter, Swift, Android Studio, Xcode</p>
          </div>
          <div className="p-6 bg-gray-800 bg-opacity-20 shadow-lg rounded-lg hover:scale-105 transform transition duration-400 ease-in-out">
            <h4 className="text-2xl font-semibold">Others</h4>
            <p className="text-gray-400">Git, GitHub, Agile, Scrum, RESTful APIs</p>
          </div>
        </div>
      </section>
      <section id="projects" className="w-full max-w-4xl mt-10">
        <h3 className="text-4xl font-bold text-purple-400">Projects</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-800 bg-opacity-20 shadow-lg rounded-lg hover:scale-105 transform transition duration-400 ease-in-out">
            <h4 className="text-2xl font-semibold">🍽️ Mobile-Based Dining Companion App</h4>
            <p className="text-gray-400">An app to help users find dining partners and explore restaurants.</p>
          </div>
          <div className="p-6 bg-gray-800 bg-opacity-20 shadow-lg rounded-lg hover:scale-105 transform transition duration-400 ease-in-out">
            <h4 className="text-2xl font-semibold">🍲 Food Donation Mobile Application</h4>
            <p className="text-gray-400">A platform connecting food donors with charities to reduce food waste.</p>
          </div>
          <div className="p-6 bg-gray-800 bg-opacity-20 shadow-lg rounded-lg hover:scale-105 transform transition duration-400 ease-in-out">
            <h4 className="text-2xl font-semibold">⚽ Football Team Management System</h4>
            <p className="text-gray-400">A JavaDB-based system to manage football teams and schedules.</p>
          </div>
          <div className="p-6 bg-gray-800 bg-opacity-20 shadow-lg rounded-lg hover:scale-105 transform transition duration-400 ease-in-out">
            <h4 className="text-2xl font-semibold">💰 Splitwise Alternative App</h4>
            <p className="text-gray-400">A budget management app with local and cloud database support.</p>
          </div>
        </div>
      </section>
      <section id="contact" className="w-full max-w-4xl mt-10 text-center p-6 bg-gray-800 bg-opacity-20 rounded-lg shadow-lg">
        <h3 className="text-4xl font-bold text-purple-400">Contact</h3>
        <p className="text-gray-400 mt-2 text-lg">Feel free to reach out to me:</p>
        <p className="text-gray-400 text-lg">📧 <a href="mailto:amirulaimann17@gmail.com" className="text-purple-400 hover:text-white transition duration-400 ease-in-out">amirulaimann17@gmail.com</a></p>
        <p className="text-gray-400 text-lg">📍 Kuala Lumpur, Malaysia</p>
        <p className="text-gray-400 text-lg">🔗 <a href="https://www.linkedin.com/in/muhammad-amirul-aiman-shahrizar" className="text-purple-400 hover:text-white transition duration-400 ease-in-out">LinkedIn</a></p>
      </section>
    </main>
  );
}
