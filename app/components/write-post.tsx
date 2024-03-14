import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

type WritePostProps = {
    sessionUserId: string;
    postId: string;
};
export function WritePost({ sessionUserId, postId }: WritePostProps) {
    const [title, SetTitle] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const postTitle = () => console.log("Posting to server");
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "inherit";
            const computed = window.getComputedStyle(textareaRef.current);
            const height =
                textareaRef.current.scrollHeight +
                parseInt(computed.getPropertyValue("border-top-width")) +
                parseInt(computed.getPropertyValue("border-bottom-width"));
            textareaRef.current.style.height = height + "px";
        }
    }, [title]);
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Write a post
                </CardTitle>
                <CardDescription>Geeks! write your post in <span className="text-blue-500">.md</span>. </CardDescription>
            </CardHeader>
            <CardContent>
                <Textarea ref = {textareaRef} placeholder="Write here..." value={title} onChange={(e) => { SetTitle(e.target.value) }} className="mb-2" />
            </CardContent>
            <CardFooter>
                <Button onClick={postTitle}>Post</Button>
            </CardFooter>
        </Card>
    )
}