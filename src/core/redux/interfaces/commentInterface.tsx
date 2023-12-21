export interface CommentInterface {

}

export interface CreateCommentInterface {
    account_id: number;
    article_id: number;
    comment: string;
    images: string;
}

export interface UpdateCommentInterface {
    comment: string;
    images: string;
}