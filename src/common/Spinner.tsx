import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBone } from '@fortawesome/free-solid-svg-icons';
import '../scss/_spinner.scss';

function Spinner() {
  return (
    <div className="spinner">
        <FontAwesomeIcon icon={faBone} className="spinner-bone"/>
    </div>
  )
}

export default Spinner