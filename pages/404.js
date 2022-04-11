import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/solid";

export default function NotFoundPage() {
    return(
        <section className="flex h-full w-full justify-center items-center flex-col">
            <h1 className="text-gray-700 dark:text-white text-4xl font-semibold pb-2">Oops...</h1>
            <p className="text-gray-700 dark:text-white text-lg mb-2">Looks like this page does not exist.</p>
            <Link href="/">
                <p className="text-blue-500 hover:underline cursor-pointer text-md flex hover:bg-gray-100 dark:hover:bg-gray-800 p-2 transition-all duration-100">
                    <ArrowLeftIcon className="w-4 h-4 mt-1 mr-2" />
                    Go back
                </p>
            </Link>
        </section>
    )
}