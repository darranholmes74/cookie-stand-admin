

export default function Header(){
    return(
        <header className="flex items-center justify-between p-4 bg-green-500 text-black">
            <div>
                <h1 className="text-4xl">Cookie Stand Admin</h1>
            </div>
            <div>
                <button className="bg-white text-black rounded py-1 px-3 ">Overview</button>
            </div>
        </header>
    )
}