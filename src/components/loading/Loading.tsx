// componente
import ReactLoading from 'react-loading';

interface styles  {
    marginBottom?: string,
    marginTop?: string,
    width?: string,
    color?: string
}

interface props {
    loading?:boolean;
}

const styles:styles = {
    marginBottom:"1em",
    marginTop: "1em",
    width: "10em",
    color: "purple"
}

const Loading = (props:props) => {

    if(props.loading) {

        return (

            <ReactLoading
                {...styles}
                type="bars"
            />
        )

    } else {

        return (

            <hr/>
        )
    }    

}
 
export default Loading;