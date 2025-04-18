import {Section, Link} from './styles'
import imageIcon from '../../assets/heart_icon.png'

function Container() {

    return (
        <Section>
            <Link to='home/'>
                <button><img src={imageIcon} alt="Icone de coração" /> Click</button>
            </Link>
        </Section>
    )
}

export default Container