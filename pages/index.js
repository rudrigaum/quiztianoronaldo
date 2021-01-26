import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizBackgrond from '../src/components/QuizBackground'
import GitHubCorner from '../src/components/GitHubCorner'
import Footer from '../src/components/Footer'



// const BackgroundImage = styled.div`
//   background-image:url(${db.bg});
//   flex:1;
//   background-size:cover;
//   background-position: center;
// `;

export const QuisContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
}
`;



export default function Home() {
  return(
    <QuizBackgrond backgroundImage={db.bg}>
        <QuisContainer>
          <Widget>
          <Widget.Header>
                <h1>The Legend of Zelda</h1>
          </Widget.Header>
            <Widget.Content>
            <p>The best game of the year</p>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Content>
            <h1>Quizes da galera</h1>
            <p>The best game of the year</p>
            </Widget.Content>
            
          </Widget>
            <Footer />
        </QuisContainer>
        <GitHubCorner projectUrl="https://github.com/rudrigocerqueira" />
    </QuizBackgrond>
  ) 
}
