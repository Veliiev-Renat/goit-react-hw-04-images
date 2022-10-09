import { Audio } from 'react-loader-spinner'

export default function Loader(){

        return(<div style={{marginLeft:'auto',marginRight:'auto'}}><Audio
            height="80"
            width="80"
            radius="9"
            color="blue"
            ariaLabel="loading"
          /></div>
        )
}