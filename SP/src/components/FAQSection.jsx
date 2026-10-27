import { useState } from 'react';

const questions = [
  { question: 'What kinds of trips can I ask about?', answer: 'Social Prefect Tours lists group tours, daycations, and private or family trips. Send us your idea and we’ll confirm what is currently available.' },
  { question: 'How do I book a trip?', answer: 'Fill in the planning form and continue to WhatsApp. Your name, contact, preferred trip style, group size, and notes will be ready for you to review and send.' },
  { question: 'Do you have fixed destinations and prices?', answer: 'Current destinations, dates, and prices were not published in the sources we could verify. Contact the team directly for up-to-date options before making plans.' },
  { question: 'Can you help plan for a group or family?', answer: 'Yes. Use the booking form to choose a group tour or private / family trip and include your group size and any needs or occasion you would like the team to know about.' },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section aria-labelledby="faq-title" className="faq-section">
      <div className="faq-layout section-wrap">
        <div className="faq-intro">
          <span className="eyebrow"><i /> GOOD TO KNOW</span>
          <h2 id="faq-title">Before you<br /><em>head out.</em></h2>
          <p>Have something else in mind? Share it with us directly.</p>
          <a className="text-link" href="#booking">Ask about a trip <span aria-hidden="true">↗</span></a>
        </div>
        <div className="faq-list">
          {questions.map((item, index) => (
            <article className={`faq-item ${openIndex === index ? 'is-open' : ''}`} key={item.question}>
              <h3>
                <button aria-controls={`faq-answer-${index}`} aria-expanded={openIndex === index} onClick={() => setOpenIndex((current) => current === index ? -1 : index)} type="button">
                  <span>{item.question}</span><i aria-hidden="true">{openIndex === index ? '−' : '+'}</i>
                </button>
              </h3>
              {openIndex === index && <p id={`faq-answer-${index}`} className="faq-answer">{item.answer}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;