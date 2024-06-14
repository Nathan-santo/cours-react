import {Case} from "./Case.jsx";

// eslint-disable-next-line react/prop-types
export const Grid = ({caseIsClicked, winner}) => {
    return (
        <div id="grid-container">
            {new Array(9).fill(0).map((_, index) => (
                <Case
                    key={index}
                    caseIsClicked={caseIsClicked}
                    index={index}
                    winner={winner}
                />
            ))}
        </div>
    );
};
