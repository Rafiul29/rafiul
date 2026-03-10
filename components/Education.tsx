import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { EducationCard } from './ui/EducationCard';

const education = [
  {
    degree: 'B.Sc. in Computer Science and Engineering',
    institution: 'Islamic University, Kushtia',
    period: '2019 – 2025',
    score: 'CGPA: 3.34 / 4.00',
  },
  {
    degree: 'Higher Secondary Certificate (Science)',
    institution: 'Govt. Shaheed Bulbul College, Pabna',
    period: '2015 – 2017',
    score: 'GPA: 4.50 / 5.00',
  },
  {
    degree: 'Secondary School Certificate (Science)',
    institution: 'Rajapur High School, Natore',
    period: '2013 – 2015',
    score: 'GPA: 4.72 / 5.00',
  },
];

export function Education() {
  return (
    <SectionBackground>
      <section id="education">
        <div className="container mx-auto px-8">
          <SectionTitle subtitle="Where I learned theory and then forgot half of it while learning to actually code 😅">Education</SectionTitle>
          <div className="max-w-5xl mx-auto space-y-10">
            {education.map((edu, index) => (
              <EducationCard key={edu.degree} {...edu} isLast={index === education.length - 1} />
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
