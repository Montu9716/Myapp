import React, {Component} from 'react';

class Register2 extends Component{


    render(){

        return(


            <tr>

                <td>{this.props.rowitem.name}</td>
                <td>{this.props.rowitem.gender}</td>
                <td>{this.props.rowitem.mobileno}</td>
                <td>{this.props.rowitem.emailid}</td>
                <td>{this.props.rowitem.password}</td>
            

            <td>
                <input type="button" className="btn btn-primary" value="Delete"
                onClick={()=>this.props.form_delete(this.props.rowitem.name)}/>


            </td>


<td>


    <input type="button" className="btn btn-success" value="Edit"
    onClick={()=>this.form_edit(this.props.rowitem.name)} />

    
   
</td>


</tr>
);
        
    }
}
export default Register2;