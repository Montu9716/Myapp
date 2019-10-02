import React, {Component} from 'react';

import Register2 from './Register2';

class Register extends Component
{

    constructor(){


        super();
        this.state={

            name:'',
            gender:'',
            mobileno:'',
            emailid:'',
            password:'',

            login:[]




        }
    }

        form_submit=()=>{


            var name        =    this.refs.name.value;
            var gender      =    this.refs.gender.value;
            var mobileno    =    this.refs.mobileno.value;
            var emailid     =    this.refs.emailid.value;
            var password    =    this.refs.password.value;

            var login       =    this.state.login;

            
            login.push({name:name,gender:gender,mobileno:mobileno,emailid:emailid,password:password});

            this.setState({login:login});
            console.log(this.state.login);

        

            fetch("http://localhost:3010/create?name="+name+" gender="+gender+" mobileno="+mobileno+" emailid="+emailid+" password="+password )
            

            .then(res=> res.json())
            .then(out=> console.log(out))
            .catch((error)=>{

                console.log(error);
            })


         this.setState({name:'',gender:'',mobileno:'',emailid:'',password:''});
         console.log('Data is saved');

this.form_clear();

        
        }

        form_edit=(e)=>{


            var login     =      this.state.login.filter(x => x.name == e);

            this.refs.name.value      =      login[0].name;
            this.refs.gender.value    =      login[0].gender;
            this.refs.mobileno.value  =      login[0].mobileno;
            this.refs.emailid.value   =      login[0].emailid;
            this.refs.password.value  =      login[0].password;



        }

        form_delete=(e)=>{

            var login        =      this.state.login.filter(x => x.name != e);


            this.setState({login:login});




        }

        form_update=()=>{


            var login   = this.state.login;


            for(let i=0; i<login.length; i++)
            {

                if(login[i].name  ==  this.name.refs.value){

                    login[i].gender  =   this.gender.refs.value;
                    login[i].mobileno  =   this.mobileno.refs.value;
                    login[i].emailid  =   this.emailid.refs.value;
                    login[i].password  =   this.password.refs.value;



                }
            }

            this.setState({login:login});
        }

        form_clear=()=>
        {

            this.refs.name.value="";
            this.refs.gender.value="";
            this.refs.mobileno.value="";
            this.refs.emailid.value="";
            this.refs.password.value="";

        }







        render()

{

    return(
        <div>        

            <h1> Enter DEtails</h1> 
            <br></br>  

            <p> Name <input type="text" ref="name" placeholder="John" className="form-control"/>   </p>  
            <br></br>


            <p> Gender <input type="text"  ref="gender" placeholder="Male/Female" className="form-control"/></p>
            <br></br>

            <p> Mobile <input type="text"  ref="mobileno" placeholder="9716934835" className="form-control"/></p>
            <br></br>

            <p> Emaild Id <input type="email" ref="emailid" placeholder="john@gmail.com" className="form-control" /></p>
 
            <p> Password <input type="password" ref="password" placeholder="password" className="form-control" /></p>


            <p>
                
                <input type="button" className="btn btn-succces" 
                onClick={this.form_submit} value="ADD Value"/>

                <input type="button" className="btn btn-primary"
                onClick={this.form_update}type="button" value="Update Record"/>


                </p>    
                
<div>


    <table className="table table-striped">

    <thead>

        <tr>
            <th> Name</th>
            <th> Gender</th>
            <th> Mobile No</th>
            <th> Emaild Id</th>
            <th> Password</th>



        </tr>
    </thead>

    <tbody>

{this.state.login.map((data,i)=>

    <Register2

    form_edit={this.form_edit}
    form_delete={this.form_delete} rowitem={data} key={i}/>


)}


    </tbody>
    
    
    
    </table>
</div>

                    
                </div>
            );  
            
}
}



export default Register;
