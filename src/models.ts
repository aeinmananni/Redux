export type InfoType ={
   
        text: string;
        showModal: boolean;
        state: string[];
        inputValue:string
        inputValues:string[]
        error:string
      
}

export type ProductStoreType = {
         id:number,
         title?:string,
         exp:string,
         price?:string
}


export type CommentsStoreType = {
         id:number,
         comment:string
}


export type ArticlesStoreType = Omit<ProductStoreType,"price">;