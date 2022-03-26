import React from 'react';
import './Accordion.css'

const Accordion = () => {
    return (
        <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            How react works?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>React is a JS Library which we use for building user interfaces.React use components which represent logical,reusable parts of the UI.In component react use JS function to return the expected outcome which is JSX.We can pass data data in a component as Props argument which we can use in UI.React also gives permission to create own states of components which is hook (useState).That's all i know so far. </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Props VS State
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">

             <h6>
             State <br />
1. State are mutable
<br />
2. We can define states in the component itself.
<br />
3. The state is set and updated by the object.
<br />
br
Props
<br /><br />
1. Props are immutable
<br />
2. We can pass properties from parent components
<br />
3. Determine the view upon creation, and then they remain static

             </h6>
            </div>
          </div>
        </div>
      
      </div>
    );
};

export default Accordion;