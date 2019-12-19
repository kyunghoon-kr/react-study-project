import React, {useCallback} from 'react';
import LogInInsert from './components/LogInInsert';
import TitleTemplate from './components/TitleTemplate';

const App = (props) => {

  const dateLoad = useCallback(
    e => {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1;
        let yyyy = today.getFullYear();
        let dateString;
        if(dd<10) {
            dd='0'+dd;
        }
        if(mm<10) {
            mm= '0' + mm;
        }
        dateString = yyyy+'-'+mm+'-'+dd;
        return dateString;
    }, 
    []
  );

  return (
    <div>
      <TitleTemplate/>
      <LogInInsert dateLoad={dateLoad}/>
    </div>
  );
};

export default App;