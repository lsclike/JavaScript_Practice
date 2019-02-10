let user = {
    loginPromise: null,

    login: ()=>{
        if(this.loginPromise == null){
            this.loginPromise = ajax(/*url for asy login*/);

            this.loginPromise.catch(()=> {
                this.loginPromise = null
            })
        }
        return this.loginPromise;
    }
};

//Showing MainMenu according to users' status
function showMainMenu() {
    return user.login().then(()=>{
        // code for display main menu
    })
}