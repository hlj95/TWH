import '../styles/Home.css';
import Card from 'react-bootstrap/Card';


function Home() {
    return (
        <div className='homeDiv'>
                <div className='homebox'>
                    <Card className='picbox'>
                        <Card.Img  src="https://images.unsplash.com/photo-1582594761956-3c67c6fe808f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHRleGFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
                        <Card.Body>
                            <Card.Text>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className='picbox' >
                        <Card.Body >
                            <Card.Text>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>                            </Card.Text>
                        </Card.Body>
                        <Card.Img src="https://images.unsplash.com/photo-1510623425998-4894a2ad0da9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80" />
                    </Card></div>
            
            <div className='dropdownlisttest'>

            </div>

        </div>
    )

}
export default Home 