import { createPortal } from 'react-dom';
import { Vortex } from 'react-loader-spinner';

const rootloader = document.querySelector('#rootLoader');

const Loader = () => {
  return createPortal(
    <div>
      <Vortex
        type="watch"
        visible={true}
        height="100"
        width="100"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </div>,
    rootloader
  );
};

export default Loader;
