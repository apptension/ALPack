import React from "react";
import { useQuery } from "@apollo/client";

import { postsQuery } from './posts.graphql';

export const PostsComponent = () => {
    const { loading, data } = useQuery(postsQuery);

    if (loading || !data) {
        return null;
    }

    console.log({ data });

    return data.posts.map(post => (
        <div key={post.id}>{post.title}</div>
    ))
}