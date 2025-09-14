import { useEffect } from "react";
import "./CareerHistory.css";
interface CareerHistoryProps {
  id?: string; // prop opcional para el id
}
function CareerHistory({ id }: CareerHistoryProps) {
  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 } // Se activa cuando 20% del item es visible
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="career-history">
      <h2 className="career-title">Career History</h2>
      <div className="timeline">
        {/* Item 1 */}
        <div className="timeline-item">
          <div className="timeline-date">Feb 2024 – Present</div>
          <div className="timeline-content">
            <h3 className="job-title">Lead Front-End Designer</h3>
            <p className="company">SpaceTech</p>
            <p className="duration">(1 year 6 months)</p>
            <ul>
              <li>Spearheaded the design and implementation of engaging, user-friendly interfaces for educational tools focused on programming and space-related subjects.</li>
              <li>Oversaw front-end development ensuring functionality, usability, and visual appeal.</li>
              <li>Collaborated closely with multidisciplinary teams to deliver high-quality, interactive learning platforms.</li>
            </ul>
          </div>
        </div>

        {/* Item 2 */}
        <div className="timeline-item">
          <div className="timeline-date">Feb 2023 – Jun 2023</div>
          <div className="timeline-content">
            <h3 className="job-title">Teaching Assistant – Data Structures and Algorithms</h3>
            <p className="company">Universidad de los Andes</p>
            <p className="duration">(5 months)</p>
            <ul>
              <li>Conducted laboratory sessions and guided students in mastering core programming concepts.</li>
              <li>Evaluated assignments and provided feedback to enhance project outcomes.</li>
              <li>Developed learning materials and resources for undergraduate courses.</li>
            </ul>
          </div>
        </div>

        {/* Voluntariado */}
        <div className="timeline-item">
          <div className="timeline-date">Sep 2025</div>
          <div className="timeline-content">
            <h3 className="job-title">Volunteer – Mentorship</h3>
            <p className="company">Pylatino</p>
            <p className="duration">(1 day)</p>
            <ul>
              <li>Participated as a volunteer monitor teaching Python programming to students.</li>
              <li>Facilitated practical exercises and solved doubts to reinforce concepts.</li>
              <li>Promoted collaborative learning in an inclusive environment.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerHistory;
