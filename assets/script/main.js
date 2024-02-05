const {createApp} = Vue 

createApp({
    data(){
        return{
            randomEmails:[]
        }
    }, 
    mounted(){

        
        
    },
    methods:{
        generateEmails(){

            for(let i = 0; i < 10; i++){
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((result) => {
                console.log(result.data.response)
                let randomEmail = result.data.response 
                this.randomEmails.push(randomEmail) 
            })
            }
            
        }

        // generateEmails(){

        //     axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((result) => {
        //         console.log(result.data.response) 
        //         this.randomEmail = result.data.response
        //     })
        
            
        // }
    }
}).mount("#app")