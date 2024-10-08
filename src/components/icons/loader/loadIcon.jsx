import { ping } from 'ldrs'

const LoadIcon = ()=>{
    ping.register()
    return(
        <div style={{
            position:'absolute',
            right:'10px',
            top:'6px',
        }} >
            <l-ping
            size="35"
            speed="3" 
            color="#003550" 
            ></l-ping>
        </div>
    )
}

export default LoadIcon