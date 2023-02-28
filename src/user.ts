
//Define User class
class User {
    // field declarations
    private _username: string;
    private _password: string;
    private _contact: number;
    private _email: string;
    private _address: string;
   
    // constructor 
    constructor(username: string, password: string, contact: number, email: string, address: string) {
        this._username = username;
        this._password = password;
        this._contact = contact;
        this._email = email;
        this._address = address;
    }

    // getter and setter methods
    get username(): string {
        return this._username;
    }
    set username(value: string) {
        this._username = value;
    }

    get password(): string {
        return this._password;
    }
    set password(value: string) {
        this._password = value;
    }

    get contact(): number {
        return this._contact;
    }
    set contact(value: number) {
        this._contact = value;
    }

    get email(): string {
        return this._email;
    }
    set email(value: string) {
        this._email = value;
    }

    get address(): string {
        return this._address;
    }
    set address(value: string) {
        this._address = value;
    }
}


//Fetch form values using Object.fromentries()
function submitForm(event)
{
    const formData=new FormData(event.target);
    const values=Object.fromEntries(formData);
    const allData = new User(
        <string>values.username,
        <string>values.password,
        parseInt(<string>values.contact),
        <string>values.email,
        <string>values.address
    );
    registerUser(allData);
    event.preventDefault();
}

// const submitUser = (formData: any) => {

//     //call registerUser method with the constructed User object
// }

//POST data using fetch() api
function registerUser(allData:User){
    // console.log(allData);

    const  request={
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(allData)
    };
    fetch(`http://localhost:3000/users/`,request)
    .then(response=>{
        alert(JSON.stringify(response))

        window.alert(`Thank you ${allData.username} you will get notification on ${allData.email}`)
        
    },
    reject=>{ 
        window.alert(reject);
       
        window.alert(`Sorry ${allData.address} some problem happened.`)})

    //Dispay welcome message after successful registration
}