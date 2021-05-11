import React, {useState} from 'react';
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export const AdviceItem = ({name, text, link}) => {

    const [showAdvice, setShowAdvice] = useState(false);

    return(
        <div className="fill-eighty advice-item">
            <div className="fill flex-row-between-center advice-title">
                {name}
                {showAdvice ? <ExpandLessIcon onClick={()=>setShowAdvice(!showAdvice)}/> : <ExpandMoreIcon onClick={()=>setShowAdvice(!showAdvice)}/> }
            </div>

            {showAdvice
                ?   <div>
                        {text}
                        <a href={link} target="_blank">här</a>
                    </div>
                :   null}
        </div>
    )
}