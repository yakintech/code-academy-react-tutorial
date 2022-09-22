

export const AuthManager = ({children}) => {

    
    var userAuthStatus = true;

    if(userAuthStatus){
        return children;
    }
    else{
        return <span>Go To Login PAGE!!</span>
    }



   

}