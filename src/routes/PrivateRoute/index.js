import React from 'react';
import {
  Route
} from "react-router-dom";
import {Home} from '@bsf/pages'

// เชื่อมต่อ pages สำหรับ ลงชื่อเข้าใช้งานแล้ว
function PrivateRoute({ children, status, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          status ? (
            children
          ) : (
           <Home status={status}></Home>
          )
        }
      />
    );
  }

  export default PrivateRoute