import "./AboutUsStyle.css";
function AboutUs(){
return(
    <div className="section" id="About">
		<div className="container">
			<div className="content-section">
			<h1 className="title">About Us</h1>
				<div className="content">
					<p>
                    HireMe Founded in 2022 by Osama,Ahmed,Emad,Dalia,Abd and Izz <br></br>
                        HireMe is a recruitment platform that takes a unique approach <br></br>
                        to recruitment and the site aims to make the labor market more<br></br>
                        flexibleHireMe asks researchers to choose the job that suits <br></br>
                        them and then apply for this job by filling out the questionnaire<br></br>
                        HireMe Generates an assessment of new candidates that allows you to<br></br>
                        discover if they are a cultural fit for your organization.
                    </p>
				</div>
			</div>
			<div className="image-section">
				<img src="https://sbdktechnologies.com/wp-content/uploads/2022/05/Job-Posting.jpg " alt=""/>
			</div>
		</div>
	</div>
)
}
export default AboutUs;