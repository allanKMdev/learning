function Item({name,ispacked}){

if(ispacked){
    return null;
}

else{

    return <li className="">{name}</li>;
}

}

function PackageList(){
    return(
        <section>
            <h1>Mulleys Packaging List</h1>
            <ul>
                <Item ispacked={true} name="2kg mumias sugar"/>
                <Item ispacked={true} name="5kg Pishori Rice"/>
                <Item ispacked={false} name="1kg Ndengu"/>
            </ul>
        </section>
    );
}
export default PackageList