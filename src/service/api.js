import { axiosInstance } from "./axiosInstance"




//1) api manager oluşturacaksın!
//Eğer bu apiManagerdaki getall metodu 2xx dışında bir şey dönerse ön tarafı patlatsın ve hata nerede görelim



export const apiManager = {

    getAll: async (url) => {

        let responseData = [];

       await fetch("https://northwind.vercel.app/api/" + url)
            .then(res => {
                if(res.status != 200){
                    throw "error"
                }
                else{
                    return res.json();
                }
            })
            .then(data => {
                responseData = data;
            })

        // await axiosInstance.get(url)
        //     .then(res => {
        //         console.log('RES', res);
        //         responseData = res.data;
        //     })
        //     .catch((err) => {
        //         throw new err;
        //     })

        return responseData;

    }

}