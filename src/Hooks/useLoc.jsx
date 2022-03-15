import {useLocation} from "react-router";


function useLoc(){
    return new URLSearchParams(useLocation().search);
}

export default useLoc;