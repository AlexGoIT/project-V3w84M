import { RevolvingDot } from 'react-loader-spinner';
import { WrapRevolvingDot } from './Loader.styled';

const Loader = () => {
  return (
    <WrapRevolvingDot>
      <RevolvingDot
          radius="45"
          strokeWidth="5"
          color="#E6533C"
          secondaryColor='#EFEDE8'
          ariaLabel="revolving-dot-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          />
    </WrapRevolvingDot>
  );
};

export default Loader;