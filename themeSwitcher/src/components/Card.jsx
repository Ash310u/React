export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img
                    className="p-8 rounded-t-lg"
                    src="https://c4.wallpaperflare.com/wallpaper/979/756/6/rick-and-morty-tv-adult-swim-rick-sanchez-wallpaper-preview.jpg"
                    alt="product_image1"
                />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Rick and Morty, "best duo ever"
                    </h5>
                </a>
            </div>
        </div>
    );
}
