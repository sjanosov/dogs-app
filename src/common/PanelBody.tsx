type PanelBodyProps = {
    title: string,
    children?: JSX.Element | JSX.Element[];
  };

function PanelBody({ title, children }: PanelBodyProps) {
  return (
    <div className="main-container">
        <div className="inner-container">
            <div className="title-container">
                <h1>{title}</h1>
            </div>
            
            {children}
        </div>
    </div>
  )
}

export default PanelBody
