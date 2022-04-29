import '../styles/Home.css';
import Card from 'react-bootstrap/Card';


function Home() {
    return (
        <div>

                <div className='homebox'>
                    <Card className='picbox'>
                        <Card.Img  src="https://images.unsplash.com/photo-1582594761956-3c67c6fe808f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHRleGFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
                        <Card.Body>
                            <Card.Text>
                                From the top of the Gualupe Mountains 
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className='picbox' >
                        <Card.Body >
                            <Card.Text>
                                To the busy streets of Houston 
                            </Card.Text>
                        </Card.Body>
                        <Card.Img src="https://images.unsplash.com/photo-1510623425998-4894a2ad0da9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80" />
                    </Card></div>
            
            <div className='dropdownlisttest'>

            </div>

        </div>
    )

}
export default Home 