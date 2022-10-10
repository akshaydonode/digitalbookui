export interface BookEntity{
    bookId: number;
    title: string;
    category: string;
    price: number;
    publisher: string;
    published: Date;
    contents: string;
    active: boolean;
    //logo: string;
    authorId: number;
    updateDate: Date;
    authorName: string;
   
}