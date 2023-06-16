export default function Ripple({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="
            relative 
            overflow-hidden 
            group
            cursor-pointer
            bg-lightYellow text-darkGreen 
            dark:bg-brown dark:text-tan
            hover:drop-shadow-md hover:shadow-darkGray
            dark:hover:drop-shadow-md dark:hover:shadow-lightYellow">
            {children}
            <span className="absolute -inset-0.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500 ease-in-out"></span>
        </div>
    );
}