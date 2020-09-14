import React, { useState } from 'react';

import Opener from '../components/opener';
import Content from '../components/content';

function Main() {
  const [openerClosed, setCloseOpener] = useState(false);

  const handleClick = () => {
    setCloseOpener(true);
  }

  return (
    <>
      {!openerClosed && <Opener handleClick={handleClick} />}
      {openerClosed && <Content open={openerClosed} />}
    </>
  );
}

export default Main;
