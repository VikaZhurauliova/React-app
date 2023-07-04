import {useCallback, useState} from "react";

const useCounter = () => {
    const [ counter, incrementCounter ] = useState(0);

    const onClick = useCallback(() => {
        incrementCounter(counter + 1)
    }, [counter]);

    return {
        counter,
        incrementCounter: onClick()
    }
}

export default useCounter