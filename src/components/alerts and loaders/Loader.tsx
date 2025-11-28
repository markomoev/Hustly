import Loading from './icons/loading.gif'

export default function Loader() {
    return (
        <div className="-mt-4">
            <img 
                src={Loading} 
                alt="Loading..." 
                className="w-20 h-20"
            />
        </div>
    )
}