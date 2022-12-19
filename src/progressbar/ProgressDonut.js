import '../App.css';

const ProgressBar = (props) => {
  let {
    size = 300,
    progress = 33,
    trackWidth = 10,
    trackColor = `#F27405 `,
    indicatorWidth = 10,
    indicatorColor = `#75BA20 `,
    indicatorCap = `round`,
    label = `33 %`,
    labelColor = `#333`,
    spinnerMode = false,
    spinnerSpeed = 1,
    trackWidthEmp = 10,
    indicatorWidthEmp = 10,
    progressEmpl = 50,
    labelEmpl = `50 %`,
  } = props




const center = size / 2,
radius = center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth),
dashArray = 2 * Math.PI * radius,
dashOffset = dashArray * ((100 - progress) / 100)


 const centerEmpl = size / 2,
 radiusEmpl = centerEmpl - (trackWidthEmp > indicatorWidthEmp ? trackWidthEmp : indicatorWidthEmp),
 dashArrayEmpl = 2 * Math.PI * radiusEmpl,
 dashOffsetEmpl = dashArrayEmpl * ((100 - progressEmpl) / 100)



let hideLabel = (size < 100 || !label.length || spinnerMode) ? true : false

  return (

    <div className='card'>
    <div className='card-body'>
    <h5 class="card-title">Oppgaver</h5>
    <div className='row'>
    <div className='col'>
    



    {!hideLabel && (
      <div 
        className="svg-pi-label" 
        style={{ color: labelColor }}
      >
         <span className="svg-pi-label__loading">
          {label}
        </span>
      </div>
      
    )}





    </div>


    <div className='col'>
    {!hideLabel && (
      <div 
        className="svg-pi-label" 
        style={{ color: labelColor }}
      >
         <span className="svg-pi-label__loading">
          {labelEmpl}
        </span>
      </div>
  
    </div>
    </div>
    


    </div>
    



    </div>


  )
}

export default ProgressBar
