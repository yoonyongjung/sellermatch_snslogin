import PropTypes from 'prop-types';

import { GoogleLogin } from 'react-google-login';
import { snsPayloadParser } from '../utils/common';

const Google = (props) => {
  const clientId = '401148449336-dhftt4anh287l238ii4nt2655l3ifknm.apps.googleusercontent.com';

  const success = (payload) => {
    props.success(snsPayloadParser.GOOGLE(payload));
    
  };

  const fail = (payload) => {
    props.fail(payload);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      onSuccess={success}
      onFailure={fail}
      cookiePolicy={'single_host_origin'}
      render={renderProps => (
        <button onClick={renderProps.onClick} disabled={renderProps.disabled}> Google Login</button>
      )}
    />
  );
};

Google.propTypes = {
  success: PropTypes.func.isRequired,
  fail: PropTypes.func.isRequired,
};

export default Google;