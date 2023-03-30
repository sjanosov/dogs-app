import { useEffect } from 'react';
import { dogFacts } from '../constants/dogFacts';

const Facts = () => {
    
        

    useEffect(() => {
        const factsList = document.querySelectorAll(".fact-article");
        const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting);
            if (entry.isIntersecting) observer.unobserve(entry.target)
        })
    }, {
        threshold: 0.5,
    })
    
        factsList.forEach(fact => {
            observer.observe(fact);
        })
    },[])
    
    return (<>
        <article className="facts-container">
            {dogFacts.map((fact) => {
                return (
                    <div className="fact-article" key={fact.id}>
                        <h2>
                            <span className="accent">{fact.id}</span>
                            <span className="f-header">{fact.header}</span>
                        </h2>
                        <p>{fact.text}</p>
                    </div>
                )
            })}
        </article>
    </>
    )

}

export default Facts