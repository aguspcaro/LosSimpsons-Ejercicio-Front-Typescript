
interface props {
    image?: string;
}

const Logo = (props:props)  => {

    return ( 

        <div className="logo-wrap">

            <a href="/">

                <img 
                    className="logo" 
                    alt="img" 
                    src={props.image} >

                </img>

            </a>

        </div>
        
    );
}
 
export default Logo;