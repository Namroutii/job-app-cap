import Carousel from 'react-bootstrap/Carousel';

function Header() {
    return (
        <Carousel>

        <Carousel.Item interval={3000}>
            <img
            className="d-block w-100"
            src="https://imageio.forbes.com/specials-images/imageserve/6048dc531c59789da537ae0c/Job-Search-Hiring-Website--Young-business-man-searching-for-job-online-a-hand-holding/960x0.jpg?format=jpg&width=960"
            alt="se slide"
            />

        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <img
            className="d-block w-100"
            src="https://sloanreview.mit.edu/wp-content/uploads/2021/02/GEN-Laker-Virtual-Hiring-Interview-Online-1290x860-1.jpg"
            alt="th slide"
            />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <img
            className="d-block w-100"
            src="https://www.omadasearch.com/wp-content/uploads/2020/03/Interview.png"
            alt="four slide"
            />
        </Carousel.Item>
        </Carousel>
    );
}

export default Header;