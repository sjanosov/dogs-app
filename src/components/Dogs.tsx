import PanelBody from './PanelBody';
import Facts from './Facts';

function Dogs() {
  
  return ( 
    <main className="main-content">
      <PanelBody title="15 Amazing Dog Facts">
        <p className="sub-title">
          Our dogs have always been our most loyal companions, so it's only natural that we want to know as much as we can about them. Keep reading for our top 15 dog facts that you won't believe!
        </p>
        <Facts />

      </PanelBody>
    </main>
  )
}

export default Dogs