import { GetProducts } from "@/app/components/api/route";

export default async function Page() {
    const products = await GetProducts();
    return (
        <div className="flex flex-wrap justify-center gap-10 bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 py-5">
            {products.map((product, index) => (
                <div
                    key={index}
                    className="relative m-5 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
                >
                    <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
                        <img
                            className="object-cover w-full h-full"
                            src={product.img || "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}
                            alt={product.name || "product image"}
                        />
                    </a>
                    <div className="mt-4 px-5 pb-5">
                        <a>
                            <h5 className="text-xl tracking-tight text-slate-900">{product.name}</h5>
                        </a>
                        <div className="mt-2 mb-5 flex items-center justify-between">
                            <p>
                                <span className="text-2xl font-bold text-slate-900">฿{product.price}</span>
                            </p>
                        </div>
                        <a
                            className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mr-2 h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                            Add to cart
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}