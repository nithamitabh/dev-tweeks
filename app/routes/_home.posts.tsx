import {Separator} from "@radix-ui/react-separator"
import {type LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData, useNavigation } from "@remix-run/react";
import { PostSearch } from "~/components/post-search";
import { Post } from "~/components/posts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { ViewComments } from "~/components/view-comments";
import { ViewLikes } from "~/components/view-likes";
import { WritePost } from "~/components/write-post";

export const loader = ({request}: LoaderFunctionArgs) => {
    const url = new URL(request.url);
    const searchParams = url.searchParams;
    const query = searchParams.get("query");

    return json({query});
};
export default function Posts() {
    const {query} = useLoaderData<typeof loader>();
    const navigation = useNavigation();

    const isSearching = Boolean(navigation.location && new URLSearchParams(navigation.location.search).has("query"));
    return (
        <div className="w-full max-w-xl px-4 flex flex-col">
          <Tabs defaultValue = "view-posts" className="my-2">
            <TabsList className="grid w-full grid-cols-2 ">
            <TabsTrigger value="view-posts">View Posts</TabsTrigger>
                <TabsTrigger value="write-post">Write Post</TabsTrigger>
            </TabsList>
            <TabsContent value="view-posts">
                <Separator/>
                <PostSearch isSearching = {isSearching} searchQuery = {query}/>
                <Post
                avatar_url="https://avatars.githubusercontent.com/u/96220322?v=4"
                name="Amitabh Nith"
                username="amitabh"
                title={"## Hi,Amitabh Here!!🚀"}
                id="1"
                userId="1"
                dateTimeString="2 days ago"
                >
                    <ViewLikes likes={69} liked = {true} pathname={`/profile/nithamitabh`}/>
                    <ViewComments comments={42} pathname={`/profile/nithamitabh`} />
                </Post>
            </TabsContent>
            <TabsContent value="write-post">
                <WritePost sessionUserId="1234" postId="112233" />
            </TabsContent>
            </Tabs>  
        </div>
    )
}