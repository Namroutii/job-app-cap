function Charts()
{
    return(
        <Charts
        
            type="polarArea"
            data={{
                labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
                datasets: [
                {
                    data: [11, 16, 7, 3, 14],
                    backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
                },
                ],
            }}
        />
    )
}


export default Charts;