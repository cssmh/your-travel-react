export default function Rating({rating}){
    return(
        <div className="flex items-center mt-2">
            <span className="bg-red-500 text-white font-semibold px-2 py-1 rounded-xl ">{rating.rating}</span>
            <p className="ml-2 text-gray-600 text-sm">{rating.rating >= 4 ? "Good" : "Average"}</p>
            <p className="ml-2 text-gray-500 text-[10px] md:text-sm">({rating.total_rating} reviews)</p>
        </div>
    )
}