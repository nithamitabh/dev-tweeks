import { Link } from "@remix-run/react";
import { MessageCircle } from "lucide-react";

type ViewCommentsProps = {
    comments: number;
    pathname: string;
    readonly?: boolean;
};

export const ViewComments = ({ comments, pathname, readonly = false }: ViewCommentsProps) => {
    return (
       <>
       {
        readonly ? (
            <div className="flex justify-center items-center group">
                <MessageCircle className="h-4 w-4 text-gray-500"/>
                <span className="ml-2 text-md text-gray-500">{comments}</span>
            </div>
        ):(
            <Link to={pathname} className="flex justify-center items-center group" >
                <MessageCircle className="h-4 w-4 group-hover:text-green-400 text-gray-500"/>
        <span className={`ml-2 text-sm group-hover:text-green-400 text-gray-500`}>
            {comments}
        </span>
    </Link>
        )

       }
       </>
    )
}
