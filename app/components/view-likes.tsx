import { Link } from "@remix-run/react"
import { ThumbsUp } from "lucide-react";
type ViewLikesProps = {
    likes: number;
    liked: boolean;
    pathname: string;
};
export function ViewLikes({ likes, liked, pathname }: ViewLikesProps) {
    return <Link to={pathname} className="flex justify-center items-center group" >
        <ThumbsUp className={`w-4 h-4 group-hover:text-blue-400 ${liked ? "text-blue-700" : "text-gray-500"}`} />
        <span className={`ml-2 text-sm group-hover:text-blue-400 ${liked ? "text-blue-700" : "text-gray-500"}`}>
            {likes}
        </span>
    </Link>
}