import { Hourglass } from 'react-loader-spinner';
import { LoadMessage, LoaderWrap } from './loader.styled';

export const Loader = () => {
  return (
    <LoaderWrap>
      <LoadMessage>Loading...</LoadMessage>
      <Hourglass
        visible={true}
        height="50"
        width="50"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#306cce', '#72a1ed']}
      />
    </LoaderWrap>
  );
};
