
import React, {useState} from "react";
import ViewWrapper from "./layout/ViewWrapper";
import StyledButton from "./layout/StyledButton";



const TroggleView = ({
    firstView,
    secondView,
    firstLabel = 'Ver primeiro',
    secondLabel = 'Ver segundo',
    defaultView = 'first'
}) => {
    const [showFirst, setShowFirst] = useState(defaultView === 'first');

    return (
        <ViewWrapper>
            <div style={{ display: showFirst ? "block" : "none" }}>{firstView}</div>
            <div style={{ display: !showFirst ? "block" : "none" }}>{secondView}</div>

            <StyledButton onClick={() => setShowFirst(!showFirst)}>
                {showFirst ? secondLabel : firstLabel}
            </StyledButton>
        </ViewWrapper>
    );
};

export default TroggleView;
