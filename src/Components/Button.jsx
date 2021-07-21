import  ToggleButton  from 'react-bootstrap/ToggleButton'; 
import React, {useState} from 'react';

export default function Button() {
  const [checked, setChecked] = useState(false);
  return(
  <ToggleButton
          className="mb-2"
          id="toggle"
          type="checkbox"
          variant="outline-primary"
          checked={checked}
          value="1"
          onChange={(e) => setChecked(e.currentTarget.checked)}
          onClick={e => window.location.href='https://docs.google.com/document/d/11C4Im0EyYR7mVuIRW1jf6LtBI65CENWkyuLU8VWZDdc/edit?usp=sharing'}
        >
          
            See My Resume on Google Docs
        </ToggleButton>
  )}
