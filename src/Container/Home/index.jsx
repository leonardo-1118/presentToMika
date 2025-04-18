import HeartRain from '../../Components/HeartRain'
import { Main, Section, SongCard, Line, Title, Paragraph } from './styles'
import ourSong from '../../assets/lembrancaBoa.mp3'
import cardSongImg from '../../assets/lembrancaBoaImage.jpg'
import Carousel from '../../Components/Carousel'

function Home() {

    return (
        <Main>
            <HeartRain />

            <Section>
                <SongCard>
                    <img src={cardSongImg} alt="Capa da música" />
                    <div>
                        <h4>Lembrança Boa</h4>
                        <p>Henrique & Juliano</p>
                        <audio src={ourSong} controls></audio>
                    </div>
                </SongCard>
                
                <Carousel />
                <Title>Te Amo Meu Mômô</Title>
                <Line />
                <Paragraph>A cada dia que passa, meu amor e o desejo de passar mais tempo ao seu lado só aumentam. Com você, eu não apenas conheci o que é o amor verdadeiro, eu tenho o privilégio de vivê-lo todos os dias com você, te amo tanto minha princesa!
                Ainda me lembro da primeira vez que fui te visitar na sua casa... minha mão tremia e eu estava muito nervoso, sim me lembro muito bem porque isso acontece até hoje já que te amo muito, igual no começo.</Paragraph>
            </Section>
        </Main>
    )
}

export default Home