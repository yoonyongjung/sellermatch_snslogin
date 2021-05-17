import PropTypes from 'prop-types';

import NaverLogin from 'react-naver-login';
import { snsPayloadParser } from '../utils/common';

const Naver = (props) => {
  const clientId = 'HMM4ANSzcvSENJ_Q4bfw';
  const success = payload => {
    props.success(snsPayloadParser.NAVER(payload));
  };

  const fail = payload => {
    props.fail(payload);
  };

  return (
    // <></>
    <NaverLogin
      clientId={clientId}
      callbackUrl={`http://localhost:3000${window.location.pathname}`}
      onSuccess={success}
      onFailure={() => fail}
      render={renderProps => (
        <button onClick={renderProps.onClick} >Naver Login</button>
      )}
    ></NaverLogin>
  );
};

Naver.propTypes = {
  success: PropTypes.func.isRequired,
  fail: PropTypes.func.isRequired,
};

export default Naver