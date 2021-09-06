// componente
import ReactLoading from 'react-loading';

interface styles  {
    marginBottom?: string,
    marginTop?: string,
    width?: string,
    color?: string
}

interface Props {
    loading?:boolean;
}


const styles = {
    height: '50px',
    width: "10em",
    color: "purple"
}

const Loading = (props:Props) => {

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