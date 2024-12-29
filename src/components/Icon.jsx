import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Icon({icon, className, onClick}){
    return(
        <FontAwesomeIcon
            icon={icon}
            className={className}
            onClick={onClick}
        />
    )

}
export default Icon;
