export interface BlogInterface {
    article_id: number;
    title: string;
    content: string;
    images: string;
    created_at: Date;
    created_by: string;
}

export interface CreateBlogInterface {
    title: string;
    content: string;
    images: string;
    created_by: string;
}

export interface UpdateBlogInterface {
    title: string;
    content: string;
    images: string;
}

export interface LikeBlogInterface {
    article_id: number,
    account_id: number,
    emotion: number
}