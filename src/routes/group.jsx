import { redirect } from "react-router-dom";


export async function action({ params }) {
    await console.log(`added ${params.contactId} to the group`);  
    return redirect('/')
}
