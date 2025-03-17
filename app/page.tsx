import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
      <h1 className="text-5xl font-bold mb-4 sm:text-7xl">
      Differentiable <span className="text-red-700">Physics</span>{" "}
      </h1>
      <h1 className="text-3xl font-bold mb-4 sm:text-5xl">
        Machine Learning for Physical Systems
      </h1>
      <p className="mb-8 sm:text-md max-w-[800px] text-muted-foreground">
        - Bharath Ramsundar, Dilip Krishnamurthy, Venkat Viswanathan
      </p>
      <div>
        <Link
          href={`/docs${page_routes[0].href}`}
          className={buttonVariants({
            className: "px-6 !font-medium",
            size: "lg",
          })}
        >
          Read
        </Link>
      </div>
    </div>
  );
}
