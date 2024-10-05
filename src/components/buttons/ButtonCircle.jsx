
const ButtonCircle = ()=>{
    return(
        <button
            style={{
                width:'44px',
                height:'44px',
                borderRadius:'50%',
                marginLeft:'10px',
                color:'#003550',
                backgroundColor:'#ffffff',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                cursor:'pointer'
            }}
        >
            <svg width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor" strokeWidth={2}><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>
        </button>
    )
}

export default ButtonCircle

