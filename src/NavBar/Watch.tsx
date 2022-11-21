import React, {useState, useEffect} from 'react';

function Watch() {

  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 20000)
  }, []);

  return (
    <div id="watch">
      {
        dateState.toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        })
      }
    </div>
  );
}

export default Watch;