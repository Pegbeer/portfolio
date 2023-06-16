export default function HamburgerIcon({ isActive, darkActive }: { isActive: boolean, darkActive:boolean }) {
    const getColor = () =>{
        if(darkActive){
            if(isActive){
                return "tan";
            }
            return "tan";
        }else{
            if(isActive){
                return "tan";
            }
            return "black";
        }
    }
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke={getColor()}
            strokeWidth="2"
            strokeLinecap="square"
            strokeLinejoin="inherit"
            className="w-6 h-6"
        >
            <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
    );
}
