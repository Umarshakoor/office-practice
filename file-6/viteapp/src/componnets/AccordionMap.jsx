import { useState } from "react";

const AccordionMap = () => {
  // Initial state
  const [accordions, setAccordions] = useState([
    {
      id: 1,
      name: "Accordion 1",
      checkboxes: [
        { id: 1, label: "Checkbox 1", type: "checkbox" },
        { id: 2, label: "Checkbox 2", type: "checkbox" },
      ],
    },
    {
      id: 2,
      name: "Accordion 2",
      checkboxes: [
        { id: 3, label: "Checkbox 3", type: "checkbox" },
        { id: 4, label: "Checkbox 4", type: "checkbox" },
      ],
    },
  ]);

  // Add a new accordion
  const addAccordion = () => {
    const newId = accordions.length + 1;
    setAccordions([
      ...accordions,
      {
        id: newId,
        name: `Accordion ${newId}`,
        checkboxes: [
          { id: newId * 10 + 1, label: "New Checkbox", type: "checkbox" },
        ],
      },
    ]);
  };

  // Handle form change
  const handleFormChange = (accordionId, checkboxId, event) => {
    const newAccordions = accordions.map((acc) => {
      if (acc.id === accordionId) {
        const newCheckboxes = acc.checkboxes.map((cb) => {
          if (cb.id === checkboxId) {
            return { ...cb, label: event.target.value };
          }
          return cb;
        });
        return { ...acc, checkboxes: newCheckboxes };
      }
      return acc;
    });
    setAccordions(newAccordions);
  };

  // Remove an accordion
  const removeAccordion = (id) => {
    setAccordions(accordions.filter((acc) => acc.id !== id));
  };

  return (
    <div>
      {accordions.map((accordion) => (
        <div
          key={accordion.id}
          style={{
            marginBottom: "20px",
            border: "1px solid #ccc",
            padding: "10px",
          }}
        >
          <h3>{accordion.name}</h3>
          {accordion.checkboxes.map((checkbox) => (
            <div key={checkbox.id}>
              <input
                type={checkbox.type}
                value={checkbox.label}
                onChange={(e) => handleFormChange(accordion.id, checkbox.id, e)}
              />
              <label>{checkbox.label}</label>
            </div>
          ))}
          <button onClick={() => removeAccordion(accordion.id)}>Remove</button>
        </div>
      ))}
      <button onClick={addAccordion}>Add Accordion</button>
    </div>
  );
};

export default AccordionMap;
