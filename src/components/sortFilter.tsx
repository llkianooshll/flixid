export default function SortFilter({ movies, sort, filter}:any) {
    return (
        <div className=" sort-navigation">
            <div className="bg-black my-5 p-3 text-white ">
                <span className='mr-5'><b>Sort by : </b> <button onClick={() => { sort(movies, "year") }} className='mx-2'><b>Year</b></button><button onClick={() => { sort(movies, "rating") }} className='mx-2'><b>Rating</b></button></span>
                <span className='ml-5'><b>Filter by : </b>
                    <span>
                        <span className='mx-5'>
                            <b className='mx-3'>Ratings: </b>
                            <button onClick={() => { filter("rating", 9) }} className='mx-1'>9+</button>
                            <button onClick={() => { filter("rating", 8) }} className='mx-1'>8+</button>
                            <button onClick={() => { filter("rating", 7) }} className='mx-1'>7+</button>
                            <button onClick={() => { filter("rating", 6) }} className='mx-1'>6+</button>
                            <button onClick={() => { filter("rating", 5) }} className='mx-1'>5+</button>
                            <button onClick={() => { filter("rating", 0) }} className='mx-1'>Lower</button>
                        </span>
                        <span className='mx-4'>
                            <b className='mx-3'>Year: </b>
                            <button onClick={() => { filter("year", 2024) }} className='mx-1'>2024</button>
                            <button onClick={() => { filter("year", 2023) }} className='mx-1'>2023</button>
                            <button onClick={() => { filter("year", 2022) }} className='mx-1'>2022</button>
                            <button onClick={() => { filter("year", 2021) }} className='mx-1'>2021</button>
                            <button onClick={() => { filter("year", 2020) }} className='mx-1'>2020</button>
                            <button onClick={() => { filter("year", 0) }} className='mx-1'>Older</button>
                        </span>
                        <span className='mx-4'>
                            <b className='mx-3'>Action: </b>
                            <button onClick={() => { filter("year", -1) }}>Clear Filters</button>
                        </span>
                    </span>
                </span>
            </div>
        </div>
    )
}