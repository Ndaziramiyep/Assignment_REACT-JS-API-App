import React, {memo} from 'react'
const MemorizedComponent = memo(({data})=> {
    return(
        <div>
            <p>{data.message}</p>
            {/* Render other components based on data*/}
        </div>
    );
});
export default MemorizedComponent;