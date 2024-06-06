import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqData = [
  {
    question: "How do I create an account?",
    details: "To create an account, click on the Sign-Up link in the top navigation bar and fill in the required information."
  },
  {
    question: "How do I book a package?",
    details: "Once you have created an account and logged in, navigate to the Packages section and select a package to book."
  },
  {
    question: "Check your booking status",
    details: "Explore your journey's progress with a quick glance at your booking status."
  },
  {
    question: "Who do I contact for support?",
    details: "If you need support, please contact us at support@bonvoyage.com or call us at 1-800-123-4567."
  }
];

const FAQ = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="faq-container">
      {faqData.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          disableGutters
          elevation={0}
          sx={{ boxShadow: "none",
        width:"70%" }}
        >
          <AccordionSummary
            sx={{
              backgroundColor: "rgb(6, 146, 165)",
              marginBottom: "20px",
              color: "white",
              border: "none"
            }}
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            {item.question}
          </AccordionSummary>
          <AccordionDetails>
            {item.details}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default FAQ;
